import { RepositoryInfo } from "../types/RepositoryInfo";

export const fetchRepositoryInfo = async (author: string, repository: string): Promise<RepositoryInfo> => {
  const repositorySource = `${author}/${repository}`;
  const res = await fetch(`https://api.github.com/repos/${repositorySource}`);
  const repositoryInfo = await res.json();

  if (repositoryInfo.message === "Not Found") {
    throw new Error(`Repository not found: ${repositorySource}`);
  }

  return repositoryInfo;
};
