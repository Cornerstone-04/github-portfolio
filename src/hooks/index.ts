/**
 * Custom React hooks for GitHub API queries
 * Manages data fetching and caching for repositories and commits
 */

import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const GITHUB_USERNAME = "Cornerstone-04";
const QUERY_STALE_TIME = 1000 * 60 * 5; // 5 minutes

/**
 * Fetches a paginated list of repositories for the GitHub user 'Cornerstone-04'.
 *
 * @returns {UseQueryResult} A React Query result object containing:
 *   - data: Array of repository objects sorted by most recently updated
 *   - isLoading: Boolean indicating if the query is in progress
 *   - error: Any error that occurred during the fetch
 *   - Additional React Query utilities (refetch, etc.)
 *
 * @description
 * Uses React Query to manage the fetching and caching of GitHub repositories.
 * Retrieves up to 100 repositories sorted by update date in descending order.
 * Results are cached with the query key "repositories".
 */

export const useRepositoriesQuery = () => {
  return useQuery({
    queryKey: ["repositories"],
    queryFn: async () => {
      const response = await axios.get(
        `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      );
      return response.data;
    },
    staleTime: QUERY_STALE_TIME,
  });
};

export const useRepositoryQuery = (repoName) => {
  return useQuery({
    queryKey: ["repository", repoName],
    queryFn: async () => {
      const response = await axios.get(`/repos/${GITHUB_USERNAME}/${repoName}`);
      return response.data;
    },
    enabled: Boolean(repoName),
    staleTime: QUERY_STALE_TIME,
  });
};

export const useRepositoryCommitsQuery = (repoName) => {
  return useQuery({
    queryKey: ["repository-commits", repoName],
    queryFn: async () => {
      const response = await axios.get(
        `/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=100`,
      );
      return response.data;
    },
    enabled: Boolean(repoName),
    staleTime: QUERY_STALE_TIME,
  });
};

//  Create a custom hook to fetch the latest commit for a given repository
export const useLatestCommitQuery = (repoName) => {
  return useQuery({
    queryKey: ["latest-commit", repoName],
    queryFn: async () => {
      const response = await axios.get(
        `/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=1`,
      );
      return response.data[0]; // Return the latest commit
    },
    enabled: Boolean(repoName),
    staleTime: QUERY_STALE_TIME,
  });
};