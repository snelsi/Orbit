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

  & circle {
    --line-percent: calc(var(--line-length) / 100);

    animation: ${rotate} linear infinite;
    animation-duration: var(--animation-duration);
    transform-origin: 50% 50%;
    stroke: white;
    stroke-dasharray: var(--line-dasharray);
    stroke-linecap: round;
    stroke-width: var(--line-width);
  }
`;

export default SVG;
