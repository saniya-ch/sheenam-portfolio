import { motion } from "framer-motion";

function Test() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      HELLO MOTION
    </motion.div>
  );
}

export default Test;