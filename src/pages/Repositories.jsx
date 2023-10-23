import { useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import Layout from "../layout/Layout";
import { Loader, RepoCard } from "../components";
import Slider from "react-slick";
import { settings } from "../data/carouselSettings";
import { NavArrow } from "../assets/icons";
import { GithubLogo } from "../assets/images";

const Repositories = () => {
  const sliderRef = useRef(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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

  if (loading) {
    return <Loader progress={progress} />;
  }

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
      <main className="px-[1.5rem] md:px-[3.5rem] my-[3rem] md:mb-[4.12rem] md:mt-[2rem] flex flex-col gap-[2.63rem] justify-center items-start">
        <h1 className="text-[3rem] md:text-[3.5rem] font-light">
          My Repositories
        </h1>
        <section className="w-full max-h-[26.6rem]">
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
        <div className="flex justify-center items-center gap-6">
          <NavArrow
            className="hover:opacity-75 cursor-pointer transition-all ease-linear"
            onClick={goToPrevSlide}
          />
          <NavArrow
            className="rotate-180 hover:opacity-75 cursor-pointer transition-all ease-linear"
            onClick={goToNextSlide}
          />
        </div>
      </main>
    </Layout>
  );
};

export default Repositories;
