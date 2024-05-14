import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import flex from "../u_interface/Flex";
import QuizHeading from "./QuizHeading";
import FinalScore from "./FinalScore";
import Button from "../u_interface/Button";
import { useQuiz } from "../context/QuizContext";
import { useEffect, useRef } from "react";
import ColorTheme from "./ColorTheme";
import QuizIconName from "../u_interface/QuizIconName";



type ImageMappingProps = {
  HTML: string;
  CSS: string;
  JavaScript: string;
  Accessibility: string;
};

const imageMapping: ImageMappingProps = {
  HTML: "html",
  CSS: "css",
  JavaScript: "js",
  Accessibility: "accessibility",
};

const ColorStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7em;
  margin-bottom: 7em;

  @media (max-width: 500px) {
    margin-top: 2em;
    margin-bottom: 3em;
  }
  @media (min-width: 501px) and (max-width: 767px) {
    margin-top: 4em;
    margin-bottom: 4em;

  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 4em;
    margin-bottom: 4em;

  }
`;
const StyledResults = styled.div`
  ${flex}
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  align-items: flex-start;
   
  @media (min-width: 1024px) {
    flex-direction: row;
    height: auto;
  }
`;
const StyledCon = styled.div`
  width: 100%;
  ${flex}
  flex-direction:column;
  gap: 2rem;

  @media (min-width: 768px) and (max-width: 1023px){
    gap: 3.2rem;
  }

  @media (min-width: 1024px) {
    width: 45%;

  }
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
`;

function ResultsPage() {
  const { handlePlayAgain, handleKeyPlayAgain } = useQuiz();
  const btnPlayAgain = useRef<HTMLButtonElement>(null);
  const nav = useNavigate();
  const { type } = useParams();


  useEffect(() => {
    if (btnPlayAgain.current) {
      btnPlayAgain.current.focus();
    }
  }, []);

  return (
    <div>
    <ColorStyled>
    <QuizIconName
        name={type}
        iconName={imageMapping[type as keyof ImageMappingProps]}
        cl={`--cl-${type}`}
      />
        <ColorTheme />
      </ColorStyled>
    <StyledResults>
      <QuizHeading
        element="h3"
        spanText="Quiz completed"
        text="You scored..."
        isParagraph={false}
      />
      <StyledCon>
        
        <FinalScore />
        <StyledNavLink to="/">
          <Button
            ref={btnPlayAgain}
            handleClick={handlePlayAgain}
            handleKeyDown={(e) => handleKeyPlayAgain(e, nav)}
          >
            Play Again
          </Button>
        </StyledNavLink>
      </StyledCon>
    </StyledResults>
    </div>
  );
}

export default ResultsPage;
