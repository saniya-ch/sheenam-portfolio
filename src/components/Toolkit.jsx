import { motion } from "framer-motion";
function Toolkit() {
  const skills = [
    "Performance creative",
    "Creative Direction",
    "Ghost Writing",
    "Content Strategy",
    "Meta Ads",
    "Creative Advertising",
    "Campaign Planning",
    "LinkedIn Copywriting",
    "Brand Strategy",
    "UGC Writing",
    "OOH Advertising",
    "Copywriting",
    "Market research",
    "Brand Positioning",
    "Storytelling",


  ];

  return (
    <section id="toolkit"
      className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="uppercase tracking-[6px] text-gray-500 mb-4">
          Toolkit
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Skills I bring to the table.
        </h2>

        <p className="text-gray-500 text-xl mb-14 max-w-3xl">
          A mix of strategy, storytelling and performance marketing.
        </p>

        <div className="flex
        flex-wrap
        gap-4
        mt-10">

          {skills.map((skill, index) => (
            <span
              key={index}
              className="
  px-4
  py-3
  md:px-6
  md:py-4
  rounded-full
  bg-white
  shadow-lg
  text-base
  md:text-lg
  font-semibold
  hover:-translate-y-1
  hover:shadow-xl
  transition
  cursor-default
"
            >
              {skill}
            </span>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

export default Toolkit;