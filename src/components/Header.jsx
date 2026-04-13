import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInVariants, staggerContainer, itemVariants } from "../utils/animations";

const Header = () => {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <motion.header
      className="w-full flex justify-between items-center px-6 md:px-[3.5rem] pt-6 md:pt-[2.5rem]"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="uppercase font-extrabold text-lg md:text-2xl"
        variants={fadeInVariants}
      >
        Repo&#8208;View
      </motion.h1>
      <motion.nav variants={staggerContainer} initial="initial" animate="animate">
        <ul className="flex gap-4 md:gap-[3.5rem] text-lg md:text-2xl">
          <motion.li variants={itemVariants}>
            <Link
              to="/"
              className={
                splitLocation[1] === ""
                  ? "font-bold text-white"
                  : "font-medium text-[#E3E3E3] hover:text-white transition-colors"
              }
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              to="/repositories"
              className={
                splitLocation[1] === "repositories"
                  ? "font-bold text-white"
                  : "font-medium text-[#E3E3E3] hover:text-white transition-colors"
              }
            >
              Repositories
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
