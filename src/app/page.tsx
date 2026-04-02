export default function Home() {
  return (
    <main id="main-content" className="bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-lg font-semibold tracking-tight">
            BrickIQ
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a href="#problem" className="hover:text-slate-900">
              Problem
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How it works
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
          </nav>
          <a
            href="#final-cta"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Analyse deals faster
          </a>
        </div>
      </header>

      <section id="hero" className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          For UK property investors
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Analyse property deals in minutes, not hours - and avoid overpaying by £10k+.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Paste a Rightmove link and get a fast, practical first-pass on likely
          profit, fair value, risk flags, and deal score before you commit time
          or money.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#final-cta"
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Analyse a deal now
          </a>
          <a
            href="#example-output"
            className="rounded-md border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-400"
          >
            See deal output
          </a>
        </div>
      </section>

      <section id="problem" className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">The problem</h2>
          <p className="mt-4 text-slate-600">
            Most deals are still checked with rough estimates and scattered
            spreadsheets. That means slower decisions, missed warning signs, and
            costly mistakes.
          </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="font-medium">Time drain</p>
              <p className="mt-1 text-sm text-slate-600">
                Hours spent pulling numbers from multiple sources for one deal.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="font-medium">Overpay risk</p>
              <p className="mt-1 text-sm text-slate-600">
                Small valuation mistakes can become expensive in real life.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="font-medium">Unclear decisions</p>
              <p className="mt-1 text-sm text-slate-600">
                Without a clear score, confidence in your decision is lower.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">Features</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Everything you need to decide quickly whether a deal is worth
          progressing.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">Instant listing breakdown</h3>
            <p className="mt-2 text-slate-600">
              Paste a Rightmove link and get the core deal inputs in one place,
              ready to review.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">Profit and ROI, clearly shown</h3>
            <p className="mt-2 text-slate-600">
              See estimated profit, ROI, and costs with assumptions you can check
              line by line.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">Value check and risk flags</h3>
            <p className="mt-2 text-slate-600">
              Compare against local value signals and highlight issues that could
              hurt returns.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">Simple deal score</h3>
            <p className="mt-2 text-slate-600">
              Use one clear score to quickly shortlist strong deals and skip weak
              ones.
            </p>
          </article>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">Step 1</p>
              <p className="mt-2 text-lg font-semibold">Paste the Rightmove link</p>
              <p className="mt-2 text-slate-600">
                Start with the listing you already found.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">Step 2</p>
              <p className="mt-2 text-lg font-semibold">Review key deal numbers</p>
              <p className="mt-2 text-slate-600">
                See profit, value, and risk in a single summary.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">Step 3</p>
              <p className="mt-2 text-lg font-semibold">Decide with confidence</p>
              <p className="mt-2 text-slate-600">
                Use the deal score to compare options and move faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="example-output" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">Example deal output</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          A practical snapshot of the numbers you need before making an offer.
        </p>
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-5">
            <p className="font-medium text-slate-700">Example property: Leeds, LS6</p>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              Deal score: 78 / 100
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Estimated profit</p>
              <p className="mt-1 text-2xl font-semibold">£41,200</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Projected ROI</p>
              <p className="mt-1 text-2xl font-semibold">21.4%</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Valuation confidence</p>
              <p className="mt-1 text-2xl font-semibold">High</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Risk level</p>
              <p className="mt-1 text-2xl font-semibold">Moderate</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight">Testimonials</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <blockquote className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-slate-700">
                "I used to spend most evenings in spreadsheets. Now I can screen
                a deal in minutes and only deep-dive the ones worth pursuing."
              </p>
              <footer className="mt-4 text-sm text-slate-500">Sam, Buy-to-let investor, Manchester</footer>
            </blockquote>
            <blockquote className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-slate-700">
                "The score gives me a consistent way to shortlist properties
                before I make an offer. It has made my sourcing process far more
                disciplined."
              </p>
              <footer className="mt-4 text-sm text-slate-500">Aisha, Property sourcer, Birmingham</footer>
            </blockquote>
            <blockquote className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-slate-700">
                "I nearly overpaid on a terrace in Leeds. BrickIQ flagged the
                numbers early and helped me renegotiate with confidence."
              </p>
              <footer className="mt-4 text-sm text-slate-500">Daniel, First-time investor, Leeds</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Choose the plan that helps you screen more deals and avoid expensive
          errors.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-7">
            <h3 className="text-xl font-semibold">Starter Investor</h3>
            <p className="mt-2 text-slate-600">Best for testing deals before making your first few offers.</p>
            <p className="mt-6 text-3xl font-semibold">£0</p>
            <p className="mt-1 text-sm text-slate-500">14-day free trial</p>
            <a
              href="#final-cta"
              className="mt-6 inline-block rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-400"
            >
              Start free trial
            </a>
          </article>
          <article className="rounded-lg border border-slate-900 p-7">
            <h3 className="text-xl font-semibold">Pro Investor</h3>
            <p className="mt-2 text-slate-600">Best for active investors and sourcers reviewing deals weekly.</p>
            <p className="mt-6 text-3xl font-semibold">£39<span className="text-base font-normal text-slate-500">/month</span></p>
            <p className="mt-1 text-sm text-slate-500">Screen more deals each week with clear, consistent scoring</p>
            <a
              href="#final-cta"
              className="mt-6 inline-block rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Start Pro plan
            </a>
          </article>
        </div>
      </section>

      <section id="final-cta" className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Spend less time analysing. Make better offers.
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Join BrickIQ and turn listing links into fast, consistent
              investment decisions backed by clear numbers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@brickiq.co.uk?subject=BrickIQ%20Early%20Access"
              className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Start analysing deals
            </a>
            <a
              href="#hero"
              className="rounded-md border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-400"
            >
              Back to top
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
