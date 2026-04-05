"use client";

import { FormEvent, useCallback } from "react";

const nav = [
  { href: "#problem", label: "Problem" },
  { href: "#why-now", label: "Why now" },
  { href: "#how", label: "How it works" },
  { href: "#example", label: "Sample deal" },
  { href: "#wins", label: "Why us" },
  { href: "#pricing", label: "Pricing" },
] as const;

const SECTION_Y = "scroll-mt-16 py-14 sm:py-20";

function preventNavigate(e: FormEvent) {
  e.preventDefault();
}

const PRO_MAIL =
  "mailto:hello@brickiq.co.uk?subject=BrickIQ%20Pro&body=Hi%2C%20I%27d%20like%20to%20talk%20about%20Pro.";

export function LandingPage() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900">
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#fafaf9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
          <a
            href="#hero-cta"
            className="shrink-0 text-lg font-semibold tracking-tight text-stone-900"
          >
            Brick<span className="text-emerald-700">IQ</span>
          </a>
          <nav
            className="flex min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto overscroll-x-contain py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:gap-1 [&::-webkit-scrollbar]:hidden"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg px-2 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 sm:px-2.5 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => scrollTo("pricing")}
              className="hidden rounded-lg border border-stone-300 bg-white px-2.5 py-2 text-xs font-medium text-stone-800 shadow-sm transition hover:bg-stone-50 sm:inline-flex sm:px-3 sm:text-sm"
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={() => scrollTo("hero-cta")}
              className="rounded-lg bg-stone-900 px-2.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-stone-800 sm:px-3 sm:text-sm"
            >
              Try it
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section
          id="hero-cta"
          className="relative overflow-hidden border-b border-stone-200/60 bg-gradient-to-b from-white to-stone-100"
          aria-labelledby="hero-heading"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.1),transparent)]" />
          <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-11 sm:px-6 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
            <p className="mb-3 inline-flex items-center rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-900 sm:text-xs">
              UK property · First-pass underwriting
            </p>
            <h1
              id="hero-heading"
              className="max-w-3xl text-balance text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-stone-900 sm:text-4xl md:text-[2.65rem] md:leading-[1.1]"
            >
              A standard first-pass on UK deals—before the spreadsheet.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-stone-600 sm:mt-5 sm:text-lg">
              Paste a Rightmove link. Get estimated profit, ROI, valuation
              confidence, risk flags, and a deal score—fast enough to run on every
              lead.
            </p>

            <form
              onSubmit={preventNavigate}
              className="mt-9 flex max-w-2xl flex-col gap-3 sm:mt-10 sm:flex-row sm:items-stretch"
            >
              <label className="sr-only" htmlFor="rm-url">
                Rightmove listing URL
              </label>
              <input
                id="rm-url"
                name="url"
                type="url"
                inputMode="url"
                autoComplete="off"
                placeholder="https://www.rightmove.co.uk/properties/…"
                className="min-h-[48px] flex-1 rounded-xl border border-stone-300 bg-white px-4 text-base text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 sm:text-sm"
              />
              <button
                type="submit"
                className="min-h-[48px] shrink-0 rounded-xl bg-emerald-700 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800"
              >
                Run first-pass
              </button>
            </form>
            <div className="mt-4 flex flex-col gap-2 text-sm text-stone-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1">
              <button
                type="button"
                onClick={() => scrollTo("example")}
                className="w-fit text-left font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-900"
              >
                See sample output
              </button>
              <span className="hidden text-stone-400 sm:inline" aria-hidden>
                ·
              </span>
              <span className="max-w-md leading-snug">
                For buy-to-let, sourcers, and first-time investors screening
                listings weekly.
              </span>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className={`${SECTION_Y} border-b border-stone-200/80 bg-[#fafaf9]`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 sm:text-sm">
                The bottleneck
              </h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl md:text-3xl">
                Deals still die in scattered spreadsheets.
              </p>
              <p className="mt-3 text-base leading-relaxed text-stone-600 sm:mt-4 sm:text-lg">
                Same numbers pulled from portals and comps, deal after deal—slow,
                inconsistent, and easy to miss a red flag when you are tired.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
              {[
                {
                  title: "Time cost",
                  body: "Manual checks do not compound—each listing costs hours before you even offer.",
                },
                {
                  title: "Price risk",
                  body: "Small misses on rent, refurb, or value stack into serious money at offer.",
                },
                {
                  title: "No shared score",
                  body: "Without one comparable view, it is hard to rank deals or align a sourcing team.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <h3 className="text-sm font-semibold text-stone-900 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why now */}
        <section id="why-now" className={`${SECTION_Y} border-b border-stone-200/80 bg-white`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 sm:text-sm">
              Why now
            </h2>
            <p className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl md:text-3xl">
              Listings are instant. First-pass analysis still is not.
            </p>
            <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-7">
                <h3 className="text-sm font-semibold text-stone-900 sm:text-base">
                  Stock moves fast
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  Investors who can respond with a disciplined pass—without
                  losing evenings to each link—keep pipelines moving.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-7">
                <h3 className="text-sm font-semibold text-stone-900 sm:text-base">
                  Rightmove is the front door
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  A thin, repeatable layer on the link you already share is the
                  natural place to start—before portfolio tools and deeper data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className={`${SECTION_Y} border-b border-stone-200/80 bg-[#fafaf9]`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 sm:text-sm">
              How it works
            </h2>
            <p className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl md:text-3xl">
              One link in. One comparable snapshot out.
            </p>
            <ol className="mt-8 grid gap-8 sm:mt-10 md:grid-cols-3 md:gap-6">
              {[
                {
                  step: "01",
                  title: "Paste the listing",
                  text: "Use the Rightmove URL you already have.",
                },
                {
                  step: "02",
                  title: "Review the pass",
                  text: "Profit, ROI, assumptions, valuation band, and risks in one view.",
                },
                {
                  step: "03",
                  title: "Filter with a score",
                  text: "One deal score to shortlist, compare, and brief a broker quickly.",
                },
              ].map((row) => (
                <li key={row.step} className="flex flex-col border-l-2 border-emerald-200 pl-4 md:border-l-0 md:border-t-2 md:pt-4 md:pl-0">
                  <span className="font-mono text-[11px] font-semibold text-emerald-700">
                    {row.step}
                  </span>
                  <h3 className="mt-1.5 text-base font-semibold text-stone-900">
                    {row.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {row.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone-500 sm:mt-10">
              Estimates from listing inputs and your stated assumptions—confirm
              material numbers before you offer. Not financial advice.
            </p>
          </div>
        </section>

        {/* Example output */}
        <section id="example" className={`${SECTION_Y} border-b border-stone-200/80 bg-white`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center sm:text-left">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 sm:text-sm">
                Sample output
              </h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl md:text-3xl">
                The snapshot you see before Excel.
              </p>
              <p className="mt-2 text-sm text-stone-600 sm:text-base">
                Illustrative terraced BTL, Leeds LS6—assumptions editable in
                product.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
              <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-50 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)] ring-1 ring-stone-900/5">
                <div className="flex flex-col gap-4 border-b border-stone-200 bg-gradient-to-b from-white to-stone-50/80 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
                  <div className="text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
                      First-pass preview
                    </p>
                    <p className="mt-1 font-semibold text-stone-900">
                      Leeds · LS6 · Terraced freehold
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-stone-500">
                      rightmove.co.uk/…/123456789
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-between gap-3 rounded-xl bg-emerald-600/10 px-4 py-3.5 ring-1 ring-emerald-600/20 sm:w-auto sm:justify-end sm:py-4">
                    <span className="text-sm font-medium text-emerald-900">
                      Deal score
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-semibold tabular-nums tracking-tight text-emerald-900 sm:text-[2.5rem]">
                        78
                      </span>
                      <span className="text-sm text-emerald-800">/ 100</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-px bg-stone-200/90 sm:grid-cols-2">
                  {[
                    {
                      label: "Est. profit (after costs)",
                      value: "£41,200",
                      hint: "24-mo horizon, base case",
                    },
                    {
                      label: "Projected ROI",
                      value: "21.4%",
                      hint: "On cash invested",
                    },
                    {
                      label: "Valuation confidence",
                      value: "High",
                      hint: "Vs local rent & sold evidence",
                    },
                    {
                      label: "Risk level",
                      value: "Moderate",
                      hint: "Void + refurb sensitivity",
                    },
                  ].map((cell) => (
                    <div key={cell.label} className="bg-white p-4 sm:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
                        {cell.label}
                      </p>
                      <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight text-stone-900">
                        {cell.value}
                      </p>
                      <p className="mt-1 text-xs text-stone-500">{cell.hint}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-stone-200 bg-white px-5 py-4 sm:px-7 sm:py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-900">
                    Flags
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm leading-snug text-stone-700">
                    <li>EPC borderline—budget uplift if you need a higher rent band.</li>
                    <li>Similar stock traded ~6% below asking in the last 90 days.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className={`${SECTION_Y} border-b border-stone-200/80 bg-[#fafaf9]`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 sm:text-sm">
              Why investors use it
            </h2>
            <p className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl md:text-3xl">
              Screen more deals without adding headcount.
            </p>
            <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {[
                "Sourcers submit deals in one format—easier to review and reject quickly.",
                "Deep-dive only where the score and flags justify the time.",
                "Explicit assumptions surface overpay risk before you get attached.",
                "Same workflow whether you run one deal a month or twenty.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-stone-700">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why BrickIQ wins */}
        <section id="wins" className={`${SECTION_Y} border-b border-stone-200/80 bg-white`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 sm:text-sm">
              Why BrickIQ
            </h2>
            <p className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl md:text-3xl">
              Same front door as your pipeline. Room to grow from there.
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-6">
              {[
                {
                  title: "Starts at the link",
                  body: "No migration project—investors already begin on Rightmove.",
                },
                {
                  title: "Consistent columns",
                  body: "Same outputs every time—works solo or when you need everyone aligned.",
                },
                {
                  title: "Natural expansion",
                  body: "First-pass underwriting can extend into tracking, alerts, and richer UK data when you are ready.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6"
                >
                  <h3 className="text-sm font-semibold text-stone-900 sm:text-base">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section
          id="operators"
          className="scroll-mt-16 border-b border-stone-200/80 bg-[#fafaf9] py-14 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 sm:text-sm">
              From operators
            </h2>
            <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2 md:gap-6">
              <figure className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
                <blockquote className="text-sm leading-relaxed text-stone-700">
                  “We used to pass screenshots around. Now we look at the same
                  score and assumptions before we book a viewing.”
                </blockquote>
                <figcaption className="mt-3 text-xs font-medium text-stone-500">
                  Buy-to-let investor, Greater Manchester
                </figcaption>
              </figure>
              <figure className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
                <blockquote className="text-sm leading-relaxed text-stone-700">
                  “I still model properly before offer—but I drop half my no-hopers
                  in five minutes instead of a full evening.”
                </blockquote>
                <figcaption className="mt-3 text-xs font-medium text-stone-500">
                  Sourcer, West Midlands
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className={`${SECTION_Y} border-b border-stone-200/80 bg-white`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 sm:text-sm">
              Pricing
            </h2>
            <p className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl md:text-3xl">
              Pay for pipeline throughput—not a one-off toy.
            </p>
            <p className="mt-2 max-w-2xl text-sm text-stone-600 sm:text-base">
              Starter validates the workflow. Pro matches investors who screen
              weekly and want shared assumptions across deals.
            </p>
            <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:mt-10 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8">
                <h3 className="text-lg font-semibold text-stone-900">Starter</h3>
                <p className="mt-1 text-sm text-stone-600">
                  Try the first-pass on your next few listings.
                </p>
                <p className="mt-5">
                  <span className="text-4xl font-semibold tracking-tight text-stone-900">
                    £0
                  </span>
                  <span className="ml-2 text-sm text-stone-600">
                    · 14-day trial
                  </span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-700" aria-hidden>
                      ✓
                    </span>
                    <span>Full first-pass per listing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-700" aria-hidden>
                      ✓
                    </span>
                    <span>Deal score + summary you can share</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-700" aria-hidden>
                      ✓
                    </span>
                    <span>Email support</span>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={() => scrollTo("hero-cta")}
                  className="mt-auto w-full rounded-xl border border-stone-300 bg-white py-3 text-sm font-semibold text-stone-900 shadow-sm transition hover:bg-stone-50"
                >
                  Start with a listing
                </button>
              </div>
              <div className="relative flex flex-col rounded-2xl border-2 border-emerald-700/35 bg-white p-6 shadow-md ring-1 ring-emerald-800/10 sm:p-8">
                <span className="absolute -top-3 left-5 rounded-full bg-emerald-700 px-3 py-0.5 text-[11px] font-semibold text-white sm:left-6">
                  Weekly screening
                </span>
                <h3 className="text-lg font-semibold text-stone-900">Pro</h3>
                <p className="mt-1 text-sm text-stone-600">
                  For active investors and sourcers running volume.
                </p>
                <p className="mt-5">
                  <span className="text-4xl font-semibold tracking-tight text-stone-900">
                    £39
                  </span>
                  <span className="text-stone-600"> / month</span>
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  Per workspace · cancel any time
                </p>
                <ul className="mt-5 space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-700" aria-hidden>
                      ✓
                    </span>
                    <span>Higher weekly first-pass allowance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-700" aria-hidden>
                      ✓
                    </span>
                    <span>Shared assumption templates</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-700" aria-hidden>
                      ✓
                    </span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <a
                  href={PRO_MAIL}
                  className="mt-auto flex min-h-[48px] w-full items-center justify-center rounded-xl bg-emerald-700 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800"
                >
                  Talk to us about Pro
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="cta"
          className="scroll-mt-16 bg-gradient-to-b from-stone-900 to-stone-950 py-14 text-white sm:py-20"
        >
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
              First-pass the next deal in minutes—not tonight.
            </h2>
            <p className="mt-3 text-base text-stone-300 sm:mt-4 sm:text-lg">
              Paste a Rightmove link. Get profit, ROI, flags, and a score before
              you model the edge cases.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:justify-center sm:gap-4">
              <button
                type="button"
                onClick={() => scrollTo("hero-cta")}
                className="min-h-[48px] w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg transition hover:bg-stone-100 sm:w-auto sm:min-w-[200px]"
              >
                Paste a listing
              </button>
              <button
                type="button"
                onClick={() => scrollTo("example")}
                className="min-h-[48px] w-full rounded-xl border border-stone-500 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:min-w-[200px]"
              >
                View sample output
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-[#fafaf9] py-9 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div>
            <p className="font-semibold text-stone-900">
              Brick<span className="text-emerald-700">IQ</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-stone-600">
              First-pass analysis for UK property investors. Estimates only—not
              financial, tax, or legal advice.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-stone-500 sm:items-end">
            <p>© {new Date().getFullYear()} BrickIQ</p>
            <button
              type="button"
              onClick={() => scrollTo("hero-cta")}
              className="w-fit font-medium text-emerald-800 hover:underline"
            >
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
