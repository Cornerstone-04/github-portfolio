import { motion } from "framer-motion";
import { scaleInVariants, borderPulseVariants } from "../utils/animations";

const HeadImage = () => {
  const realText = "i am cornerstone ephraim *";
  const rotatedText = realText.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, rotate: i * 13.5 }}
      animate={{ opacity: 1, rotate: i * 13.5 }}
      transition={{ delay: i * 0.02, duration: 0.3 }}
      style={{ display: "inline-block" }}
    >
      {char}
    </motion.span>
  ));
  return (
    <motion.div
      className="relative w-[10.45rem] h-[10.45rem] flex justify-center items-center"
      variants={scaleInVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute inset-0 border-2 border-white rounded-full"
        variants={borderPulseVariants}
        animate="animate"
      ></motion.div>
      <div className="w-22.5 h-22.5 bg-center absolute rounded-full bg-cover header_image border border-white"></div>
      <div className="absolute w-full h-full" id="bent_text">
        <p className="font-medium">{rotatedText}</p>
      </div>
    </motion.div>
  );
};

export default HeadImage;
