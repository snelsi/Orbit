import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  &[data-active="true"] {
    opacity: 1;
  }
`;

interface SwitchGlowButtonProps {
  active: boolean;
  onClick: () => void;
}
const SwitchGlowButton: React.FC<SwitchGlowButtonProps> = ({
  active,
  onClick,
}) => (
  <Button onClick={onClick} aria-label="Toggle line glow" data-active={active}>
    <img src="sun.svg" alt="Sun" />
  </Button>
);

export default SwitchGlowButton;
