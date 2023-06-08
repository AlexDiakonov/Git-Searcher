import { UserRepository } from "./userRepos.dto";

const API_KEY = "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"

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
