import styled from "styled-components";

const SVG = styled.svg`
  --animation-duration: 20s;
  --line-dasharray: 2px 25%;
  --line-width: 4px;
  --line-hover-color: "3500FF";
  --size: min(92vw, 80vh);

  overflow: visible;
  height: var(--size);
  width: var(--size);
  z-index: 1;

  &[data-glow="true"] {
    filter: url(#glow);
  }
`;

export default SVG;
