
import m1 from "../assets/main.jpeg";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero"
      className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">

        <div className="
        grid
        lg:grid-cols-2
        gap-12
        lg:gap-20
        items-center
        min-h-[80vh]
        ">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.span
              className="text-6xl md:text-7xl"
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                transformOrigin: "70% 70%",
              }}
            >
              👋
            </motion.span>

            <h1
              className="
  text-5xl
  md:text-6xl
  lg:text-7xl
  font-black
  leading-[1.05]
  text-[#081a46]
  "
            >
              I'm Sheenam, and I love creating Ads that stop the scroll and drive real results
            </h1>

            <div className="flex flex-wrap gap-4 mt-10">

              <span className="bg-[#fde7cf] px-6 py-3 rounded-full font-semibold">
                Performance Creative Strategist
              </span>

              <span className="bg-[#dfe9ff] px-6 py-3 rounded-full font-semibold">
                Ads Director
              </span>

              <span className="bg-[#ffe0eb] px-6 py-3 rounded-full font-semibold">
                Copywriter
              </span>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -6 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <img
              src={m1}
              alt="Sheenam"
              className="
    w-full
    max-w-md
    lg:max-w-lg
    rounded-[40px]
    border-[10px]
    border-white
    shadow-2xl
    hover:scale-105
    transition-all
    duration-500
  "
            />


          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;