const strengths = [
  "Web Design: WordPress, responsive layouts, content structuring",
  "Graphic Design: Digital assets, web visuals, marketing and campaign materials",
  "eCommerce Content: Product content, visual consistency, front-end readiness",
  "Tools: Adobe Creative Suite, Figma, Canva",
  "Front-End Awareness: HTML, CSS, JavaScript, Bootstrap",
  "Other: Asset organization, file preparation, accessibility basics",
];

export default function Features() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50" id="features">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Core
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                I focus on clarity, structure, and business-aware design.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
