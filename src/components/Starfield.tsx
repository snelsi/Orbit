import * as React from "react";
import styled, { keyframes } from "styled-components";
import { getStars } from "helpers";
import Star from "./Star";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Svg = styled.svg`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  & g {
    animation: ${rotate} 400s linear infinite;
    transform-origin: 50% 50%;
  }
`;

interface IStar {
  id: string;
  x: string;
  y: string;
  offset: string;
}

const stars: IStar[] = getStars();

interface StarfieldProps {}
const Starfield: React.FC<StarfieldProps> = () => (
  <Svg className="starfield">
    <g>
      {stars.map((star) => (
        <Star {...star} key={star.id} />
      ))}
    </g>
  </Svg>
);

export default Starfield;
