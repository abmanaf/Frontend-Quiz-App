import { styled } from "styled-components";
import SelectBtn from "../u_interface/SelectBtn";
import flex from "../u_interface/Flex";
import smallCon from "../u_interface/SmallCon";
import { useQuiz } from "../context/QuizContext";
import data from "../data/data.json";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

type StyledIconConProps = {
  $cl: string;
  $img: keyof ImageMappingProps;
};

type ImageMappingProps = {
  HTML: string;
  CSS: string;
  JavaScript: string;
  Accessibility: string;
};

const imageMapping = {
  HTML: "icon-html.svg",
  CSS: "icon-css.svg",
  JavaScript: "icon-js.svg",
  Accessibility: "icon-accessibility.svg",
};

const StyledQuizSelectQuiz = styled.div`
  ${flex}
  gap: 1.2rem;
  flex-direction: column;


  &:focus {
    outline: none;
    border: none;
    
  }

  @media (min-width: 768px) {
    gap: 2.4rem;
  }
  @media (min-width: 1024px) {
    width: 45%;
  }
`;

const StyledIconCon = styled.div<StyledIconConProps>`
  ${smallCon}
  background-color: ${(props) => props.$cl && `var(${props.$cl})`};
  background-image: ${(props) =>
    props.$img && `url("/${imageMapping[props.$img]}")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2.8rem;
  padding: 1.1em 1.1em;
  
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  
`;

function QuizSelectQuiz() {
  const { handleStartQuiz, handleKeyDownSelectQuiz } = useQuiz();
  const { quizzes } = data;
  const quizRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (quizRef.current) {
      quizRef.current.focus();
    }
  }, []);

  return (
    <StyledQuizSelectQuiz
      ref={quizRef}
      tabIndex={1}
      onKeyDown={(e) => handleKeyDownSelectQuiz(e, navigate)}
    >
      
      {quizzes.map((quiz) => (
        <StyledNavLink to={`/quiz/${quiz.title}/question/1`} key={quiz.title}>
          <SelectBtn
            handleClick={handleStartQuiz}
            role={`option ${quiz.title}`}
            handleKeyDown={handleStartQuiz}
          >
            <StyledIconCon
              key={quiz.title}
              $cl={`--cl-${quiz.title}`}
              $img={quiz.title as keyof ImageMappingProps}
            />

            {quiz.title}
          </SelectBtn>
        </StyledNavLink>
      ))}
    </StyledQuizSelectQuiz>
  );
}

export default QuizSelectQuiz;
