import { useEffect, useState } from "react";
import { HeadImage, Loader } from "../components";
import Layout from "../layout/Layout";
import { useForm, ValidationError } from "@formspree/react";
// import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 25;
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [loading]);

  const [state, handleSubmit] = useForm("mvojlgyq");

  if (loading) {
    return <Loader progress={progress} />;
  }

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
      <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:my-[6rem] grid gap-8 md:gap-16">
        <h1 className="font-[300] text-4xl md:text-[5rem]">
          I am Cornerstone Ephraim
        </h1>
        <section className="flex flex-col md:flex-row items-start gap-8 md:gap-[7rem]">
          <div>
            <HeadImage />
          </div>
          <div className="flex flex-col gap-[5rem]">
            <div>
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
            </div>
            <form className="flex gap-6 w-full" onSubmit={handleSubmit}>
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
              <button
                className="w-full max-w-[6.75rem] h-[3.375rem] flex justify-center items-center bg-btn focus:bg-btn active:bg-btn-hover hover:bg-btn-hover transition-all ease-linear px-6 py-3"
                type="submit"
                disabled={state.submitting}
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
