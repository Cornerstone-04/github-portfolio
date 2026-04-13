import axios from "axios";

const baseURL = import.meta.env.VITE_GITHUB_URL;

export default axios.create({
  baseURL,
  allowAbsoluteUrls: false,
  timeout: 10000,
  headers: {
    Accept: "application/vnd.github+json",
  },
});
