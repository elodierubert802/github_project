class SimpleGithubProject {
  constructor() {}

  addGitHubIssue(title: string) {
    console.log(`Adding issue "${title}" to GitHub.`);
  }

  removeGitHubIssue(id: number) {
    if (id > 0 && id <= 1000) {
      console.log(`Removing issue ${id} from GitHub.`);
    }
  }
}

const githubProject = new SimpleGithubProject();
githubProject.addGitHubIssue("Example Issue");
githubProject.removeGitHubIssue(5);
