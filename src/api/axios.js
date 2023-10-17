import axios from "axios";

const baseURL = import.meta.env.VITE_GITHUB_URL;
console.log(baseURL);

export default axios.create({
  baseURL,
});
