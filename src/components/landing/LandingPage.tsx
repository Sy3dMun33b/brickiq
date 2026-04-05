"use client";

import { FormEvent, useCallback } from "react";

const nav = [
  { href: "#problem", label: "Problem" },
  { href: "#why-now", label: "Why now" },
  { href: "#how", label: "Product" },
  { href: "#example", label: "Sample deal" },
  { href: "#wins", label: "Edge" },
  { href: "#pricing", label: "Plans" },
] as const;

function preventNavigate(e: FormEvent) {
  e.preventDefault();
}

export function LandingPage() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900">
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#fafaf9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="text-lg font-semibold tracking-tight text-stone-900">
            Brick<span className="text-emerald-700">IQ</span>
          </a>
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollTo("pricing")}
              className="hidden rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-800 shadow-sm transition hover:bg-stone-50 sm:inline-flex"
            >
              View plans
            </button>
            <button
              type="button"
              onClick={() => scrollTo("hero-cta")}
              className="rounded-lg bg-stone-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-800"
            >
              Try a deal
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
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
          <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pt-20">
            <p className="mb-4 inline-flex items-center rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900">
              UK property · First-pass underwriting
            </p>
            <h1
              id="hero-heading"
              className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-5xl md:leading-[1.1]"
            >
              A standard first-pass on UK deals—before the spreadsheet.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-stone-600 sm:text-xl">
              Paste a Rightmove link. BrickIQ returns estimated profit, ROI,
              valuation confidence, risk flags, and a single deal score—so you
              screen faster and commit capital with clearer discipline.
            </p>

            <form
              onSubmit={preventNavigate}
              className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-stretch"
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
                className="min-h-[48px] flex-1 rounded-xl border border-stone-300 bg-white px-4 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
              />
              <button
                type="submit"
                className="min-h-[48px] shrink-0 rounded-xl bg-emerald-700 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800"
              >
                Run analysis
              </button>
            </form>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-stone-500">
              <button
                type="button"
                onClick={() => scrollTo("example")}
                className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-900"
              >
                View sample output
              </button>
              <span className="hidden sm:inline" aria-hidden>
                ·
              </span>
              <span>For buy-to-let, sourcers, and first-time investors screening volume.</span>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section
          id="problem"
          className="scroll-mt-20 border-b border-stone-200/80 bg-[#fafaf9] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
                The bottleneck
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                Deals still die in scattered spreadsheets.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                Most investors pull the same numbers from portals, comparables,
                and rough rules of thumb—every time, for every listing. It is
                slow, inconsistent, and easy to miss a red flag when you are
                tired.
              </p>
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Time cost",
                  body: "Hours per deal on manual checks that do not compound across your pipeline.",
                },
                {
                  title: "Price risk",
                  body: "Small misses on rent, refurb, or value stack into five-figure errors at offer.",
                },
                {
                  title: "Weak comparability",
                  body: "Without a shared score, you cannot rank opportunities or coach a sourcing team.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why now */}
        <section
          id="why-now"
          className="scroll-mt-20 border-b border-stone-200/80 bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              Why now
            </h2>
            <p className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Listings are digital. Underwriting is not—yet.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
                <h3 className="font-semibold text-stone-900">Market pressure</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Stock competes quickly. The investors who respond with a
                  disciplined first-pass—without burning evenings on each
                  link—keep sourcing pipelines moving.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
                <h3 className="font-semibold text-stone-900">Workflow reality</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Rightmove is the common front door. A thin, repeatable
                  analysis layer on top of that link is the natural wedge into
                  portfolio tracking, team workflows, and deeper data later.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="scroll-mt-20 border-b border-stone-200/80 bg-[#fafaf9] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              How BrickIQ works
            </h2>
            <p className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              One link in. A comparable snapshot out.
            </p>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Paste the listing",
                  text: "Start from the Rightmove URL you already have—no new data entry workflow.",
                },
                {
                  step: "02",
                  title: "Review the pass",
                  text: "See profit, ROI, assumptions, valuation band, and flagged risks side by side.",
                },
                {
                  step: "03",
                  title: "Decide with a score",
                  text: "Use one deal score to shortlist, compare, and brief brokers or partners fast.",
                },
              ].map((row) => (
                <li key={row.step} className="relative flex flex-col">
                  <span className="font-mono text-xs font-semibold text-emerald-700">
                    {row.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-stone-900">
                    {row.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {row.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-stone-500">
              Outputs are estimates from listing-derived inputs and stated
              assumptions—always confirm material numbers before you offer. Not
              financial advice.
            </p>
          </div>
        </section>

        {/* Example output */}
        <section
          id="example"
          className="scroll-mt-20 border-b border-stone-200/80 bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              Sample deal output
            </h2>
            <p className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              What you see before you open Excel.
            </p>
            <p className="mt-3 max-w-2xl text-stone-600">
              Illustrative snapshot for a terraced buy-to-let in Leeds (LS6)—assumptions editable in-product.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.12)]">
              <div className="flex flex-col gap-4 border-b border-stone-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                    Deal preview
                  </p>
                  <p className="font-semibold text-stone-900">
                    Leeds · LS6 · Terraced freehold
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-stone-500">
                    rightmove.co.uk/…/123456789
                  </p>
                </div>
                <div className="flex items-baseline gap-2 rounded-xl bg-emerald-50 px-4 py-3 ring-1 ring-emerald-200/80">
                  <span className="text-sm font-medium text-emerald-900">
                    Deal score
                  </span>
                  <span className="text-3xl font-semibold tabular-nums text-emerald-900">
                    78
                  </span>
                  <span className="text-sm text-emerald-700">/ 100</span>
                </div>
              </div>
              <div className="grid gap-px bg-stone-200 sm:grid-cols-2">
                {[
                  { label: "Est. profit (after costs)", value: "£41,200", hint: "24-mo horizon, base case" },
                  { label: "Projected ROI", value: "21.4%", hint: "Cash invested basis" },
                  { label: "Valuation confidence", value: "High", hint: "Vs local rental & sold bands" },
                  { label: "Risk level", value: "Moderate", hint: "Void + refurb sensitivity" },
                ].map((cell) => (
                  <div
                    key={cell.label}
                    className="bg-white p-5 sm:p-6"
                  >
                    <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                      {cell.label}
                    </p>
                    <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight text-stone-900">
                      {cell.value}
                    </p>
                    <p className="mt-1 text-xs text-stone-500">{cell.hint}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-stone-200 bg-white px-5 py-4 sm:px-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                  Flags
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-stone-700">
                  <li>• EPC borderline—budget improvement if targeting higher rent band.</li>
                  <li>• Similar stock transacted 6% below asking in last 90 days.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="benefits"
          className="scroll-mt-20 border-b border-stone-200/80 bg-[#fafaf9] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              Why investors use BrickIQ
            </h2>
            <p className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Screen more deals with the same team.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "A repeatable first-pass so junior sourcers submit deals in a consistent format.",
                "Faster triage: spend deep-dive time only where the score and flags justify it.",
                "Fewer emotional bids—explicit assumptions make overpaying visible early.",
                "A path to workflow software: start at the link, expand across the stack later.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden />
                  <span className="text-sm leading-relaxed text-stone-700">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why BrickIQ wins */}
        <section
          id="wins"
          className="scroll-mt-20 border-b border-stone-200/80 bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              Why BrickIQ wins
            </h2>
            <p className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Wedge product, platform-shaped.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Rightmove-native",
                  body: "Meet investors where they already work. No migration project to get value.",
                },
                {
                  title: "Standardised output",
                  body: "Same columns and score every time—built for individuals and for teams that need comparability.",
                },
                {
                  title: "Room to compound",
                  body: "First-pass underwriting is the thin edge. The natural expansion is portfolio, alerts, and deeper UK data layers.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-6"
                >
                  <h3 className="font-semibold text-stone-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof - specific quotes */}
        <section className="border-b border-stone-200/80 bg-[#fafaf9] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              Operators
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <figure className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-stone-700">
                  “We were sending screenshots between three people. Now everyone
                  looks at the same score and assumption block before we book a
                  viewing.”
                </blockquote>
                <figcaption className="mt-4 text-xs font-medium text-stone-500">
                  — Buy-to-let investor, Greater Manchester
                </figcaption>
              </figure>
              <figure className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-stone-700">
                  “I still underwrite properly before offer—but I kill half my
                  dead deals in five minutes instead of a full evening model.”
                </blockquote>
                <figcaption className="mt-4 text-xs font-medium text-stone-500">
                  — Sourcer, West Midlands
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="scroll-mt-20 border-b border-stone-200/80 bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              Plans
            </h2>
            <p className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Price for throughput, not novelty.
            </p>
            <p className="mt-3 max-w-2xl text-stone-600">
              Starter proves the workflow in your pipeline. Pro is for weekly
              screening volume and consistent scoring across deals.
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-stone-900">
                  Starter
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Prove first-pass underwriting on your next handful of deals.
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-semibold tracking-tight text-stone-900">
                    £0
                  </span>
                  <span className="ml-2 text-sm text-stone-600">
                    · 14-day trial
                  </span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-stone-700">
                  <li>• Full first-pass for each listing you run</li>
                  <li>• Deal score + exportable summary</li>
                  <li>• Email support</li>
                </ul>
                <button
                  type="button"
                  className="mt-8 w-full rounded-xl border border-stone-300 bg-white py-3 text-sm font-semibold text-stone-900 shadow-sm transition hover:bg-stone-50"
                >
                  Start trial
                </button>
              </div>
              <div className="relative flex flex-col rounded-2xl border-2 border-emerald-700/30 bg-white p-8 shadow-md ring-1 ring-emerald-700/10">
                <span className="absolute -top-3 left-6 rounded-full bg-emerald-700 px-3 py-0.5 text-xs font-semibold text-white">
                  For active pipelines
                </span>
                <h3 className="text-lg font-semibold text-stone-900">Pro</h3>
                <p className="mt-1 text-sm text-stone-600">
                  Built for investors and sourcers who screen every week.
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-semibold tracking-tight text-stone-900">
                    £39
                  </span>
                  <span className="text-stone-600"> / month</span>
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  Per workspace · cancel any time
                </p>
                <ul className="mt-6 space-y-2 text-sm text-stone-700">
                  <li>• Higher weekly first-pass volume</li>
                  <li>• Shared assumptions templates for your team</li>
                  <li>• Priority support + roadmap input</li>
                </ul>
                <button
                  type="button"
                  className="mt-8 w-full rounded-xl bg-emerald-700 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800"
                >
                  Get Pro
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="cta"
          className="scroll-mt-20 bg-gradient-to-b from-stone-900 to-stone-950 py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Underwrite the next deal in minutes—not tonight.
            </h2>
            <p className="mt-4 text-lg text-stone-300">
              Paste a Rightmove link and get a disciplined first-pass before you
              model the edge cases.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollTo("hero-cta")}
                className="w-full min-h-[48px] rounded-xl bg-white px-8 py-3 text-sm font-semibold text-stone-900 shadow-lg transition hover:bg-stone-100 sm:w-auto"
              >
                Run your first deal
              </button>
              <button
                type="button"
                onClick={() => scrollTo("example")}
                className="w-full min-h-[48px] rounded-xl border border-stone-600 bg-transparent px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                See sample output
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-[#fafaf9] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div>
            <p className="font-semibold text-stone-900">
              Brick<span className="text-emerald-700">IQ</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-stone-600">
              First-pass deal analysis for UK property investors. Estimates only;
              not financial, tax, or legal advice.
            </p>
          </div>
          <div className="text-sm text-stone-500">
            <p>© {new Date().getFullYear()} BrickIQ</p>
            <button
              type="button"
              onClick={() => scrollTo("hero-cta")}
              className="mt-2 font-medium text-emerald-800 hover:underline"
            >
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
