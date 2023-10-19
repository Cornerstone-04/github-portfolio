import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <main className="px-[3.5rem] my-[6rem] grid gap-16">
        <h1 className="font-[300] text-[5rem]">I am Cornerstone Ephraim</h1>
        <section className="flex items-end gap-[7rem]">
          <div className="">
            <div className="rounded-full p-[0.72rem]">
              I am Cornerstone
              <div className="w-[5.625rem] h-[5.625rem] bg-author rounded-full bg-cover bg-no-repeat bg-center"></div>
            </div>
          </div>
          <div className="">
            <div>
              <p className="text-text text-[1.75rem] text-justify">
                As a seasoned frontend designer with three years of immersive
                experience, I pride myself on crafting visually stunning and
                highly functional user interfaces. With a keen eye for
                aesthetics and an intuitive understanding of user behaviour, I
                specialize in translating design concepts into elegant,
                responsive, and performant web applications.
                <br /><br />
                Proficient in HTML, CSS, and JavaScript, along with popular frameworks and
                libraries, I am passionate about optimizing user journeys,
                enhancing accessibility, and improving load times to deliver
                seamless and engaging experiences.
              </p>
            </div>
            <form>
              <input type="text" name="" id="" />
              <button></button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
