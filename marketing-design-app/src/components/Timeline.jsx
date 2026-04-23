import { motion } from "framer-motion";

export default function Timeline() {
  const timelineData = [
    {
      year: "2004",
      education: "Graduated Bachelor of Arts, Mass Communications",
      work: "",
    },
    {
      year: "2005",
      education: "Certificate in Basic Visual Communications, Fine Arts",
      work: "",
    },
    {
      year: "2007 - 2021",
      education: "",
      work: "Became a Graphic Designer across various industries, where I honed my skills in brand-compliant design and developed a strong foundation in marketing design across print and digital platforms.",
    },
    {
      year: "2018",
      education: "Certificate in Digital User Experience Design",
      work: "",
    },
    {
      year: "2021",
      education: "Diploma, Web Application Development",
      work: "Began my UX journey in 2021 as a Visual Designer, where I was introduced to user-centered design and started applying UX thinking to my work.",
    },
    {
      year: "2022 - 2023",
      education: "",
      work: "Worked as a Web Developer managing WordPress site. This experience deepened my understanding of front-end development and the importance of designing with implementation in mind.",
    },
    {
      year: "2023 - 2025",
      education: "",
      work: "Moved to Canada and worked as a Graphic Designer for a union organization, where I continued to apply UX principles to my design work and collaborated closely with cross-functional teams.",
    },
    {
      year: "2026",
      education: "",
      work: "A short stint as an eCommerce Specialist where I focused on content structuring and front-end readiness, further solidifying my understanding of how design decisions impact user experience and business goals.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Career & Education Timeline
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          A snapshot of how my background in design, education, and development
          shaped my transition into user-centered digital work.
        </p>

        <div className="relative">
          {/* center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded bg-gray-300 md:block" />

          <div className="space-y-10">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center"
              >
                {/* Work side */}
                <div className="md:pr-10">
                  {item.work && (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl bg-white p-5 shadow-md"
                    >
                      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Work Experience
                      </p>
                      <p className="text-sm text-gray-400">{item.year}</p>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {item.work}
                      </h3>
                    </motion.div>
                  )}
                </div>

                {/* center dot */}
                <div className="relative hidden md:flex md:justify-center">
                  <div className="z-10 h-5 w-5 rounded-full border-4 border-white bg-black shadow" />
                </div>

                {/* Education side */}
                <div className="md:pl-10">
                  {item.education && (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl bg-white p-5 shadow-md"
                    >
                      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Education
                      </p>
                      <p className="text-sm text-gray-400">{item.year}</p>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {item.education}
                      </h3>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
