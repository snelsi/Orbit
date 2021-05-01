import * as React from "react";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    opacity: 0.2;
  }
  45% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
  55% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
`;

const Circle = styled.circle`
  animation: ${shine} 20s linear infinite;
  animation-delay: var(--animation-delay);
  transition: all 0.2s ease;
`;

type CSSProperties = { [x: string]: string | number };

interface StarProps {
  x: string;
  y: string;
  offset: string;
}
const Star: React.FC<StarProps> = ({ x, y, offset }) => {
  const config: CSSProperties = {};
  if (offset) config["--animation-delay"] = offset;

  return <Circle cx={x} cy={y} r="2px" fill="white" style={config} />;
};

export default Star;
