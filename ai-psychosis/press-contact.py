#!/usr/bin/env python3
"""
press-contact.py — small, dependency-free CGI contact endpoint.

Deployment assumptions:
  * CGI is enabled for /cgi-bin/
  * Python 3 is available
  * /usr/sbin/sendmail exists (common on cPanel/shared Unix hosting)
  * The process can write to PRESS_LOG_PATH

Configure with environment variables where possible:
  PRESS_TO        destination mailbox (required)
  PRESS_FROM      envelope/display sender (default: press-form@mattchannon.com)
  PRESS_LOG_PATH  absolute JSONL log path OUTSIDE the public web root
  PRESS_RETURN    success return URL (default: /ai-psychosis/?sent=1#press-contact)

Important: the JSONL log is written BEFORE email is attempted, so a submission
can survive a mail-delivery failure.
"""

import html
import json
import os
import re
import subprocess
import sys
import time
from datetime import datetime, timezone
from email.message import EmailMessage
from pathlib import Path
from urllib.parse import parse_qs

MAX_BODY = 64 * 1024
SENDMAIL = "/usr/sbin/sendmail"

PRESS_TO = os.environ.get("PRESS_TO", "CHANGE-ME@example.com")
PRESS_FROM = os.environ.get("PRESS_FROM", "press-form@mattchannon.com")
PRESS_LOG_PATH = os.environ.get(
    "PRESS_LOG_PATH",
    "/home/CHANGE-ME/private/press-contact.jsonl",
)
PRESS_RETURN = os.environ.get(
    "PRESS_RETURN",
    "/ai-psychosis/?sent=1#press-contact",
)

def fail(message, status="400 Bad Request"):
    print(f"Status: {status}")
    print("Content-Type: text/html; charset=utf-8")
    print("Cache-Control: no-store")
    print()
    safe = html.escape(message)
    print(f"<!doctype html><meta charset='utf-8'><title>Form error</title>"
          f"<p>{safe}</p><p><a href='/ai-psychosis/'>Return to the press page</a></p>")
    raise SystemExit

def clean(value, limit):
    value = (value or "").replace("\x00", "").strip()
    value = re.sub(r"[\r\n]+", " ", value) if limit <= 300 else value
    return value[:limit]

def valid_email(value):
    # Deliberately modest validation; final delivery is the real test.
    return bool(re.fullmatch(r"[^@\s]{1,64}@[^@\s]{1,190}", value))

if os.environ.get("REQUEST_METHOD", "").upper() != "POST":
    fail("This endpoint accepts POST requests only.", "405 Method Not Allowed")

ctype = os.environ.get("CONTENT_TYPE", "")
if not ctype.startswith("application/x-www-form-urlencoded"):
    fail("Unsupported form encoding.")

try:
    length = int(os.environ.get("CONTENT_LENGTH", "0"))
except ValueError:
    fail("Invalid request length.")

if length <= 0 or length > MAX_BODY:
    fail("Invalid request size.")

raw = sys.stdin.buffer.read(length)
try:
    params = parse_qs(raw.decode("utf-8"), keep_blank_values=True)
except UnicodeDecodeError:
    fail("Invalid text encoding.")

def one(name):
    vals = params.get(name, [""])
    return vals[0]

# Honeypot: humans never see/fill this.
if one("website").strip():
    # Return success to bots rather than teaching them the trap.
    print("Status: 303 See Other")
    print(f"Location: {PRESS_RETURN}")
    print("Cache-Control: no-store")
    print()
    raise SystemExit

name = clean(one("name"), 120)
outlet = clean(one("outlet"), 160)
email_addr = clean(one("email"), 254)
callback = clean(one("callback"), 160)
deadline = clean(one("deadline"), 160)
subject = clean(one("subject"), 180)
message = clean(one("message"), 10000)
form_started = clean(one("form_started"), 32)

if not name or not email_addr or not subject or not message:
    fail("Please complete all required fields.")
if not valid_email(email_addr):
    fail("Please provide a valid email address.")

# Lightweight bot-speed check. Failure does not discard the message; it is flagged.
too_fast = False
try:
    elapsed_ms = int(time.time() * 1000) - int(form_started)
    too_fast = elapsed_ms < 1800
except Exception:
    too_fast = True

record = {
    "received_utc": datetime.now(timezone.utc).isoformat(),
    "name": name,
    "outlet": outlet,
    "email": email_addr,
    "callback": callback,
    "deadline": deadline,
    "subject": subject,
    "message": message,
    "remote_addr": os.environ.get("REMOTE_ADDR", ""),
    "user_agent": os.environ.get("HTTP_USER_AGENT", "")[:500],
    "too_fast": too_fast,
}

# Durable append-only copy. Keep this path OUTSIDE public_html / document root.
try:
    log_path = Path(PRESS_LOG_PATH)
    log_path.parent.mkdir(parents=True, exist_ok=True)
    with log_path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")
except Exception:
    # Logging is a core design goal; don't pretend success if it fails.
    fail("The contact form could not safely record your submission. Please try again later.",
         "503 Service Unavailable")

# Email notification. The stored log remains even if this step fails.
mail_ok = False
if PRESS_TO != "CHANGE-ME@example.com" and os.path.exists(SENDMAIL):
    msg = EmailMessage()
    msg["To"] = PRESS_TO
    msg["From"] = PRESS_FROM
    msg["Reply-To"] = email_addr
    msg["Subject"] = f"[Press inquiry] {subject}"
    msg.set_content(
        f"Name: {name}\n"
        f"Outlet: {outlet or '(not supplied)'}\n"
        f"Email: {email_addr}\n"
        f"Callback: {callback or '(not supplied)'}\n"
        f"Deadline: {deadline or '(not supplied)'}\n"
        f"Received UTC: {record['received_utc']}\n"
        f"Remote address: {record['remote_addr']}\n"
        f"Fast-submit flag: {too_fast}\n\n"
        f"{message}\n"
    )
    try:
        subprocess.run(
            [SENDMAIL, "-t", "-oi"],
            input=msg.as_bytes(),
            check=True,
            timeout=10,
        )
        mail_ok = True
    except Exception:
        mail_ok = False

# Optional receipt to sender. We only send if local sendmail is functional.
if mail_ok:
    receipt = EmailMessage()
    receipt["To"] = email_addr
    receipt["From"] = PRESS_FROM
    receipt["Subject"] = "Press inquiry received — United States v. Channon"
    receipt.set_content(
        "Your press inquiry was received and logged by mattchannon.com.\n\n"
        "This automated receipt confirms only delivery of the web form, not a substantive response.\n"
    )
    try:
        subprocess.run(
            [SENDMAIL, "-t", "-oi"],
            input=receipt.as_bytes(),
            check=False,
            timeout=10,
        )
    except Exception:
        pass

print("Status: 303 See Other")
print(f"Location: {PRESS_RETURN}")
print("Cache-Control: no-store")
print()
