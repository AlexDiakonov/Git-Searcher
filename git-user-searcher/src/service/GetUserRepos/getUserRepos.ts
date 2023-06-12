import { UserRepository } from "./userRepos.dto";

const API_KEY = process.env.REACT_APP_TOKEN_KEY

export const getUserRepositories = (userName: string): Promise<UserRepository[]> => {
  return fetch(`https://api.github.com/users/${userName}/repos`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    return response.json();
  });
};
