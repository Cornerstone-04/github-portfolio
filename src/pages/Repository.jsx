import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import Layout from "../layout/Layout";
import { NavArrow } from "../assets/icons";

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
      <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:my-[6rem] flex flex-col gap-12">
        <button
          onClick={() => navigate("/repositories")}
          className="flex items-center gap-3 text-text hover:text-white transition-all ease-linear w-fit border border-white p-3"
        >
          <NavArrow className="w-5 h-5" />
          <span>Back to Repositories</span>
        </button>

        <section className="border-2 border-white p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2 capitalize">
            {repo.name}
          </h1>
          <p className="text-text text-lg md:text-xl mb-8">
            {repo.description ? repo.description : "No description available"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="border border-white p-6">
              <img 
                src={repo.owner.avatar_url} 
                alt={repo.owner.login}
                className="w-full h-auto mb-4 border border-white"
              />
              <p className="text-text font-medium text-base">
                <span className="font-bold">Owner:</span> {repo.owner.login}
              </p>
            </div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
              <div className="border border-white p-4">
                <p className="text-sm text-text font-medium mb-1">Language</p>
                <p className="text-xl font-light">{repo.language || "N/A"}</p>
              </div>
              <div className="border border-white p-4">
                <p className="text-sm text-text font-medium mb-1">Stars</p>
                <p className="text-xl font-light">{repo.stargazers_count}</p>
              </div>
              <div className="border border-white p-4">
                <p className="text-sm text-text font-medium mb-1">Forks</p>
                <p className="text-xl font-light">{repo.forks}</p>
              </div>
              <div className="border border-white p-4">
                <p className="text-sm text-text font-medium mb-1">Watchers</p>
                <p className="text-xl font-light">{repo.watchers}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-white p-6">
              <p className="text-sm text-text font-medium mb-2">Repository Info</p>
              <div className="space-y-3 text-base font-light">
                <p><span className="font-medium">Branch:</span> {repo.default_branch}</p>
                <p><span className="font-medium">Commits:</span> {commit?.length || 0}</p>
                <p><span className="font-medium">Size:</span> {(repo.size / 1024).toFixed(2)} KB</p>
                <p><span className="font-medium">Issues:</span> {repo.open_issues}</p>
                <p><span className="font-medium">Forked:</span> {repo.fork ? "Yes" : "No"}</p>
              </div>
            </div>

            <div className="border border-white p-6">
              <p className="text-sm text-text font-medium mb-2">Timeline</p>
              <div className="space-y-3 text-base font-light">
                <p><span className="font-medium">Created:</span> {new Date(repo.created_at).toDateString()}</p>
                <p><span className="font-medium">Updated:</span> {new Date(repo.updated_at).toDateString()}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to={repo.html_url}
              className="border border-white p-6 hover:bg-white hover:text-dark transition-all ease-linear duration-300 flex items-center justify-between"
            >
              <span className="text-base md:text-lg font-light">View on GitHub</span>
              <span className="text-xl">→</span>
            </Link>
            {repo.homepage ? (
              <Link
                to={repo.homepage}
                className="border border-white p-6 hover:bg-white hover:text-dark transition-all ease-linear duration-300 flex items-center justify-between"
              >
                <span className="text-base md:text-lg font-light">Live Preview</span>
                <span className="text-xl">→</span>
              </Link>
            ) : (
              <div className="border border-[#5D5D5D] p-6 text-text opacity-50">
                <span className="text-base md:text-lg font-light">No hosted preview</span>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Repository;
