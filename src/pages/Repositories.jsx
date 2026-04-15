import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { RepoCard, PageTransition } from "../components";
import { useRepositoriesQuery } from "../hooks";
import { getRepoSpaceImageUrl } from "../utils/imageUtils";
import {
  headingVariants,
  staggerContainer,
  itemVariants,
} from "../utils/animations";
import { NavArrow } from "../assets/icons";

const ITEMS_PER_PAGE = 6;

const Repositories = () => {
  const [sortBy, setSortBy] = useState("stars");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: repos = [],
    isLoading,
    isError,
    error,
  } = useRepositoriesQuery();

  const sortedRepos = useMemo(() => {
    const clonedRepos = [...repos];

    return clonedRepos.sort((a, b) => {
      if (sortBy === "stars") {
        return b.stargazers_count - a.stargazers_count;
      }

      if (sortBy === "recent") {
        return new Date(b.updated_at) - new Date(a.updated_at);
      }

      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });
  }, [repos, sortBy]);

  const totalPages = Math.ceil(sortedRepos.length / ITEMS_PER_PAGE);

  const paginatedRepos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedRepos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedRepos, currentPage]);

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <PageTransition>
        <main className="px-6 md:px-14 my-16 md:mb-24 md:mt-16 flex flex-col gap-16">
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
              A collection of projects showcasing my work in frontend
              development, design systems, and creative applications.
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
                onClick={() => handleSortChange(option.value)}
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {isLoading ? (
              <motion.div
                className="col-span-full text-center py-12"
                variants={itemVariants}
              >
                <p className="text-text text-lg">Loading repositories...</p>
              </motion.div>
            ) : isError ? (
              <motion.div
                className="col-span-full text-center py-12"
                variants={itemVariants}
              >
                <p className="text-red-400 text-lg">
                  Failed to load repositories.
                </p>
                <p className="text-text text-sm mt-2">
                  {error?.message || "Something went wrong"}
                </p>
              </motion.div>
            ) : paginatedRepos.length > 0 ? (
              paginatedRepos.map((repo) => (
                <motion.div key={repo.id} variants={itemVariants}>
                  <RepoCard
                    name={repo.name}
                    link={`/repositories/${repo.name}`}
                    img={getRepoSpaceImageUrl(repo.name)}
                    desc={repo.description || "No description"}
                    watch={repo.watchers_count}
                    stars={repo.stargazers_count}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                variants={itemVariants}
              >
                <p className="text-text text-lg">No repositories found.</p>
              </motion.div>
            )}
          </motion.div>

          {!isLoading && !isError && totalPages > 1 && (
            <motion.div
              className="flex flex-col gap-4"
              variants={itemVariants}
              initial="initial"
              animate="animate"
            >
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-3 border border-[#5D5D5D] text-text disabled:opacity-40 disabled:cursor-not-allowed hover:border-white"
                >
                  <NavArrow showCircle="false" className="w-4 h-4" />
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 border transition-all ${
                      currentPage === page
                        ? "border-white bg-white text-dark font-medium"
                        : "border-[#5D5D5D] text-text hover:border-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-3 border border-[#5D5D5D] text-text disabled:opacity-40 disabled:cursor-not-allowed hover:border-white"
                >
                  <NavArrow showCircle="false" className="w-4 h-4 rotate-180" />
                </button>
              </div>

              <p className="text-text text-sm">
                Showing{" "}
                <span className="font-bold text-white">
                  {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                </span>{" "}
                to{" "}
                <span className="font-bold text-white">
                  {Math.min(currentPage * ITEMS_PER_PAGE, sortedRepos.length)}
                </span>{" "}
                of{" "}
                <span className="font-bold text-white">
                  {sortedRepos.length}
                </span>{" "}
                repositories
              </p>
            </motion.div>
          )}
        </main>
      </PageTransition>
    </Layout>
  );
};

export default Repositories;
