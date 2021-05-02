import * as React from "react";

interface GitHubLinkProps {}

const GitHubLink: React.FC<GitHubLinkProps> = () => (
  <a
    href="https://github.com/snelsi/orbit"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Github Repository"
  >
    <img src="GitHub.svg" alt="GitHub icon" />
  </a>
);

export default GitHubLink;
