import { styled } from "styled-components";
import Main from "./Main";
import flex from "../u_interface/Flex";
import { useQuiz } from "../context/QuizContext";

type StyledConMainProps = {
  $isDarkMode: boolean;
};

const StyledConMain = styled.div<StyledConMainProps>`
  min-height: 100vh;
  width: 100%;
  background: ${(props) =>
    `var(--cl-bg-main) ${
      props.$isDarkMode
        ? "url('pattern-background-mobile-dark.svg')"
        : "url('pattern-background-mobile-light.svg')"
    } no-repeat center`};

  ${flex}
  align-items: flex-start;

  @media (min-width: 501px) {
    background: ${(props) =>
      `var(--cl-bg-main) ${
        props.$isDarkMode
          ? "url('pattern-background-tablet-dark.svg')"
          : "url('pattern-background-tablet-light.svg')"
      } no-repeat left top`};
  }
  @media (min-width: 1024px) {
    background: ${(props) =>
      `var(--cl-bg-main) ${
        props.$isDarkMode
          ? "url('pattern-background-desktop-dark.svg')"
          : "url('pattern-background-desktop-light.svg')"
      } no-repeat left top`};
    background-size: cover;
  }
`;

function MainContainer() {
  const { isDarkMode } = useQuiz();
  //const displayAccessibility = true; // Set displayAccessibility as needed

  return (
    <StyledConMain $isDarkMode={isDarkMode}>
      <Main /> {/* Pass displayAccessibility prop */}
    </StyledConMain>
  );
}

export default MainContainer;
