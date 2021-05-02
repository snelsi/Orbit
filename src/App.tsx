import * as React from "react";
import { isDesktop } from "react-device-detect";
import { useHotkeys } from "react-hotkeys-hook";
import { getRandomConfig } from "helpers";
import Circle from "components/Circle";
import Main from "components/Main";
import SVG from "components/Svg";
import Starfield from "components/Starfield";
import Actions from "components/Actions";
import GithubLink from "components/GithubLink";
import GenerateButton from "components/GenerateButton";
import SwitchGlowButton from "components/SwitchGlowButton";

const svgSize = 1000;

const getConfig = () => {
  const c = getRandomConfig(svgSize);
  console.log(`💫 New config: (${new Date().toLocaleTimeString()})`);
  console.log(c);
  return c;
};

const App = () => {
  const [config, setConfig] = React.useState(() => getConfig());
  const [glow, setGlow] = React.useState(isDesktop);

  const generateNewConfig = () => setConfig(getConfig());
  const toggleGlow = () => setGlow((prev) => !prev);

  React.useEffect(() => {
    setGlow(isDesktop);
  }, []);

  useHotkeys("space", generateNewConfig);

  return (
    <Main>
      <Starfield />

      <SVG viewBox={`0 0 ${svgSize} ${svgSize}`} data-glow={glow}>
        {glow && (
          <defs>
            <filter id="glow">
              <feGaussianBlur
                className="blur"
                result="coloredBlur"
                stdDeviation="6"
              />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        )}

        {config.map((orbit) => (
          <Circle {...orbit} key={orbit.r} />
        ))}
      </SVG>

      <Actions>
        <GithubLink />
        <GenerateButton onClick={generateNewConfig} />
        <SwitchGlowButton active={glow} onClick={toggleGlow} />
      </Actions>
    </Main>
  );
};

export default App;
