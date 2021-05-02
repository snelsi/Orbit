import * as React from "react";
import styled from "styled-components";

const Circle = styled.circle`
  opacity: 0.2;
`;

interface StarProps {
  x: string;
  y: string;
}
const Star: React.FC<StarProps> = ({ x, y }) => (
  <Circle cx={x} cy={y} r="2px" fill="white" />
);

export default Star;
