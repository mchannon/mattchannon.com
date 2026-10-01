# Deployment notes — mattchannon.com/ai-psychosis

Files
-----
- `index.html` — press landing page
- `press-contact.py` — CGI form endpoint

Suggested layout
----------------
public_html/
  ai-psychosis/
    index.html
  cgi-bin/
    press-contact.py

private/
  press-contact.jsonl     <-- NOT under public_html

CGI setup
---------
1. Put `press-contact.py` in your CGI-enabled directory.
2. Make it executable:
   chmod 700 press-contact.py
3. Configure these environment variables in the hosting control panel if supported:
   PRESS_TO=your-private-destination@example.com
   PRESS_FROM=press-form@mattchannon.com
   PRESS_LOG_PATH=/home/YOURUSER/private/press-contact.jsonl
   PRESS_RETURN=/ai-psychosis/?sent=1#press-contact

If your host does not support CGI environment variables, edit the defaults near
the top of `press-contact.py`.

4. Ensure the `private` directory is writable by the CGI process but is not
web-accessible.
5. Test with a real form submission. Confirm BOTH:
   - a new JSON line appears in the log
   - the email notification arrives

If `/usr/sbin/sendmail` is unavailable, the submission will still be logged, but
email notification will not be sent. In that case, adapt the script to your host's
SMTP service or mail API.

Security / privacy choices
--------------------------
- No public phone number is required.
- Reporters can provide their own phone, Signal, or WhatsApp contact.
- Honeypot and minimum-submit-time signals reduce simple bot spam.
- Request body is capped at 64 KiB.
- The durable log is written before email is attempted.
- Do NOT put the JSONL log inside `public_html`.
- If the form attracts heavy spam, add a provider-neutral CAPTCHA later.

PGP
---
I would not put a PGP block on the front page initially. It makes a simple press
contact surface look more technical than necessary. If encrypted source contact
becomes relevant, add a small "Encrypted contact available on request" line or a
separate `/contact-security` page.

CourtListener links
-------------------
The three primary PDF links use `#page=N` fragments AND visible page descriptions.
That is intentional belt-and-suspenders navigation.
