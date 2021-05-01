import { getRandomConfig } from "helpers";
import Circle from "components/Circle";
import Main from "components/Main";
import SVG from "components/Svg";

const svgSize = 1000;

const config = getRandomConfig(svgSize);

const App = () => (
  <Main>
    <SVG viewBox={`0 0 ${svgSize} ${svgSize}`}>
      <g>
        {config.map(({ id, ...props }) => (
          <Circle {...props} key={id} />
        ))}
      </g>
    </SVG>
  </Main>
);

export default App;
