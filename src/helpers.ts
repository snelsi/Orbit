import { nanoid } from "nanoid";

// Get random integer
export const random = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min)) + min;

// Get one random circles
export const getRandomPattern = () => {
  const lines = random(1, random(1, random(2, 3)));
  const pattern: number[] = [];
  for (let i = 0; i < lines; i += 1) {
    pattern.push(random(0.1, random(2, 8)));
  }

  return {
    repeat: random(random(10, 20), 80),
    pattern,
  };
};

// Get random circles
export const getRandomConfig = (svgSize: number) => {
  const config = [];
  for (let i = svgSize / 6; i < svgSize / 2; i += 12) {
    config.push({
      id: nanoid(),
      r: `${i}px`,
      ...getRandomPattern(),
      width: "2px",
      duration: `${random(20, 40)}s`,
    });
  }
  return config;
};
