import * as React from "react";
import chroma from "chroma-js";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const G = styled.g`
  animation: ${rotate} linear infinite;
  animation-duration: var(--animation-duration);
  cursor: pointer;
  transform-origin: 50% 50%;

  & circle.orbit {
    --line-percent: calc(var(--line-length) / 100);
    transition: stroke 0.2s ease-out;
    stroke: white;
    stroke-dasharray: var(--line-dasharray);
    stroke-linecap: round;
    stroke-width: var(--line-width);
  }

  &:hover,
  &[data-active="true"] {
    & circle.orbit {
      stroke: var(--line-hover-color);
    }
  }
`;

const f = chroma.scale([
  "#8C00FC",
  "#3500FF",
  "#01FE01",
  "#FFFE37",
  "#FF8600",
  "#ED0003",
]);

type CSSProperties = { [x: string]: string | number };

const getTotalLength = (elem: SVGCircleElement | null) => {
  if (!elem) return 0;

  try {
    // 'getTotalLength' can throw an error
    return elem.getTotalLength() || 0;
  } catch {
    return 0;
  }
};

interface CircleProps {
  r: string; // Circle radius
  pattern: number[]; // Array of lines length percents (relative to circle length)
  repeat?: number; // How many times to repeat the pattern
  width?: string; // Line width
  duration?: string; // Animation duration
  percent?: number; // 0 - Outter, 1 - Inner
}
const Circle: React.FC<CircleProps> = ({
  r,
  width,
  pattern,
  duration,
  repeat = 1,
  percent = 0,
}) => {
  const circleRef = React.useRef<SVGCircleElement>(null);

  // Hack: Force initial rerender
  const [refAcquired, setRefAcquired] = React.useState(false);
  React.useEffect(() => setRefAcquired(true), []);
  React.useEffect(() => {}, [refAcquired]);

  const [active, setActive] = React.useState(false);
  const toggleGlow = (e: React.MouseEvent) => {
    e?.stopPropagation();
    setActive((cur) => !cur);
  };

  const config: CSSProperties = {
    "--line-radius": r,
    "--line-length": getTotalLength(circleRef.current),
  };
  if (width) config["--line-width"] = width;

  // Parse incoming pattern and convert it to 'stroke-dasharray'

  // Calculate gaps
  const total = (pattern?.reduce((acc, num) => acc + num, 0) || 0) * repeat;
  const gaps = (pattern?.length || 0) * repeat;
  const gapLength = gaps ? (100 - total) / gaps : 100;
  config["--line-gap"] = `calc(var(--line-percent) * ${gapLength})`;

  // Calculate dasharray
  const dasharray =
    pattern
      ?.map((num) => `calc(var(--line-percent) * ${num || 0})  var(--line-gap)`)
      .join(" ") || "";
  config["--line-dasharray"] = dasharray;

  // Add rainbow hover color
  const hoverColor = f(percent).hex();
  const groupConfig: CSSProperties = {
    "--line-hover-color": hoverColor,
  };
  if (duration) groupConfig["--animation-duration"] = duration;

  return (
    <G style={groupConfig} onClick={toggleGlow} data-active={active}>
      <circle
        r={r}
        cx="50%"
        cy="50%"
        style={config}
        ref={circleRef}
        fill="none"
        className="orbit"
      />
      <circle
        r={r}
        cx="50%"
        cy="50%"
        stroke="transparent"
        strokeWidth="12px"
        fill="none"
        opacity="0"
      />
    </G>
  );
};

export default Circle;
