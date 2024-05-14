import { styled } from "styled-components";
import flex from "../u_interface/Flex";
import QuizHeading from "./QuizHeading";
import QuizSelectQuiz from "./QuizSelectQuiz";
import ColorTheme from "./ColorTheme";

const StyledTheme = styled.div`
  

  @media (max-width: 500px) {
    margin-top: 2em; /* Changed marginTop to marginTop */
    margin-bottom: 5em;

  }
  @media (min-width: 501px) and (max-width: 767px) {
    margin-top: 4em; /* Changed marginTop to marginTop */
    margin-bottom: 3em;

  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 4em; /* Changed marginTop to marginTop */
    margin-bottom: 5em;



  }
`;

const StyledQuizStart = styled.div`
  flex-direction: column;
  ${flex}
  align-items: normal;
  gap: 4rem;
  @media (min-width: 768px) {
    height: 100vh;

  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
  }
`;

function QuizStart() {
  return (
    <div>
      <StyledTheme>
        <ColorTheme/>
    </StyledTheme>
    <StyledQuizStart>
      <QuizHeading
        element="h1"
        spanText="Welcome to the"
        text="Frontend Quiz!"
        isParagraph={true}
        pText="Pick a subject to get started."
      />
      
      <QuizSelectQuiz />
    </StyledQuizStart>
    </div>
  );
}

export default QuizStart;
