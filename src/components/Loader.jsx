import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fadeInVariants } from "../utils/animations";

const Loader = ({ progress }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-dark flex items-center justify-center flex-col gap-12 z-50 px-14"
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
    >
      <motion.section
        className="w-full max-w-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="border-2 border-white p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-4xl font-light tracking-tight">
              CORNERSTONE
            </h1>
            <motion.h1
              className="text-2xl md:text-4xl font-light"
              key={progress}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {progress}
              <span className="text-lg">%</span>
            </motion.h1>
          </div>

          <motion.div
            className="h-1 bg-white mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ originX: 0 }}
          ></motion.div>

          <motion.div
            className="text-sm md:text-base font-light text-text tracking-wide"
            key={Math.floor(progress / 25)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {progress < 25 && "INITIALIZING"}
            {progress >= 25 && progress < 50 && "LOADING ASSETS"}
            {progress >= 50 && progress < 75 && "RENDERING INTERFACE"}
            {progress >= 75 && "FINALIZING"}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

Loader.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loader;
