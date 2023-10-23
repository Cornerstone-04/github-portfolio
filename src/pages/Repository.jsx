import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import Layout from "../layout/Layout";
import { Loader } from "../components";
import { NavArrow } from "../assets/icons";

const Repository = () => {
  const [repo, setRepo] = useState(null);
  const [commit, setCommits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
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
  }, [loading, repoName]);

  if (loading) {
    return <Loader progress={progress} />;
  }

  return (
    <Layout>
      <main className="px-[1.5rem] md:px-[3.5rem] my-[4rem] md:my-[6rem] flex flex-col gap-16">
        <section className="flex justify-start items-center gap-4">
          <NavArrow
            onClick={() => navigate("/repositories")}
            className="hover:opacity-75 cursor-pointer transition-all ease-linear"
          />
          <h1 className="text-[2.3rem] md:text-[3.5rem] font-light capitalize">
            {repo.name}
          </h1>
        </section>
        <section className="flex flex-col-reverse sm:flex-row gap-6">
          <div className="w-full max-w-[19.925rem] grid gap-2">
            <img src={repo.owner.avatar_url} alt="" />
            <p className="text-text font-medium text-base">
              Owner: {repo.owner.login}
            </p>
          </div>
          <div className="text-base md:text-[1.75rem] font-light text-text flex flex-col gap-2">
            <p>
              Description: &nbsp;
              {repo.description ? repo.description : "No description"}
            </p>
            <p>Default Branch: &nbsp;{repo.default_branch}</p>
            <p>Number of Commits : &nbsp;{commit.length}</p>
            <p>Stars: &nbsp;{repo.stargazers_count}</p>
            <p>Created: &nbsp;{new Date(repo.created_at).toDateString()}</p>
            <p>Updated: &nbsp;{new Date(repo.updated_at).toDateString()}</p>
            <p>Forked Repo: {repo.fork ? "Yes" : "No"}</p>
            <p>Forks: &nbsp;{repo.forks}</p>
            <p>Size: {(repo.size / 1024).toFixed(2)} KBs</p>
            <p>Language: &nbsp;{repo.language}</p>
            <p>Open Issues: &nbsp;{repo.open_issues}</p>
            <p>Watchers: &nbsp;{repo.watchers}</p>
            <p>
              Github: &nbsp;
              <Link
                to={repo.html_url}
                className="text-link hover:text-btn-hover"
              >
                {repo.html_url}
              </Link>
            </p>
            <p>
              Preview: &nbsp;
              {repo.homepage ? (
                <Link
                  to={repo.homepage && repo.homepage}
                  className="text-link hover:text-btn-hover"
                >
                  {repo.homepage}
                </Link>
              ) : (
                "No hosted page"
              )}
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Repository;
