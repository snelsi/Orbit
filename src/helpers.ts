import { nanoid } from "nanoid";

// Get random integer
export const random = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min)) + min;

// Get one random circles
export const getRandomPattern = () => {
  const lines = random(1, random(1, 4));
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
  const outerRadius = svgSize / 2;
  const innerRadius = svgSize / 6;
  for (let i = outerRadius; i > innerRadius; i -= 12) {
    config.push({
      r: `${i}px`,
      ...getRandomPattern(),
      width: "2px",
      duration: `${random(20, 40)}s`,
      percent: (i - innerRadius) / (outerRadius - innerRadius),
    });
  }
  return config;
};

// Get one random star
export const getStar = () => ({
  id: nanoid(),
  x: `${random(0, 100)}%`,
  y: `${random(0, 100)}%`,
});

// Get random stars
export const getStars = () => {
  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push(getStar());
  }
  return stars;
};
