import { styled } from "styled-components";
import Quiz from "./Quiz";
import flex from "../u_interface/Flex";



const StyledMain = styled.div`
  width: 90%;
  ${flex}
  flex-direction: column;
  max-width: 1160px;
  justify-content: end;

  @media (min-width: 768px) {
    width: 85%;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: auto auto;
    justify-content: stretch;
    min-height: 100vh;
    align-items: start;
  }
`;

function Main() {
  return (
    <StyledMain>
      <Quiz />
    </StyledMain>
  );
}

export default Main;
