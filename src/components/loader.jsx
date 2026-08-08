import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="
      fixed
      inset-0
      bg-[#f6f4ef]
      flex
      items-center
      justify-center
      z-[9999]
      "
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="
        text-5xl
        md:text-7xl
        font-black
        text-[#081a46]
        "
      >
        Sheenam.
      </motion.h1>
    </motion.div>
  );
}

export default Loader;