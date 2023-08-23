#!/usr/bin/env node

import { Command } from "commander";
import { displayFlatInfo } from "./utils/displayFlatInfo";
import { parseOwnerAndRepositoryFromInput } from "./utils/parseOwnerAndRepositoryFromInput";
import { filterRepositoryInfoForDisplaying } from "./utils/filterRepositoryInfoForDisplaying";
import { fetchRepositoryInfo } from "./utils/fetchRepositoryInfo";

const program = new Command();

program.name("grs").description("Fetch github repository stats");

program.argument("<repository>").action(async (repositorySource) => {
  try {
    const { owner, repository } = parseOwnerAndRepositoryFromInput(repositorySource);
    let repositoryInfo = await fetchRepositoryInfo(owner, repository);
    let displayInfo = filterRepositoryInfoForDisplaying(repositoryInfo);
    displayFlatInfo(displayInfo);
  } catch (e) {
    process.exit(1);
  }
});

program.addHelpText("after", `
Example:
  $ grs git/git`
);

program.parse();
