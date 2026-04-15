import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { PageTransition } from "../components";
import {
  useRepositoryCommitsQuery,
  useRepositoryQuery,
  useLatestCommitQuery,
} from "../hooks";
import {
  headingVariants,
  itemVariants,
  staggerContainer,
  fadeInVariants,
  hoverScaleVariants,
} from "../utils/animations";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Repository = () => {
  const { repoName } = useParams();
  const navigate = useNavigate();

  const {
    data: repo,
    isLoading: repoLoading,
    isError: repoError,
    error: repoErrorDetails,
  } = useRepositoryQuery(repoName);

  const { data: commits = [], isLoading: commitsLoading } =
    useRepositoryCommitsQuery(repoName);

  const { data: latestCommit, isLoading: latestCommitLoading } =
    useLatestCommitQuery(repoName);

  if (repoLoading) {
    return (
      <Layout>
        <PageTransition>
          <main className="px-6 md:px-14 my-16 md:my-24">
            <p className="text-text text-lg">Loading repository...</p>
          </main>
        </PageTransition>
      </Layout>
    );
  }

  if (repoError) {
    return (
      <Layout>
        <PageTransition>
          <main className="px-6 md:px-14 my-16] md:my-24">
            <p className="text-red-400 text-lg">Failed to load repository.</p>
            <p className="text-text text-sm mt-2">
              {repoErrorDetails?.message || "Something went wrong"}
            </p>
          </main>
        </PageTransition>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageTransition>
        <main className="px-6 md:px-14 my-16 md:my-24 flex flex-col gap-12">
          <motion.button
            onClick={() => navigate("/repositories")}
            className="w-fit border border-white py-3 px-6 hover:bg-white text-white hover:text-black! transition-all ease-linear duration-300 items-center justify-between cursor-pointer flex gap-3 md:gap-6"
            variants={hoverScaleVariants}
            whileHover="hover"
            initial="initial"
            animate="animate"
            whileTap="tap"
          >
            <BsArrowLeft className="w-5" />
            <span>Back to Repositories</span>
          </motion.button>

          <motion.section
            className="border-2 border-white p-8 md:p-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={headingVariants}
              className="text-4xl md:text-5xl font-light tracking-tight mb-2 capitalize"
            >
              {repo?.name}
            </motion.h1>

            <motion.p
              variants={fadeInVariants}
              className="text-text text-lg md:text-xl mb-8"
            >
              {repo?.description || "No description available"}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="border border-white p-6"
                variants={itemVariants}
              >
                <img
                  src={repo?.owner?.avatar_url}
                  alt={repo?.owner?.login}
                  className="w-full h-auto mb-4 border border-white"
                />
                <p className="text-text font-medium text-base">
                  <span className="font-bold">Owner:</span> {repo?.owner?.login}
                </p>
              </motion.div>

              <motion.div
                className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  { label: "Language", value: repo?.language || "N/A" },
                  { label: "Stars", value: repo?.stargazers_count ?? 0 },
                  { label: "Forks", value: repo?.forks ?? 0 },
                  { label: "Watchers", value: repo?.watchers ?? 0 },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    className="border border-white p-4"
                    variants={itemVariants}
                  >
                    <p className="text-sm text-text font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-light">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="border border-white p-6"
                variants={itemVariants}
              >
                <p className="text-sm text-text font-medium mb-2">
                  Repository Info
                </p>
                <div className="space-y-3 text-base font-light">
                  <p>
                    <span className="font-medium">Branch:</span>{" "}
                    {repo?.default_branch}
                  </p>
                  <p>
                    <span className="font-medium">Commits:</span>{" "}
                    {commitsLoading ? "Loading..." : commits.length}
                  </p>
                  <p>
                    <span className="font-medium">Size:</span>{" "}
                    {repo?.size
                      ? `${(repo.size / 1024).toFixed(2)} KB`
                      : "0 KB"}
                  </p>
                  <p>
                    <span className="font-medium">Issues:</span>{" "}
                    {repo?.open_issues ?? 0}
                  </p>
                  <p>
                    <span className="font-medium">Forked:</span>{" "}
                    {repo?.fork ? "Yes" : "No"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="border border-white p-6"
                variants={itemVariants}
              >
                <p className="text-sm text-text font-medium mb-2">Timeline</p>
                <div className="space-y-3 text-base font-light">
                  <p>
                    <span className="font-medium">Created:</span>{" "}
                    {repo?.created_at
                      ? new Date(repo.created_at).toDateString()
                      : "N/A"}
                  </p>
                  <p>
                    <span className="font-medium">Updated:</span>{" "}
                    {repo?.updated_at
                      ? new Date(repo.updated_at).toDateString()
                      : "N/A"}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="border border-white p-6 mb-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <p className="text-sm text-text font-medium mb-2">
                Latest Commit
              </p>
              {latestCommitLoading ? (
                <p className="text-base font-light text-text">Loading...</p>
              ) : latestCommit ? (
                <div className="space-y-3 text-base font-light">
                  <p>
                    <span className="font-medium">Message:</span>{" "}
                    {latestCommit.commit.message}
                  </p>
                  <p>
                    <span className="font-medium">Author:</span>{" "}
                    {latestCommit.commit.author.name}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(latestCommit.commit.author.date).toDateString()}
                  </p>
                </div>
              ) : (
                <p className="text-base font-light text-text">
                  No commits available
                </p>
              )}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.a
                href={repo?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white p-6 hover:bg-white text-white hover:text-black! transition-all ease-linear duration-300 flex items-center justify-between cursor-pointer"
                variants={hoverScaleVariants}
                whileHover="hover"
              >
                <span className="text-base md:text-lg font-light">
                  View on GitHub
                </span>
                <BsArrowRight className="w-5" />
              </motion.a>

              {repo?.homepage ? (
                <motion.a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white p-6 hover:bg-white text-white hover:text-black! transition-all ease-linear duration-300 flex items-center justify-between cursor-pointer"
                  variants={hoverScaleVariants}
                  whileHover="hover"
                >
                  <span className="text-base md:text-lg font-light">
                    Live Preview
                  </span>
                  <BsArrowRight className="w-5" />
                </motion.a>
              ) : (
                <motion.div
                  className="border border-[#5D5D5D] p-6 text-text opacity-50"
                  variants={itemVariants}
                >
                  <span className="text-base md:text-lg font-light">
                    No hosted preview
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.section>
        </main>
      </PageTransition>
    </Layout>
  );
};

export default Repository;
