import styled from "styled-components";

const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 2;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    right: 20px;
    left: 20px;
    bottom: 20px;
    top: unset;
    flex-direction: row;

    & > *:not(:last-child) {
      margin-bottom: 0;
      margin-right: 16px;
    }
  }

  & > a,
  & > button {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    opacity: 0.5;
    transition: opacity 0.2s ease;
    width: 28px;
    height: 28px;

    & > img {
      width: 24px;
      height: 24px;
    }

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`;

export default Actions;
