import * as React from "react";
import styled from "styled-components";

const Button = styled.a`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 20px;
  opacity: 0.5;
  transition: opacity 0.2s ease;
  z-index: 2;
  & > img {
    width: 28px;
    height: 28px;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

interface GitHubLinkProps {}

const GitHubLink: React.FC<GitHubLinkProps> = () => (
  <Button
    href="https://github.com/snelsi/orbit"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Github Repository"
  >
    <img src="GitHub.svg" alt="GitHub icon" />
  </Button>
);

export default GitHubLink;
