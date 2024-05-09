import { styled } from "styled-components";
import { useEffect, useRef } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Button from "../u_interface/Button";
import flex from "../u_interface/Flex";
import Questions from "./Questions";
import Answers from "./Answers";
import data from "../data/data.json";
import { useQuiz } from "../context/QuizContext";
import Error from "./Error";
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
    margin-bottom: 2.5em;
  }
  @media (min-width: 501px) and (max-width: 767px) {
    margin-top: 4em;
    margin-bottom: 2em;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 4em;
    margin-bottom: 3em;

  }
`;

const StyledQuizQuestionsAnswers = styled.div`
  ${flex}
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 500px)  {
    gap: 1.5rem;
  }

  @media (min-width: 501px) and (max-width: 767px) {
    gap: 3.2rem;
  }
  @media (min-width:768px) and (max-width: 1023px) {
    gap: 3.2rem;
  }
  @media (min-width:1024px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    height: auto;
  }
`;

const StyledBtnCon = styled.div`
  width: 100%;
  grid-column: 2/3;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
`;

function QuizQuestionsAnswers() {
  const {
    checkAnswer,
    nextQuestion,
    handleNextQuestion,
    qNumber,
    error,
    keyNextBtn,
    handleKeyResults,
  } = useQuiz();

  const { type, id } = useParams();
  const { quizzes } = data;
  const currentQuiz = quizzes.find((q) => q.title === type);
  const questions = currentQuiz?.questions[id ? Number(id) - 1 : 0];
  const question = questions?.question;
  const answers = questions?.options;
  const correctAnswer = questions?.answer;
  const idNum = Number(id) - 1 ? Number(id) - 1 : 0;
  const isAnsweredQuestion = nextQuestion.includes(idNum);
  const nav = useNavigate();

  const btnNextRef = useRef<HTMLButtonElement>(null);
  const btnCheckScoretRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnNextRef.current && isAnsweredQuestion) {
      btnNextRef.current.focus();
    } else if (btnCheckScoretRef.current) {
      btnCheckScoretRef.current.focus();
    }
  }, [isAnsweredQuestion, id]);

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
      <StyledQuizQuestionsAnswers>
        <Questions question={question} id={id} />
        <Answers
          answers={answers}
          correctAnswer={correctAnswer}
          id={idNum}
          isAnsweredQuestion={isAnsweredQuestion}
        />
        <StyledBtnCon>
          {!isAnsweredQuestion ? (
            <Button handleClick={() => checkAnswer(correctAnswer, idNum)}>
              Submit Answer
            </Button>
          ) : Number(id) < 10 ? (
            <StyledNavLink to={`/quiz/${type}/question/${qNumber}`}>
              <Button
                ref={btnNextRef}
                handleClick={() => handleNextQuestion()}
                handleKeyDown={(e) => keyNextBtn(e, nav, type)}
              >
                Next Question
              </Button>
            </StyledNavLink>
          ) : (
            <StyledNavLink to={`/quiz/${type}/results`}>
              <Button
                ref={btnCheckScoretRef}
                handleKeyDown={(e) => handleKeyResults(e, type, nav)}
              >
                View Score
              </Button>
            </StyledNavLink>
          )}
        </StyledBtnCon>
        {error && <Error />}
      </StyledQuizQuestionsAnswers>
    </div>
  );
}

export default QuizQuestionsAnswers;
