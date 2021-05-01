import styled from "styled-components";

const Main = styled.main`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  & svg {
    --size: min(80vw, 80vh);
    height: var(--size);
    width: var(--size);
  }
`;

export default Main;
