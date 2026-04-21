export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#081325] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,37,0.20)_0%,rgba(7,19,37,0.42)_34%,rgba(7,19,37,0.68)_62%,rgba(7,19,37,0.90)_100%)]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/flag-bg.jpg"
            alt=""
            className="absolute -left-20 -top-2 h-[32rem] w-[68rem] rotate-[-5deg] object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,37,0.06)_0%,rgba(7,19,37,0.18)_28%,rgba(7,19,37,0.42)_58%,rgba(7,19,37,0.78)_100%)]" />
        </div>

        <header className="relative z-10 border-b border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-[minmax(16rem,0.95fr)_minmax(0,1.55fr)] items-center gap-8 px-6 py-5 md:px-10">
            <div className="pr-4 lg:pr-6">
              <div className="text-[2rem] font-black uppercase leading-none tracking-[0.16em]">Matt Channon</div>
              <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.34em] text-white/75">
                Walk-On for U.S. Senate
              </div>
            </div>
            <nav className="hidden grid-cols-3 items-start justify-self-end gap-6 md:grid lg:gap-8">
              <a href="#about" className="group min-w-[12rem] text-left">
                <div className="text-base font-black uppercase leading-none tracking-[0.14em] text-white transition group-hover:text-red-200">
                  Meet Matt
                </div>
                <div className="mt-2 text-[9px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/70 transition group-hover:text-white/90">
                  Engineer • Inventor • <span className="whitespace-nowrap">Uber Driver</span> • <span className="whitespace-nowrap">Dad</span>
                </div>
              </a>
              <a href="#issues" className="group min-w-[10.75rem] text-left">
                <div className="text-base font-black uppercase leading-none tracking-[0.14em] text-white transition group-hover:text-red-200">
                  Priorities
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-white/70 transition group-hover:text-white/90">
                  Fix What Is Broken
                </div>
              </a>
              <a href="#movement" className="group min-w-[10.75rem] text-left">
                <div className="text-base font-black uppercase leading-none tracking-[0.14em] text-white transition group-hover:text-red-200">
                  Get Involved
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-white/70 transition group-hover:text-white/90">
                  A New Mexico Original
                </div>
              </a>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/90 shadow-lg backdrop-blur">
                New Mexico • Strength • Accountability
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-[5.1rem]">
                $4 gas. $6 diesel. $200 grocery bills. Housing costs are insane.
                <span className="mt-4 block text-red-200">Are you better off than you were in 2020?</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                New Mexicans are in pain. They do not need another polished slogan or another empty suit in Washington. They need an engineer who understands how systems break down, how to fix what is broken, and how to make government work for ordinary people again.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#movement"
                  className="rounded-2xl bg-red-700 px-7 py-4 text-base font-extrabold uppercase tracking-[0.14em] text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-red-600"
                >
                  Join the Campaign
                </a>
                <a
                  href="#issues"
                  className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-base font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-white/20"
                >
                  View Priorities
                </a>
                <a
                  href="https://calendly.com/mchannon/10-minute-meeting"
                  className="rounded-2xl border border-red-300/50 bg-red-700/20 px-7 py-4 text-base font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-red-700/30"
                >
                  Tell Matt What You Think
                </a>
              </div>

              <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/12 bg-white/10 px-5 py-5 backdrop-blur">
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-red-200">Straight talk</div>
                  <div className="mt-2 text-sm leading-6 text-slate-100">Clear language, practical thinking, and respect for the people footing the bill.</div>
                </div>
                <div className="rounded-[1.75rem] border border-white/12 bg-white/10 px-5 py-5 backdrop-blur">
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-red-200">New Mexico first</div>
                  <div className="mt-2 text-sm leading-6 text-slate-100">A campaign built around the needs of the state, not the comfort of insiders.</div>
                </div>
                <div className="rounded-[1.75rem] border border-white/12 bg-white/10 px-5 py-5 backdrop-blur">
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-red-200">Built to solve</div>
                  <div className="mt-2 text-sm leading-6 text-slate-100">Serious about accountability, growth, public trust, and getting results.</div>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-lg">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="border-b border-white/10 px-8 py-6">
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">A simple question</div>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-white">The last thing we need is six more years of more of the same.</h2>
                </div>
                <div className="space-y-5 px-8 py-8 text-base leading-8 text-slate-100">
                  <p>
                    Washington is already a mess, and when this chapter ends the cleanup will be even harder. New Mexico needs a senator who knows how to repair broken systems, restore law and order, and help build something better after the noise clears.
                  </p>
                  <p>
                    This campaign is about public honesty, economic seriousness, secure communities, and representing the people of this state with competence, clarity, and purpose.
                  </p>
                  <div className="rounded-[1.5rem] bg-white/10 p-5 text-sm leading-7 text-white/95 ring-1 ring-white/10">
                    <span className="font-extrabold uppercase tracking-[0.14em] text-red-200">Core promise:</span>{' '}
                    Clean up the mess, fix what is broken, and build a government worth trusting again.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-[#0b1a31] p-8 text-white shadow-xl">
              <div className="text-sm font-bold uppercase tracking-[0.24em] text-red-300">Meet Matt</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Engineer. Inventor. Uber driver. Dad.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-100">
                Matt Channon brings a direct style, an engineering mindset, and a builder’s instinct for fixing what is broken. He believes public office should solve problems, serve citizens, and earn back the trust that government has squandered.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-100">
                His campaign is rooted in the conviction that New Mexico can be safer, stronger, more productive, and better served by leaders who know how to build instead of merely posture.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-blue-900">Independent judgment</div>
                <p className="mt-4 leading-8 text-slate-700">
                  This campaign is not built to flatter consultants, party gatekeepers, or legacy power centers. It is built to represent voters.
                </p>
              </div>
              <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-blue-900">Real-world experience</div>
                <p className="mt-4 leading-8 text-slate-700">
                  Entrepreneurial and technical experience inform a practical approach to jobs, industry, infrastructure, and accountability.
                </p>
              </div>
              <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 md:col-span-2">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-blue-900">A campaign with a clear point of view</div>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  New Mexico needs leadership that is candid, competent, and ready for the cleanup job ahead. Sooner or later, somebody has to clean up Washington. Do you trust the other guy to even pick up a hammer?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="issues" className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.24em] text-red-700">Priorities</div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Fix What Is Broken</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              New Mexico needs law, order, rights protected, honest courts, and a government that remembers it answers to the people.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-red-700" />
              <h3 className="text-2xl font-black tracking-tight">Corrupt Officials Belong in Jail</h3>
              <p className="mt-4 leading-8 text-slate-700">
                Public office is not a license to loot, lie, or abuse power. Corrupt officials should be investigated, prosecuted, and punished.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-blue-900" />
              <h3 className="text-2xl font-black tracking-tight">Clean Up Our Courts</h3>
              <p className="mt-4 leading-8 text-slate-700">
                Courts exist to deliver justice, not shelter insiders, reward gamesmanship, or drift into institutional decay.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-slate-900" />
              <h3 className="text-2xl font-black tracking-tight">2nd Amendment Rights</h3>
              <p className="mt-4 leading-8 text-slate-700">
                Law-abiding citizens should not lose constitutional rights because Washington prefers symbolism over liberty and self-defense.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-red-700" />
              <h3 className="text-2xl font-black tracking-tight">Bring Back Law &amp; Order</h3>
              <p className="mt-4 leading-8 text-slate-700">
                Safe neighborhoods matter. Restore consequences, support public safety, and stop treating disorder like a permanent fact of life.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-blue-900" />
              <h3 className="text-2xl font-black tracking-tight">Answer to the People</h3>
              <p className="mt-4 leading-8 text-slate-700">
                Government should listen to constituents, not just donors, consultants, and insiders who think the public exists to be managed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="movement" className="relative overflow-hidden bg-[#0a1730] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(185,28,28,0.18),transparent_32%,transparent_68%,rgba(29,78,216,0.16))]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.24em] text-red-200">Join the campaign</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Help send a builder to Washington.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                Add your name, stay informed, and help build a statewide effort to clean up the mess in Washington, restore honest government, and send someone who knows how to build instead of merely talk.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <div className="text-2xl font-black tracking-tight">Get involved</div>
              <p className="mt-3 text-base leading-7 text-slate-100">
                Want to say what is working, what is broken, or what Washington keeps missing? Tell Matt what you think.
              </p>
              <div className="mt-6 grid gap-4 text-sm font-bold uppercase tracking-[0.14em] text-white/95 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 px-5 py-4">Volunteer</div>
                <div className="rounded-2xl bg-white/10 px-5 py-4">County outreach</div>
                <div className="rounded-2xl bg-white/10 px-5 py-4">Events</div>
                <div className="rounded-2xl bg-white/10 px-5 py-4">Press inquiries</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/mchannon/10-minute-meeting"
                  className="inline-flex rounded-2xl bg-red-700 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-red-600"
                >
                  Tell Matt What You Think
                </a>
                <a
                  href="#top"
                  className="inline-flex rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Stand with Matt
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <p>© MattChannon.com</p>
            <p>Matt Channon for United States Senate</p>
          </div>
          <div className="mt-3 flex flex-col gap-2 text-xs uppercase tracking-[0.14em] text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>FEC Committee ID: C00947622</p>
            <p>Paid for by Matt Channon for Senate</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
