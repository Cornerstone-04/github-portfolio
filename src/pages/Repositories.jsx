import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "../api/axios";
import Layout from "../layout/Layout";
import { RepoCard, Carousel, PageTransition } from "../components";
import { GithubLogo } from "../assets/images";
import {
  headingVariants,
  staggerContainer,
  itemVariants,
} from "../utils/animations";

const Repositories = () => {
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

  return (
    <Layout>
      <PageTransition>
        <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:mb-[6rem] md:mt-[4rem] flex flex-col gap-[4rem] justify-center items-start">
          <motion.h1
            variants={headingVariants}
            initial="initial"
            animate="animate"
            className="text-[3rem] md:text-[4rem] font-light tracking-tight"
          >
            My Repositories
          </motion.h1>
          <motion.section
            className="w-full"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {repos.length > 0 && (
              <Carousel
                items={repos}
                renderItem={(repo) => (
                  <RepoCard
                    key={repo.id}
                    name={repo.name}
                    link={`/repositories/${repo.name}`}
                    img={GithubLogo}
                    desc={repo.description ? repo.description : "No description"}
                    watch={repo.watchers_count}
                  />
                )}
                gap={32}
              />
            )}
          </motion.section>
        </main>
      </PageTransition>
    </Layout>
  );
};

export default Repositories;
