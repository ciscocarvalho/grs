const inputIsGithubUsernameAndRepository = (input: string) => {
  return /^[a-zA-Z\d_.-]+\/[a-zA-Z\d_.-]+$/.test(input);
};

export const parseOwnerAndRepositoryFromInput = (input: string) => {
  if (inputIsGithubUsernameAndRepository(input)) {
    const [owner, repository] = input.split("/");
    return { owner, repository };
  }

  throw new Error(`Can't parse input: ${input}`);
};
