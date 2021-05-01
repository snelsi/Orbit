import * as React from "react";

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
}
const Circle: React.FC<CircleProps> = ({
  r,
  width,
  pattern,
  duration,
  repeat = 1,
}) => {
  const circleRef = React.useRef<SVGCircleElement>(null);

  // Hack: Force initial rerender
  const [refAcquired, setRefAcquired] = React.useState(false);
  React.useEffect(() => setRefAcquired(true), []);
  React.useEffect(() => {}, [refAcquired]);

  const config: { [x: string]: string | number } = {
    "--line-radius": r,
    "--line-length": getTotalLength(circleRef.current),
  };
  if (width) config["--line-width"] = width;
  if (duration) config["--animation-duration"] = duration;

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

  return (
    <circle
      r={r}
      cx="50%"
      cy="50%"
      style={config}
      ref={circleRef}
      fill="none"
    />
  );
};

export default Circle;
