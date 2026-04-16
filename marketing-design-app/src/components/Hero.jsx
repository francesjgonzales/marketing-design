export default function Hero() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Marketing Designer
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Marketing Designer focused on clean, brand-driven design across
              print and digital.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I design marketing materials across print and digital platforms,
              with a focus on clarity, consistency, and strong brand alignment.
              My work centers on executing designs that are both visually
              effective and aligned with business and campaign goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#gallery"
                className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View selected work
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                What I bring
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">
                5+ years in marketing design
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4">
                <p className="text-sm text-slate-500">Focus</p>
                <p className="mt-1 font-medium">On-brand creative execution</p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="text-sm text-slate-500">Strength</p>
                <p className="mt-1 font-medium">Brand compliant</p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="text-sm text-slate-500">Workflow</p>
                <p className="mt-1 font-medium">
                  Client Brief - Design - Review - Delivery
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="text-sm text-slate-500">Collaboration</p>
                <p className="mt-1 font-medium">
                  Marketing, events and cross-functional teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
