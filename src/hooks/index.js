import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

export const useRepositoriesQuery = () => {
  return useQuery({
    queryKey: ["repositories"],
    queryFn: async () => {
      const response = await axios.get(
        "/users/Cornerstone-04/repos?per_page=100&sort=updated",
      );
      return response.data;
    },
  });
};

export const useRepositoryQuery = (repoName) => {
  return useQuery({
    queryKey: ["repository", repoName],
    queryFn: async () => {
      const response = await axios.get(`/repos/Cornerstone-04/${repoName}`);
      return response.data;
    },
    enabled: Boolean(repoName),
  });
};

export const useRepositoryCommitsQuery = (repoName) => {
  return useQuery({
    queryKey: ["repository-commits", repoName],
    queryFn: async () => {
      const response = await axios.get(
        `/repos/Cornerstone-04/${repoName}/commits?per_page=100`,
      );
      return response.data;
    },
    enabled: Boolean(repoName),
  });
};
