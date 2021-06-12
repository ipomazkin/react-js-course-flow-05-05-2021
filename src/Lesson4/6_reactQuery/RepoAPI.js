import axios from "axios";

const defaultConfig = {
  baseURL: "//api.github.com/"
};

export const getRepoInfo = (user, repoName) => {
  return axios.get(`/repos/${user}/${repoName}`, {
    ...defaultConfig,
  });
};
