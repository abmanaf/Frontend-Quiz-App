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
        ? "url('/assets/images/pattern-background-mobile-dark.svg')"
        : "url('/assets/images/pattern-background-mobile-light.svg')"
    } no-repeat center`};

  ${flex}
  align-items: flex-start;

  @media (min-width: 501px) {
    background: ${(props) =>
      `var(--cl-bg-main) ${
        props.$isDarkMode
          ? "url('/assets/images/pattern-background-tablet-dark.svg')"
          : "url('/assets/images/pattern-background-tablet-light.svg')"
      } no-repeat left top`};
  }
  @media (min-width: 1024px) {
    background: ${(props) =>
      `var(--cl-bg-main) ${
        props.$isDarkMode
          ? "url('/assets/images/pattern-background-desktop-dark.svg')"
          : "url('/assets/images/pattern-background-desktop-light.svg')"
      } no-repeat left top`};
    background-size: cover;
  }
`;

function MainContainer() {
  const { isDarkMode } = useQuiz();

  return (
    <StyledConMain $isDarkMode={isDarkMode}>
      <Main /> 
    </StyledConMain>
  );
}

export default MainContainer;
