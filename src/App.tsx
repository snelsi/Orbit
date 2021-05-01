import { getRandomConfig } from "helpers";
import Circle from "components/Circle";
import Main from "components/Main";
import SVG from "components/Svg";

const svgSize = 1000;

const config = getRandomConfig(svgSize);

const App = () => (
  <Main>
    <SVG viewBox={`0 0 ${svgSize} ${svgSize}`}>
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

      {config.map(({ id, ...props }) => (
        <Circle {...props} key={id} />
      ))}
    </SVG>
  </Main>
);

export default App;
