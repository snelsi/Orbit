import * as React from "react";

interface GenerateButtonProps {
  onClick: () => void;
}
const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => (
  <button onClick={onClick} aria-label="Generate new orbits">
    <img src="refresh.svg" alt="Refresh" />
  </button>
);

export default GenerateButton;
