import { motion } from "framer-motion";
import m2 from "../assets/m2.jpeg";
function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="tracking-[8px] text-gray-400 mb-4">
          ABOUT
        </p>

        <h2
          className="
          text-3xl
          md:text-5xl
          lg:text-6xl
          font-black
          leading-[1.05]
          mb-8
          "
        >
          The story behind the scroll-stoppers.
        </h2>

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
          "
        >
          {/* Image */}

          <div className="flex justify-center">
            <img
              src={m2}
              alt="Profile"
              className="
              w-full
              max-w-sm
              md:max-w-md
              rounded-[40px]
              shadow-2xl
              rotate-[-4deg]
              hover:rotate-0
              hover:scale-105
              transition-all
              duration-500
              "
            />
          </div>

          {/* Content */}

          <div>
            <p
              className="
              text-lg
              md:text-xl
              text-gray-600
              leading-relaxed
              mb-8
              max-w-xl
              "
            >
              Little me manifested it way back in school that she was going to make ads someday...<br /> And well... here I am, doing exactly that.<br /> For the past 4 years , I've been creating ads with my whole heart from finding the right insight and writing the script to directing shoots, building campaigns and looking at the numbers to see what actually worked.
            </p>

            <div className="grid gap-5">

              <div
                className="
                bg-white
                p-6
                rounded-[28px]
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
                font-medium
                "
              >
                📍 Based in Pune
              </div>

              <div
                className="
                bg-white
                p-6
                rounded-[28px]
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
                font-medium
                "
              >
                🚀 Currently at Frido
              </div>

              <div
                className="
                bg-white
                p-6
                rounded-[28px]
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
                font-medium
                "
              >
                ❤️ Loves Hooks, Funnels & ROAS
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;