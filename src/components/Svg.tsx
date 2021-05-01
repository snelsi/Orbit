import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

const SVG = styled.svg`
  --animation-duration: 20s;
  --line-dasharray: 2px 25%;
  --line-width: 4px;
  --line-hover-color: "3500FF";

  filter: url(#glow);
  overflow: visible;

  & circle.orbit {
    --line-percent: calc(var(--line-length) / 100);
    transition: stroke 0.2s ease-out;
    stroke: white;
    stroke-dasharray: var(--line-dasharray);
    stroke-linecap: round;
    stroke-width: var(--line-width);
  }

  & g {
    animation: ${rotate} linear infinite;
    animation-duration: var(--animation-duration);
    transform-origin: 50% 50%;

    &:hover {
      & circle.orbit {
        stroke: var(--line-hover-color);
      }
    }
  }
`;

export default SVG;
