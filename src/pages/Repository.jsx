import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "../api/axios";
import Layout from "../layout/Layout";
import { PageTransition } from "../components";
import { NavArrow } from "../assets/icons";
import {
  headingVariants,
  itemVariants,
  staggerContainer,
  fadeInVariants,
  hoverScaleVariants,
} from "../utils/animations";

const Repository = () => {
  const [repo, setRepo] = useState(null);
  const [commit, setCommits] = useState(null);
  const { repoName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(`/repos/Cornerstone-04/${repoName}`);
        setRepo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCommits = async () => {
      try {
        const response = await axios.get(
          `/repos/Cornerstone-04/${repoName}/commits`
        );
        setCommits(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepo();
    fetchCommits();
  }, [repoName]);

  return (
    <Layout>
      <PageTransition>
        <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:my-[6rem] flex flex-col gap-12">
          <motion.button
            onClick={() => navigate("/repositories")}
            className="flex items-center gap-3 text-text hover:text-white transition-all ease-linear w-fit border border-white p-3"
            variants={itemVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            <NavArrow className="w-5 h-5" />
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
              {repo?.description ? repo.description : "No description available"}
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
                  src={repo?.owner.avatar_url} 
                  alt={repo?.owner.login}
                  className="w-full h-auto mb-4 border border-white"
                />
                <p className="text-text font-medium text-base">
                  <span className="font-bold">Owner:</span> {repo?.owner.login}
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
                  { label: "Stars", value: repo?.stargazers_count },
                  { label: "Forks", value: repo?.forks },
                  { label: "Watchers", value: repo?.watchers },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="border border-white p-4"
                    variants={itemVariants}
                  >
                    <p className="text-sm text-text font-medium mb-1">{item.label}</p>
                    <p className="text-xl font-light">{item.value}</p>
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
              <motion.div className="border border-white p-6" variants={itemVariants}>
                <p className="text-sm text-text font-medium mb-2">Repository Info</p>
                <div className="space-y-3 text-base font-light">
                  <p><span className="font-medium">Branch:</span> {repo?.default_branch}</p>
                  <p><span className="font-medium">Commits:</span> {commit?.length || 0}</p>
                  <p><span className="font-medium">Size:</span> {(repo?.size / 1024).toFixed(2)} KB</p>
                  <p><span className="font-medium">Issues:</span> {repo?.open_issues}</p>
                  <p><span className="font-medium">Forked:</span> {repo?.fork ? "Yes" : "No"}</p>
                </div>
              </motion.div>

              <motion.div className="border border-white p-6" variants={itemVariants}>
                <p className="text-sm text-text font-medium mb-2">Timeline</p>
                <div className="space-y-3 text-base font-light">
                  <p><span className="font-medium">Created:</span> {repo && new Date(repo.created_at).toDateString()}</p>
                  <p><span className="font-medium">Updated:</span> {repo && new Date(repo.updated_at).toDateString()}</p>
                </div>
              </motion.div>
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
                className="border border-white p-6 hover:bg-white hover:text-dark transition-all ease-linear duration-300 flex items-center justify-between cursor-pointer"
                variants={hoverScaleVariants}
                whileHover="hover"
              >
                <span className="text-base md:text-lg font-light">View on GitHub</span>
                <span className="text-xl">→</span>
              </motion.a>
              {repo?.homepage ? (
                <motion.a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white p-6 hover:bg-white hover:text-dark transition-all ease-linear duration-300 flex items-center justify-between cursor-pointer"
                  variants={hoverScaleVariants}
                  whileHover="hover"
                >
                  <span className="text-base md:text-lg font-light">Live Preview</span>
                  <span className="text-xl">→</span>
                </motion.a>
              ) : (
                <motion.div
                  className="border border-[#5D5D5D] p-6 text-text opacity-50"
                  variants={itemVariants}
                >
                  <span className="text-base md:text-lg font-light">No hosted preview</span>
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
