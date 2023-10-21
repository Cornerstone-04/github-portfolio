import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import Layout from "../layout/Layout";

const Repository = () => {
  const [repo, setRepo] = useState(null);
  const { repoName } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(`/repos/Cornerstone-04/${repoName}`);
        setRepo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepo();
  }, [repoName]);

  if (!repo) return <p>Loading...</p>;

  return (
    <Layout>
      <main>
       <h1>{repo.name}</h1>
      <p>Description: {repo.description}</p>
      <img src={repo.html_url} alt="" />
      </main>
    </Layout>
  );
};
export default Repository;
