import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "Frido",
      role: "Creative Strategist",
      period: "2024 — Present",
      description:
        "Leading creative strategy, performance campaigns, copywriting and ad creatives for a fast-growing D2C brand.",
      color: "bg-[#fde7cf]",
    },
    {
      company: "Rungta International Skill University",
      role: "Brand & Content",
      period: "2022 — 2024",
      description:
        "Worked on content strategy, social media communication and brand storytelling initiatives.",
      color: "bg-[#dfe9ff]",
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="tracking-[8px] text-gray-400 mb-4">
          EXPERIENCE
        </p>

        <h2
          className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-black
          mb-16
          "
        >
          Places I've worked.
        </h2>

        <div className="space-y-8">

          {experiences.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-[40px]
              p-8
              md:p-10
              shadow-xl
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

                <div className="max-w-2xl">

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {item.company}
                  </h3>

                  <p className="text-lg font-medium text-[#214BB8] mb-4">
                    {item.role}
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>

                <div>
                  <span
                    className={`
                    ${item.color}
                    px-5
                    py-3
                    rounded-full
                    font-semibold
                    inline-block
                    `}
                  >
                    {item.period}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

export default Experience;