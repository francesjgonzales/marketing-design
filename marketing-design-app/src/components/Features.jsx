const strengths = [
  "UX/UI Design: User research, user flows & journey mapping, wireframes and prototype,accessibility & usability best practices",
  "Web Design: WordPress, responsive layouts, content structuring, usability-focused",
  "Digital & Marketing Design: Social Media visuals, web banners, email templates, campaign materials",
  "Tools: Adobe Creative Suite (Photoshop, Illustrator, After Effects, In Design), Figma, Canva, Jira (Automation, Dashboard), Confluence (Documentation), Github",
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
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                With experience in UX research, user flows, and front-end
                fundamentals, I design with both usability and real-world
                implementation in mind.
              </p>
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
