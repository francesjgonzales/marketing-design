export default function Timeline() {
  const education = [
    { year: "2004", title: "Bachelor of Arts, Mass Communications" },
    {
      year: "2005",
      title: "Certificate in Basic Visual Communications, Fine Arts",
    },
    { year: "2018", title: "Certificate in Digital User Experience Design" },
    { year: "2021", title: "Diploma, Web Application Development" },
  ];

  const work = [
    { year: "2007 - 2021", title: "Graphic Designer" },
    { year: "2021 - 2022", title: "Visual Designer" },
    { year: "2022 - 2023", title: "Web Developer" },
    { year: "2023 - 2025", title: "Graphic Designer" },
    { year: "2026", title: "eCommerce Specialist" },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Timeline</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {work.map((item, index) => (
            <div key={index} className="relative flex items-center">
              {/* LEFT - WORK */}
              <div className="w-1/2 pr-8 text-right">
                <div className="inline-block bg-white p-4 rounded-xl shadow">
                  <p className="text-sm text-gray-500">{item.year}</p>
                  <p className="font-semibold">{item.title}</p>
                </div>
              </div>

              {/* DOT */}
              <div className="w-0">
                <div className="w-4 h-4 bg-black rounded-full border-4 border-white shadow absolute left-1/2 transform -translate-x-1/2"></div>
              </div>

              {/* RIGHT - EDUCATION */}
              <div className="w-1/2 pl-8">
                {education[index] && (
                  <div className="inline-block bg-white p-4 rounded-xl shadow">
                    <p className="text-sm text-gray-500">
                      {education[index].year}
                    </p>
                    <p className="font-semibold">{education[index].title}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
