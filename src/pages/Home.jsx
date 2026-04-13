import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
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
              className="flex flex-col gap-20"
              variants={itemVariants}
            >
              <motion.div variants={fadeInVariants}>
                <p className="text-text text-xl md:text-[1.75rem] text-justify">
                  As a seasoned frontend designer with two years of immersive
                  experience, I pride myself on crafting visually stunning and
                  highly functional user interfaces. With a keen eye for
                  aesthetics and an intuitive understanding of user behavior, I
                  specialize in translating design concepts into elegant,
                  responsive, and performant web applications.
                  <br />
                  <br />
                  Proficient in HTML, CSS, and JavaScript, along with popular
                  frameworks and libraries such as ReactJS, NextJS, I am
                  passionate about optimizing user journeys, enhancing
                  accessibility, and improving load times to deliver seamless
                  and engaging experiences.
                </p>
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
        </main>
      </PageTransition>
    </Layout>
  );
};

export default Home;
