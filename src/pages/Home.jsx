import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeadImage, PageTransition } from "../components";
import Layout from "../layout/Layout";
import {
  headingVariants,
  itemVariants,
  staggerContainer,
  fadeInVariants,
  buttonHoverVariants,
} from "../utils/animations";

const Home = () => {
  const [state, handleSubmit] = useForm("mvojlgyq");

  return (
    <Layout>
      <PageTransition>
        <main className="px-6 md:px-14 my-16 md:my-24 grid gap-8 md:gap-16">
          <motion.h1
            variants={headingVariants}
            initial="initial"
            animate="animate"
            className="font-light text-4xl md:text-[5rem]"
          >
            I am Cornerstone Ephraim
          </motion.h1>
          <motion.section
            className="flex flex-col md:flex-row items-start gap-8 md:gap-28"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={itemVariants}>
              <HeadImage />
            </motion.div>
            <motion.div
              className="flex flex-col gap-8 md:gap-16"
              variants={itemVariants}
            >
              <motion.div variants={fadeInVariants}>
                <p className="text-text text-xl md:text-[1.75rem] text-justify">
                  As a frontend developer with over 3 years of experience, I
                  pride myself in crafting visually stunning and highly
                  functional user interfaces. This portfolio showcases my GitHub
                  repositories and projects, providing a curated view of my work
                  in frontend development, design systems, and creative
                  applications.
                  <br />
                  <br />
                  Proficient in HTML, CSS, and JavaScript, along with popular
                  frameworks and libraries such as ReactJS and NextJS, I am
                  passionate about building performant web applications,
                  optimizing user journeys, enhancing accessibility, and
                  delivering seamless and engaging digital experiences. Explore
                  my repositories to see my latest projects and contributions.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/repositories">
                  <motion.button
                    className="px-6 py-3 border border-white text-white hover:bg-white hover:text-dark transition-all ease-linear duration-300 font-light"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View My Repositories →
                  </motion.button>
                </Link>
              </motion.div>
              <motion.form
                className="flex gap-6 w-full"
                onSubmit={handleSubmit}
                variants={itemVariants}
              >
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write me a message..."
                  className="py-3 px-3 md:px-6 outline-none flex items-center h-13.5 w-full max-w-lg  placeholder:text-[#5D5D5D] bg-transparent border border-[#5D5D5D] focus:border-white transition-all ease-linear"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <motion.button
                  type="submit"
                  disabled={state.submitting || state.succeeded}
                  className={`relative flex items-center justify-center px-6 py-3 min-w-27.5 border transition-all duration-200 ${
                    state.succeeded
                      ? "border-white text-white"
                      : "border-[#5D5D5D] text-text hover:text-white hover:border-white"
                  } ${state.submitting ? "cursor-not-allowed opacity-70" : ""}`}
                  whileHover={!state.submitting ? "hover" : ""}
                  whileTap={!state.submitting ? "tap" : ""}
                  variants={buttonHoverVariants}
                  initial="initial"
                >
                  {state.submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending
                    </span>
                  ) : state.succeeded ? (
                    "Sent ✓"
                  ) : (
                    "Send"
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.section>
          {/* <motion.section
            className="flex flex-col gap-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={headingVariants}
              className="font-light text-3xl md:text-4xl"
            >
              GitHub Activity
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                variants={itemVariants}
                className="overflow-hidden border border-white p-6 hover:border-white transition-all duration-300"
              >
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=Cornerstone-04&show_icons=true&locale=en&layout=compact&theme=dark&hide_border=true"
                  alt="Top Languages"
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="overflow-hidden border border-white p-6 hover:border-white transition-all duration-300"
              >
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Cornerstone-04&show_icons=true&locale=en&theme=dark&hide_border=true"
                  alt="GitHub Stats"
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="overflow-hidden border border-white p-6 hover:border-white transition-all duration-300"
              >
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Cornerstone-04&theme=dark&hide_border=true"
                  alt="GitHub Streak"
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </motion.section> */}
        </main>
      </PageTransition>
    </Layout>
  );
};

export default Home;
