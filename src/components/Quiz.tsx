import { styled } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "../Router/Router";

const StyledQuiz = styled.main`
  width: 100%;

`;

function Quiz() {
  return (
    <StyledQuiz>
      <RouterProvider router={router} />
    </StyledQuiz>
  );
}

export default Quiz;
