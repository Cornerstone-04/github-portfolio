import { useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import Layout from "../layout/Layout";
import { RepoCard } from "../components";
import Slider from "react-slick";
import { settings } from "../data/carouselSettings";
import { NavArrow } from "../assets/icons";
import { GithubLogo } from "../assets/images";

const Repositories = () => {
  const sliderRef = useRef(null);
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        "/users/Cornerstone-04/repos?per_page=50"
      );
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <Layout>
      <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:mb-[6rem] md:mt-[4rem] flex flex-col gap-[4rem] justify-center items-start">
        <h1 className="text-[3rem] md:text-[4rem] font-light tracking-tight">
          My Repositories
        </h1>
        <section className="w-full">
          <Slider ref={sliderRef} {...settings}>
            {repos &&
              repos.map((repo) => (
                <RepoCard
                  key={repo.id}
                  name={repo.name}
                  link={`/repositories/${repo.name}`}
                  img={GithubLogo}
                  desc={repo.description ? repo.description : "No description"}
                  watch={repo.watchers_count}
                />
              ))}
          </Slider>
        </section>
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={goToPrevSlide}
            className="border border-white p-3 hover:bg-white hover:text-dark transition-all ease-linear duration-300"
          >
            <NavArrow className="w-6 h-6" />
          </button>
          <button
            onClick={goToNextSlide}
            className="border border-white p-3 hover:bg-white hover:text-dark transition-all ease-linear duration-300"
          >
            <NavArrow className="w-6 h-6 rotate-180" />
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Repositories;
