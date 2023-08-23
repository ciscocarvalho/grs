import { RepositoryInfo } from "../types/RepositoryInfo";

export const filterRepositoryInfoForDisplaying = (RepositoryInfo: RepositoryInfo) => {
  return {
    name: RepositoryInfo.name,
    owner: RepositoryInfo.owner.login,
    description: RepositoryInfo.description,
    fork: RepositoryInfo.fork,
    created_at: RepositoryInfo.created_at,
    updated_at: RepositoryInfo.updated_at,
    pushed_at: RepositoryInfo.pushed_at,
    git_url: RepositoryInfo.git_url,
    ssh_url: RepositoryInfo.ssh_url,
    clone_url: RepositoryInfo.clone_url,
    homepage: RepositoryInfo.homepage,
    size: RepositoryInfo.size,
    stargazers_count: RepositoryInfo.stargazers_count,
    language: RepositoryInfo.language,
    mirror_url: RepositoryInfo.mirror_url,
    archived: RepositoryInfo.archived,
    disabled: RepositoryInfo.disabled,
    license: RepositoryInfo.license?.name,
    allow_forking: RepositoryInfo.allow_forking,
    is_template: RepositoryInfo.is_template,
    topics: RepositoryInfo.topics,
    visibility: RepositoryInfo.visibility,
    forks: RepositoryInfo.forks,
    open_issues: RepositoryInfo.open_issues,
    watchers: RepositoryInfo.watchers,
    default_branch: RepositoryInfo.default_branch,
  };
};
