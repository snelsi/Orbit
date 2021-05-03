// Get random integer
export const random = (min = 0, max = 10) =>
  Math.floor(min + Math.random() * (max + 1 - min));

// Get one random circles
export const getRandomPattern = () => {
  const lines = random(1, random(1, 2));
  const pattern: number[] = [];
  for (let i = 0; i < lines; i += 1) {
    pattern.push(random(1, random(10, 60)) / 10);
  }

  return {
    repeat: random(10, random(50, 75)),
    pattern,
    width: "2px",
    duration: `${random(20, 40)}s`,
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
      percent: (i - innerRadius) / (outerRadius - innerRadius),
    });
  }
  return config;
};

// Get one random star
export const getStar = () => ({
  x: `${random(0, 100)}%`,
  y: `${random(0, 100)}%`,
});

// Get random stars
export const getStars = () => {
  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({ ...getStar(), id: String(i) });
  }
  return stars;
};
