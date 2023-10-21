import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await axios.get("/users/Cornerstone-04/repos");
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  });

  return (
    <Layout>
      <main className="px-[1.5rem] md:px-[3.5rem] my-[4.12rem] flex flex-col gap-[2.63rem] justify-center items-start">
        <h1 className="text-[3rem] md:text-[3.5rem] font-light">
          My Repositories
        </h1>
        <section className="grid gap-6 w-full overflow-x-scroll">
          {repos ? (
            repos.map((repo) => (
              <Link
                key={repo.id}
                to={`/repositories/${repo.name}`}
                className="flex flex-col gap-4 w-full sm:max-w-[18rem] mb-12"
              >
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="h-[18rem] w-full"
                />
                <div className="w-full flex justify-between items-end">
                  <h2 className="text-lg md:text-2xl font-medium capitalize">
                    {repo.name}
                  </h2>
                  <div>Stars</div>
                </div>
                <p className="text-base overflow-ellipsis text-text">
                  {repo.description ? repo.description : "No description"}
                </p>
                <p className="text-[#D3D3D3] font-medium text-base">
                  {repo.watchers_count}&nbsp;watcher(s)
                </p>
              </Link>
            ))
          ) : (
            <div>No repositories</div>
          )}
        </section>
        <div className="buttons"></div>
      </main>
    </Layout>
  );
};

export default Repositories;
