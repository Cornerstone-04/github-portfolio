import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get("/users/Cornerstone-04/repos");
        setRepos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepos();
  });

  return (
    <Layout>
      <h1>Cornerstone&apos;s Repos Repositories</h1>
      <div>
        {repos &&
          repos.map((repo) => (
            <p key={repo.id} className="capitalize">
              <Link to={`/repositories/${repo.name}`} target="_blank">
                {repo.name}
              </Link>
            </p>
          ))}
      </div>
    </Layout>
  );
};

export default Repositories;
