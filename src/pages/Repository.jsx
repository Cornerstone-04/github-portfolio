import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";

const Repository = () => {
  const [repo, setRepo] = useState(null);
  const { repoName } = useParams();

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
    <div>
      <h1>{repo.name}</h1>
      <p>Description: {repo.description}</p>
      <Link to="/">Home</Link>
    </div>
  );
};
export default Repository;
