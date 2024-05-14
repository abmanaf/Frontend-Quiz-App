import { styled } from "styled-components";
import flex from "./Flex";
import { useQuiz } from "../context/QuizContext";

type StyledToggleThemeProp = {
  $isDarkMode: boolean;
};

const StyledToggleTheme = styled.div<StyledToggleThemeProp>`
  padding: 4px;
  border-radius: 999px;
  background: var(--cl-bg-btn-and-selection-active);
  width: 3.5rem;
  ${flex}
  justify-content: ${(props) =>
    props.$isDarkMode ? "flex-end" : "flex-start"};
  cursor: pointer;
  @media (min-width: 768px) {
    width: 5rem;
  }
`;

const StyledToggleCricle = styled.div`
  background: var(--cl-white);
  border-radius: 50%;
  width: 12px;
  height: 12px;

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

function ToggleTheme() {
  const { toggleDarkMode, isDarkMode } = useQuiz();
  return (
    <StyledToggleTheme $isDarkMode={isDarkMode} onClick={toggleDarkMode}>
      <StyledToggleCricle />
    </StyledToggleTheme>
  );
}

export default ToggleTheme;
