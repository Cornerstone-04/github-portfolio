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
// import { Link } from "react-router-dom";

const Home = () => {
  const [state, handleSubmit] = useForm("mvojlgyq");

  // if (state.succeeded) {
  //   return (
  //     <Layout>
  //       <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:my-[6rem] w-full h-full flex justify-center items-center">
  //         <p className="font-[300] text-4xl md:text-[5rem]">Message sent!</p>
  //         <Link to ="/">Return home</Link>
  //       </main>
  //     </Layout>
  //   );
  // }

  return (
    <Layout>
      <PageTransition>
        <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:my-[6rem] grid gap-8 md:gap-16">
          <motion.h1
            variants={headingVariants}
            initial="initial"
            animate="animate"
            className="font-[300] text-4xl md:text-[5rem]"
          >
            I am Cornerstone Ephraim
          </motion.h1>
          <motion.section
            className="flex flex-col md:flex-row items-start gap-8 md:gap-[7rem]"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={itemVariants}>
              <HeadImage />
            </motion.div>
            <motion.div
              className="flex flex-col gap-[5rem]"
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
                  accessibility, and improving load times to deliver seamless and
                  engaging experiences.
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
                  className="py-3 px-3 md:px-6 outline-none flex items-center h-[3.375rem] w-full max-w-[32rem] md:text-2xl placeholder:text-[#5D5D5D] bg-transparent border border-[#5D5D5D] focus:border-white transition-all ease-linear"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <motion.button
                  className="w-full max-w-[6.75rem] h-[3.375rem] flex justify-center items-center bg-btn focus:bg-btn active:bg-btn-hover hover:bg-btn-hover transition-all ease-linear px-6 py-3 border border-btn hover:border-white"
                  type="submit"
                  disabled={state.submitting}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonHoverVariants}
                  initial="initial"
                >
                  {state.submitting ? "Sending..." : "Send"}
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
