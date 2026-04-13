import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { pageVariants, pageOverlayVariants } from "../utils/animations";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="relative"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.div
        className="pointer-events-none fixed inset-0 z-60 bg-white origin-left"
        variants={pageOverlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
