"use client";

import type { ComponentProps, MouseEvent, ReactNode } from "react";
import Image from "next/image";

const navItems = [
  { id: "overview" as const, label: "Overview" },
  { id: "example" as const, label: "Sample" },
  { id: "testimonials" as const, label: "Stories" },
  { id: "pricing" as const, label: "Pricing" },
] as const;

const SECTION_PAD = "py-20 md:py-28 lg:py-36";
const SCROLL_MT = "scroll-mt-28 md:scroll-mt-32";
const PANEL = "rounded-[1.75rem] border border-stone-200/90 bg-white md:rounded-[2rem]";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  try {
    history.replaceState(null, "", `#${id}`);
  } catch {
    /* ignore */
  }
}

function onInPageLinkClick(e: MouseEvent<HTMLAnchorElement>, id: string) {
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey
  ) {
    return;
  }
  if (!document.getElementById(id)) return;
  e.preventDefault();
  scrollToSection(id);
}

type ScrollLinkProps = Omit<ComponentProps<"a">, "href"> & { sectionId: string };

function ScrollLink({ sectionId, onClick, children, ...rest }: ScrollLinkProps) {
  return (
    <a
      href={`#${sectionId}`}
      onClick={(e) => {
        onInPageLinkClick(e, sectionId);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center rounded-full border border-stone-900/85 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-900 sm:px-4 sm:text-[11px]">
      {children}
    </span>
  );
}

/** Product name — use wherever “Brickly” appears so it reads as one brand. */
function BrandName({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-[-0.04em] text-stone-900 ${className}`}>
      Brickly
    </span>
  );
}

/** Scenic Unsplash photography—illustrative mood only, not real listings. */
const PROPERTY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85",
  storiesBg:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  strip: [
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      alt: "Bright open-plan living space with large windows",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      alt: "Warm contemporary sitting room with natural light",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
      alt: "Modern home with pool and evening sky",
    },
  ],
  panorama:
    "https://images.unsplash.com/photo-1600585152914-d0bec010a4f8?auto=format&fit=crop&w=2400&q=85",
  panoramaAlt: "Contemporary house exterior at dusk with warm lighting",
} as const;

/** Hero value columns—what Brickly focuses on. */
const HERO_VALUE_POINTS: { title: string; text: ReactNode }[] = [
  {
    title: "A fast first pass",
    text: (
      <>
        <BrandName /> turns a Rightmove link into the main numbers in minutes—built for
        investors who skim dozens of deals and need clarity fast.
      </>
    ),
  },
  {
    title: "The same picture every time",
    text: (
      <>
        Every <BrandName /> summary uses one layout for every listing so you can compare
        two homes fairly, without redoing the same work.
      </>
    ),
  },
  {
    title: "Said in plain English",
    text: (
      <>
        A clear verdict, the numbers that matter, what to check next, and a score—no
        jargon. That is the <BrandName /> read.
      </>
    ),
  },
];

/** Illustrative sample only—shows the shape of a full investor summary. */
const SAMPLE_VERDICT = {
  label: "Borderline deal" as const,
  why: "The rent story works on paper, but the asking price and refurb leave thin room if anything slips.",
  biggestRisk: "Refurb costs are still a guess until someone has walked the place.",
  nextStep: "Book a viewing and get a builder’s ballpark before you model a bid.",
};

const SAMPLE_NUMBERS: { label: string; value: string; note?: string }[] = [
  { label: "Purchase price", value: "£195,000" },
  { label: "Stamp duty (illustrative)", value: "£6,700", note: "Based on your buyer profile" },
  { label: "Legal fees", value: "£1,400" },
  { label: "Refurb estimate", value: "£18,000" },
  { label: "Finance costs (arrangement + year one)", value: "£3,200" },
  { label: "Total cash in", value: "£52,400", note: "Deposit + costs + refurb allowance" },
  { label: "Expected rent (monthly)", value: "£1,050" },
  { label: "Gross yield", value: "6.5%" },
  { label: "Net yield", value: "4.8%", note: "After costs you entered" },
  { label: "ROI (24 months, base case)", value: "21.4%" },
  { label: "Monthly cash flow", value: "+£180", note: "Base case" },
  {
    label: "Est. profit after costs (24 months)",
    value: "£41,200",
    note: "Base case · illustrative",
  },
];

const SAMPLE_SCENARIOS = [
  { label: "Pessimistic", value: "−£40/mo" },
  { label: "Base", value: "+£180/mo" },
  { label: "Optimistic", value: "+£310/mo" },
] as const;

const SAMPLE_AREA: { label: string; text: string }[] = [
  {
    label: "Sold nearby",
    text: "Three similar sales within half a mile, median around £188k (illustrative).",
  },
  {
    label: "Area pricing",
    text: "Asking is a touch above that band—discount does not look automatic.",
  },
  {
    label: "Rent range",
    text: "Typical range £950–£1,100/mo for this type of let (indicative).",
  },
  {
    label: "Demand",
    text: "Comparable listings have been moving in about six weeks (signal only).",
  },
  {
    label: "Discount",
    text: "Versus asking, the gap looks modest—not obviously a steal on paper.",
  },
];

const SAMPLE_RISK_FLAGS = [
  "Lease length worth confirming",
  "Service charge details thin on the advert",
  "Margin tight if refurb runs over",
  "Rent figure on the optimistic side",
  "Lender stress not modelled here",
  "Refurb scope still uncertain",
  "Resale liquidity untested at this price",
  "Legal title not reviewed in Brickly",
] as const;

export function LandingPage() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-[#ebeae8] text-stone-900 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-300/50 bg-[#ebeae8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-4 px-4 py-5 sm:gap-5 sm:px-8 sm:py-6">
          <ScrollLink
            sectionId="hero"
            className="text-stone-900 transition-opacity hover:opacity-85"
            aria-label="Brickly — home"
          >
            <BrandName className="!font-bold text-[2.35rem] tracking-[-0.055em] sm:text-[2.85rem] md:text-[3.35rem]" />
          </ScrollLink>
          <nav
            className="flex w-full min-w-0 max-w-4xl items-center justify-center gap-5 overflow-x-auto overscroll-x-contain py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-8 lg:gap-10 [&::-webkit-scrollbar]:hidden"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                sectionId={item.id}
                className="shrink-0 text-[11px] font-medium uppercase tracking-[0.16em] text-stone-600 transition-colors hover:text-stone-900"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* 1. Hero */}
        <section
          id="hero"
          className={`${SCROLL_MT} px-4 pb-8 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:px-8 lg:px-10`}
          aria-labelledby="hero-heading"
        >
          <div className={`mx-auto max-w-[1600px] ${PANEL} p-6 sm:p-10 md:p-14 lg:p-16`}>
            <div className="mb-10 flex justify-center border-b border-stone-200/80 pb-8">
              <PillBadge>
                <BrandName className="normal-case tracking-[-0.08em] sm:text-[12px]" /> ·
                UK property summaries
              </PillBadge>
            </div>

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-end">
              <div className="lg:col-span-5 lg:row-start-1">
                <p className="max-w-[20rem] text-[13px] leading-relaxed text-stone-600">
                  <BrandName /> is not a portal, a CRM, or a full underwriting tool. It
                  stays focused on a clear first read from a link—nothing more.
                </p>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p className="font-sans text-[13px] uppercase tracking-[0.28em] text-stone-900">
                  <BrandName className="text-[13px] uppercase tracking-[0.28em]" />
                </p>
                <h1
                  id="hero-heading"
                  className="mt-4 max-w-4xl text-balance font-sans text-[clamp(2rem,4.5vw,3.35rem)] font-light leading-[1.08] tracking-[-0.035em] text-stone-900"
                >
                  A calm first read on every UK listing you paste from Rightmove.
                </h1>
                <p className="mt-8 max-w-xl text-[15px] leading-[1.7] text-stone-600 sm:text-[17px]">
                  Paste a Rightmove link. One screen: verdict, numbers, local context,
                  and risk flags—so you can decide if the deal is worth modelling tonight.
                </p>
                <div className="mt-8 max-w-xl">
                  <label
                    htmlFor="rightmove-url-placeholder"
                    className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-500"
                  >
                    Rightmove listing URL
                  </label>
                  <div className="mt-2">
                    <input
                      id="rightmove-url-placeholder"
                      name="rightmove-url"
                      type="url"
                      inputMode="url"
                      autoComplete="off"
                      readOnly
                      tabIndex={-1}
                      placeholder="Coming soon"
                      aria-readonly="true"
                      aria-describedby="rightmove-url-hint"
                      className="pointer-events-none w-full cursor-not-allowed rounded-sm border border-stone-300 bg-stone-100/90 px-4 py-3.5 font-mono text-[14px] text-stone-400 placeholder:text-stone-400 placeholder:italic"
                    />
                  </div>
                  <p
                    id="rightmove-url-hint"
                    className="mt-2 text-[12px] leading-relaxed text-stone-500"
                  >
                    Link pasting is not available yet—see the sample below for the summary
                    layout.
                  </p>
                </div>
              </div>

              <div id="overview" className="scroll-mt-32 lg:col-span-12 lg:row-start-2">
                <div className="grid gap-8 border-t border-stone-200/90 pt-10 sm:gap-10 lg:grid-cols-3 lg:gap-12">
                  {HERO_VALUE_POINTS.map((point) => (
                    <div key={point.title} className="max-w-md lg:max-w-none">
                      <h2 className="font-sans text-lg font-normal tracking-tight text-stone-900">
                        {point.title}
                      </h2>
                      <p className="mt-3 text-[14px] leading-relaxed text-stone-600 sm:text-[15px]">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-5 lg:row-start-3">
                <div className={`${PANEL} border-stone-200/70 bg-stone-50/80 p-6 sm:p-8`}>
                  <PillBadge>Scope</PillBadge>
                  <p className="mt-6 text-[14px] leading-relaxed text-stone-600">
                    <BrandName /> stays narrow on purpose: quick summaries from links, not
                    full underwriting. Your final offer, legal checks, and tax advice
                    stay with you and your professionals.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 lg:row-start-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-[0_20px_50px_-20px_rgba(28,25,23,0.35)] sm:aspect-[16/10] lg:max-h-[min(420px,42vw)] lg:ml-auto lg:max-w-2xl">
                  <Image
                    src={PROPERTY_IMAGES.hero}
                    alt="Scenic modern family home with garden and clear sky"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <ScrollLink
                sectionId="example"
                className="inline-flex w-full min-h-12 items-center justify-center rounded-sm bg-stone-900 px-8 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-stone-800 sm:w-auto"
              >
                View sample summary
              </ScrollLink>
              <p className="max-w-md text-[13px] leading-relaxed text-stone-500">
                Illustrative previews only—we do not load live listings in this demo.
              </p>
            </div>
          </div>
        </section>

        {/* Scenic strip — memorable illustrative homes (stock photography) */}
        <section
          aria-label="Illustrative UK homes"
          className="px-4 pb-14 pt-4 sm:px-6 sm:pb-16 md:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-3 md:h-[min(26rem,52vh)] md:grid-cols-2 md:grid-rows-2 md:gap-4">
              <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-sm md:row-span-2 md:min-h-0">
                <Image
                  src={PROPERTY_IMAGES.strip[0].src}
                  alt={PROPERTY_IMAGES.strip[0].alt}
                  fill
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-sm md:min-h-0">
                <Image
                  src={PROPERTY_IMAGES.strip[1].src}
                  alt={PROPERTY_IMAGES.strip[1].alt}
                  fill
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-sm md:min-h-0">
                <Image
                  src={PROPERTY_IMAGES.strip[2].src}
                  alt={PROPERTY_IMAGES.strip[2].alt}
                  fill
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-[12px] leading-relaxed text-stone-500">
              Illustrative homes—stock photography for atmosphere, not live listings.
            </p>
          </div>
        </section>

        {/* Sample output — investor-style preview (illustrative) */}
        <section
          id="example"
          className={`${SCROLL_MT} ${SECTION_PAD} px-4 sm:px-6 md:px-8 lg:px-10`}
        >
          <div className="mx-auto max-w-[720px] text-center lg:max-w-[880px]">
            <PillBadge>Sample summary</PillBadge>
            <h2 className="mt-8 font-sans text-[clamp(1.5rem,2.5vw,2.1rem)] font-light leading-snug tracking-[-0.02em] text-stone-900">
              What one <BrandName /> summary looks like
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-stone-600">
              Example only (Leeds LS6). Verdicts use labels like{" "}
              <span className="text-stone-800">Strong deal</span>,{" "}
              <span className="text-stone-800">Borderline</span>,{" "}
              <span className="text-stone-800">Overpriced</span>, or{" "}
              <span className="text-stone-800">High risk</span>, each with why, main
              risk, and a sensible next step. With a real link,{" "}
              <BrandName /> gives you the same layout every time—easy to compare two
              deals side by side.
            </p>
            <div className="mx-auto mt-8 max-w-2xl border border-stone-200/90 bg-white/80 px-5 py-4 text-left sm:px-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-500">
                Why the summary is useful
              </p>
              <ul className="mt-3 space-y-2 text-[14px] leading-snug text-stone-700">
                <li className="flex gap-2">
                  <span className="text-stone-400" aria-hidden>
                    ·
                  </span>
                  <span>See the verdict before you build a full model.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-stone-400" aria-hidden>
                    ·
                  </span>
                  <span>Keep purchase, costs, rent, and yield on one screen.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-stone-400" aria-hidden>
                    ·
                  </span>
                  <span>Spot what to verify next—before you book a viewing.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.06)]">
              {/* Listing + score — quick anchor */}
              <div className="border-b border-stone-100 px-5 py-6 sm:px-8 sm:py-7">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1 text-left">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                      Listing
                    </p>
                    <p className="mt-2 text-lg font-normal leading-snug text-stone-900 sm:text-xl">
                      Leeds · LS6 · Terraced freehold
                    </p>
                    <p className="mt-2 font-mono text-[11px] leading-relaxed text-stone-500 break-all">
                      rightmove.co.uk/…/123456789
                    </p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                      Deal score
                    </p>
                    <div className="mt-1 flex items-baseline justify-start gap-1.5 sm:justify-end">
                      <span className="text-4xl font-light tabular-nums tracking-tight text-stone-900 sm:text-[3rem]">
                        78
                      </span>
                      <span className="text-lg font-normal text-stone-600">/100</span>
                    </div>
                    <div
                      className="mt-4 h-2 w-full max-w-[13rem] overflow-hidden rounded-full bg-stone-200 sm:ml-auto"
                      role="img"
                      aria-label="Score 78 out of 100"
                    >
                      <div className="h-full w-[78%] rounded-full bg-stone-900" aria-hidden />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1. Verdict */}
              <div className="border-b border-stone-100 bg-stone-50/80 px-5 py-6 sm:px-8 sm:py-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                      Deal verdict
                    </p>
                    <p className="mt-2 font-sans text-[1.375rem] font-normal tracking-tight text-stone-900 sm:text-2xl">
                      {SAMPLE_VERDICT.label}
                    </p>
                  </div>
                  <p className="max-w-xl text-[15px] leading-relaxed text-stone-700">
                    <span className="font-medium text-stone-900">Why: </span>
                    {SAMPLE_VERDICT.why}
                  </p>
                </div>
                <div className="mt-6 grid gap-4 border-t border-stone-200/80 pt-6 sm:grid-cols-2">
                  <p className="text-[14px] leading-relaxed text-stone-700">
                    <span className="font-medium text-stone-900">Biggest risk · </span>
                    {SAMPLE_VERDICT.biggestRisk}
                  </p>
                  <p className="text-[14px] leading-relaxed text-stone-700">
                    <span className="font-medium text-stone-900">Next step · </span>
                    {SAMPLE_VERDICT.nextStep}
                  </p>
                </div>
              </div>

              {/* 2. Full investor numbers */}
              <div className="border-b border-stone-100 px-5 py-6 sm:px-8 sm:py-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                  Numbers in one place
                </p>
                <dl className="mt-5 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                  {SAMPLE_NUMBERS.map((row) => (
                    <div key={row.label} className="flex min-w-0 flex-col">
                      <dt className="text-[13px] text-stone-600">{row.label}</dt>
                      <dd className="mt-1 flex flex-wrap items-baseline gap-x-2">
                        <span
                          className={`text-lg font-normal tabular-nums tracking-tight text-stone-900 ${
                            row.label === "Total cash in" ? "font-medium" : ""
                          }`}
                        >
                          {row.value}
                        </span>
                        {row.note ? (
                          <span className="text-[12px] text-stone-500">{row.note}</span>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 rounded-lg border border-dashed border-stone-200 bg-stone-50/50 px-4 py-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">
                    Scenario outcomes (monthly cash)
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {SAMPLE_SCENARIOS.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-md border border-stone-200/80 bg-white px-3 py-2.5 text-center"
                      >
                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500">
                          {s.label}
                        </p>
                        <p className="mt-1 font-mono text-[15px] tabular-nums text-stone-900">
                          {s.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Area & comparables */}
              <div className="border-b border-stone-100 px-5 py-6 sm:px-8 sm:py-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                  Area &amp; comparables
                </p>
                <ul className="mt-4 space-y-3">
                  {SAMPLE_AREA.map((row) => (
                    <li key={row.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                      <span className="shrink-0 text-[13px] font-medium text-stone-800 sm:w-36">
                        {row.label}
                      </span>
                      <span className="text-[14px] leading-relaxed text-stone-600">
                        {row.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Risk flags */}
              <div className="border-b border-stone-100 px-5 py-6 sm:px-8 sm:py-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                  Risk flags
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {SAMPLE_RISK_FLAGS.map((flag) => (
                    <li
                      key={flag}
                      className="rounded-full border border-stone-300/90 bg-white px-3 py-1.5 text-[12px] leading-snug text-stone-700"
                    >
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plain English — one beat */}
              <div className="border-b border-stone-100 bg-stone-50/90 px-5 py-5 sm:px-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
                  In plain English
                </p>
                <p className="mt-2 text-pretty text-[15px] font-normal leading-relaxed text-stone-900">
                  Enough to decide your next hour—not enough to bid without your own
                  checks and professional advice.
                </p>
              </div>

              <div className="border-t border-stone-900 bg-stone-900 px-5 py-5 sm:px-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
                  Before you offer
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-stone-100">
                  Run your own checks on the listing and your sums—with a solicitor or
                  surveyor if you need it—before you offer.
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-[13px] leading-relaxed text-stone-500">
              Illustrative preview. Uses numbers you enter alongside the advert. Not
              financial advice.
            </p>
          </div>
        </section>

        {/* 4. Testimonials */}
        <section
          id="testimonials"
          className={`${SCROLL_MT} ${SECTION_PAD} px-4 sm:px-6 md:px-8 lg:px-10`}
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/90 bg-stone-300 md:rounded-[2rem]">
              <div className="relative min-h-[520px] lg:min-h-[480px]">
                <Image
                  src={PROPERTY_IMAGES.storiesBg}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[#f4f3f1]/82" aria-hidden />
                <div className="relative grid gap-12 p-8 sm:p-12 lg:min-h-[480px] lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
                  <div className="max-w-md">
                    <PillBadge>
                      About <BrandName className="normal-case tracking-[0.22em] sm:text-[11px]" />
                    </PillBadge>
                    <h2 className="mt-8 font-sans text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.12] tracking-[-0.03em] text-stone-900">
                      What people say
                    </h2>
                    <p className="mt-4 text-[14px] leading-relaxed text-stone-600">
                      Honest feedback from people who buy or hold UK property—nothing
                      staged, no paid quotes.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    {[
                      {
                        quote:
                          "I used to lose whole evenings opening ten Rightmove tabs and half-built spreadsheets. With Brickly I get one clean read per link—I still verify everything myself, but I know which deals are worth that effort.",
                        name: "Portfolio landlord",
                        place: "Greater Manchester",
                      },
                      {
                        quote:
                          "Clients do not want a forty-slide deck. They want to know if a deal is worth a second look. Brickly is the first thing I send after I paste the link—same layout every time, so nobody is comparing apples with oranges.",
                        name: "Independent deal sourcer",
                        place: "West Midlands",
                      },
                      {
                        quote:
                          "I am not looking for Brickly to replace my broker or my solicitor. I want a calm first pass so I do not fall in love with the photos before I have seen the numbers. It does exactly that.",
                        name: "Buy-to-let buyer",
                        place: "West Yorkshire",
                      },
                    ].map((t) => (
                      <figure
                        key={`${t.name}-${t.place}`}
                        className="border border-stone-200/90 bg-white p-6 sm:p-7"
                      >
                        <blockquote className="text-[15px] font-normal leading-relaxed text-stone-800">
                          “{t.quote}”
                        </blockquote>
                        <figcaption className="mt-4 text-[12px] text-stone-500">
                          <span className="font-medium text-stone-800">{t.name}</span>
                          <span className="text-stone-400"> · </span>
                          {t.place}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className={`${SCROLL_MT} ${SECTION_PAD} px-4 sm:px-6 md:px-8 lg:px-10`}
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="relative mb-10 h-44 overflow-hidden rounded-[1.75rem] border border-stone-200/90 shadow-[0_24px_60px_-28px_rgba(28,25,23,0.45)] sm:mb-12 sm:h-52 md:mb-14 md:h-60 md:rounded-[2rem]">
              <Image
                src={PROPERTY_IMAGES.panorama}
                alt={PROPERTY_IMAGES.panoramaAlt}
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width:1600px) 100vw, 1600px"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-stone-900/5 to-transparent"
                aria-hidden
              />
            </div>
          </div>
          <div className={`mx-auto max-w-[1600px] ${PANEL} p-6 sm:p-10 md:p-14 lg:p-16`}>
            <div className="mx-auto max-w-2xl text-center">
              <PillBadge>Pricing</PillBadge>
              <h2 className="mt-8 font-sans text-[clamp(1.75rem,2.8vw,2.35rem)] font-light tracking-[-0.02em] text-stone-900">
                Pay for how often you use <BrandName />.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-stone-600">
                Starter lets you try the same <BrandName /> summary format. Pro adds
                shared defaults when you paste links often—same focused layout, less
                retyping.
              </p>
            </div>
            <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col rounded-2xl border border-stone-200/90 bg-stone-50/50 p-8 sm:p-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
                  Starter
                </p>
                <h3 className="mt-3 font-sans text-xl font-normal text-stone-900">
                  Try <BrandName /> quietly
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-stone-600">
                  A handful of summaries to see if the format fits how you work.
                </p>
                <div className="mt-8 border-t border-stone-200 pt-8">
                  <p className="flex items-baseline gap-2">
                    <span className="text-4xl font-light tabular-nums text-stone-900">
                      £0
                    </span>
                    <span className="text-[15px] text-stone-600">14-day trial</span>
                  </p>
                  <p className="mt-2 text-[13px] text-stone-500">
                    Then move to Pro—or stop. No trap doors.
                  </p>
                </div>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-[14px] text-stone-800">
                  <li>One investor-style summary per link you paste</li>
                  <li>Same layout every time—easy to compare two deals</li>
                  <li>Help when you are stuck</li>
                </ul>
                <p
                  className="mt-10 inline-flex min-h-12 w-full cursor-default items-center justify-center rounded-sm border border-stone-300 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500"
                  aria-label="Starter pricing coming soon"
                >
                  Coming soon
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-stone-900 bg-white p-8 sm:p-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
                  Pro
                </p>
                <h3 className="mt-3 font-sans text-xl font-normal text-stone-900">
                  When your shortlist is always full
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-stone-600">
                  Shared defaults for costs and assumptions—so nobody retypes the same
                  figures.
                </p>
                <div className="mt-8 border-t border-stone-200 pt-8">
                  <p className="flex items-baseline gap-2">
                    <span className="text-4xl font-light tabular-nums text-stone-900">
                      £9.99
                    </span>
                    <span className="text-[15px] text-stone-600">/ month</span>
                  </p>
                  <p className="mt-2 text-[13px] text-stone-500">
                    One account · cancel any time
                  </p>
                </div>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-[14px] text-stone-800">
                  <li>More summaries when your deal flow is heavy</li>
                  <li>Shared defaults for costs—fewer mistyped assumptions</li>
                  <li>Priority help when something breaks</li>
                </ul>
                <p
                  className="mt-10 inline-flex min-h-12 w-full cursor-default items-center justify-center rounded-sm bg-stone-900 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
                  aria-label="Pro pricing coming soon"
                >
                  Coming soon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section
          id="cta"
          className={`${SCROLL_MT} border-t border-stone-300/60 bg-[#e4e3e1] px-4 py-20 sm:px-6 md:px-8 lg:px-10 lg:py-28`}
        >
          <div className={`mx-auto max-w-[960px] ${PANEL} px-8 py-12 text-center sm:px-14 sm:py-16`}>
            <h2 className="font-sans text-[clamp(1.5rem,2.8vw,2.15rem)] font-light leading-snug tracking-[-0.02em] text-stone-900">
              <BrandName />: fast pass, fair compare, plain signal—same focus every time.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-stone-600">
              Paste a Rightmove link into <BrandName /> when you want that first read—then
              take your time on the serious sums in your own sheet.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:gap-5">
              <ScrollLink
                sectionId="example"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-stone-900 px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-stone-800"
              >
                View sample summary
              </ScrollLink>
              <ScrollLink
                sectionId="hero"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-stone-900 bg-transparent px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-900 transition hover:bg-stone-900/5"
              >
                Back to top
              </ScrollLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-300/60 bg-[#ebeae8] px-4 py-14 sm:px-8">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[15px] tracking-[-0.02em] text-stone-900">
              <BrandName className="text-[15px]" />
            </p>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-stone-600">
              <BrandName /> turns a Rightmove link into a quick, comparable summary—a
              first pass before your own serious sums. Not financial, tax, or legal
              advice.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[14px] text-stone-600 md:items-end">
            <p>
              © {new Date().getFullYear()} <BrandName />
            </p>
            <ScrollLink
              sectionId="hero"
              className="w-fit font-medium text-stone-900 underline underline-offset-4 hover:text-stone-700"
            >
              Back to top
            </ScrollLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
