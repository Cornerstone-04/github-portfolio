import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import Layout from "../layout/Layout";
import { Loader } from "../components";

const Repository = () => {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
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

    fetchRepo();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [repoName]);

  if (loading) {
    return <Loader />;
  }

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
