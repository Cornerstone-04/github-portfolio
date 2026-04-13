import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "../api/axios";
import Layout from "../layout/Layout";
import { RepoCard, PageTransition } from "../components";
import { GithubLogo } from "../assets/images";
import {
  headingVariants,
  staggerContainer,
  itemVariants,
} from "../utils/animations";

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [sortBy, setSortBy] = useState("stars");

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        "/users/Cornerstone-04/repos?per_page=100&sort=updated"
      );
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === "stars") {
      return b.stargazers_count - a.stargazers_count;
    } else if (sortBy === "recent") {
      return new Date(b.updated_at) - new Date(a.updated_at);
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <Layout>
      <PageTransition>
        <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:mb-[6rem] md:mt-[4rem] flex flex-col gap-[4rem]">
          <motion.div
            variants={headingVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-4"
          >
            <h1 className="text-[3rem] md:text-[4rem] font-light tracking-tight">
              My Repositories
            </h1>
            <p className="text-text text-lg md:text-xl max-w-2xl">
              A collection of projects showcasing my work in frontend development, design systems, and creative applications.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-3 flex-wrap"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { label: "Most Stars", value: "stars" },
              { label: "Recently Updated", value: "recent" },
              { label: "Alphabetical", value: "name" },
            ].map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={`px-4 py-2 border transition-all duration-300 ${
                  sortBy === option.value
                    ? "border-white bg-white text-dark font-medium"
                    : "border-[#5D5D5D] text-text hover:border-white"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {sortedRepos && sortedRepos.length > 0 ? (
              sortedRepos.map((repo) => (
                <motion.div key={repo.id} variants={itemVariants}>
                  <RepoCard
                    name={repo.name}
                    link={`/repositories/${repo.name}`}
                    img={GithubLogo}
                    desc={repo.description ? repo.description : "No description"}
                    watch={repo.watchers_count}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                variants={itemVariants}
              >
                <p className="text-text text-lg">Loading repositories...</p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="border-t border-[#5D5D5D] pt-8 mt-8"
            variants={itemVariants}
            initial="initial"
            animate="animate"
          >
            <p className="text-text text-base">
              Showing <span className="font-bold text-white">{sortedRepos.length}</span> repositories
            </p>
          </motion.div>
        </main>
      </PageTransition>
    </Layout>
  );
};

export default Repositories;
