import { Interpolation, styled } from "styled-components";
import { useEffect, useRef } from "react";
import flex from "../u_interface/Flex";
import SelectBtn from "../u_interface/SelectBtn";
import selectionText from "../u_interface/SelectionText";
import smallCon from "../u_interface/SmallCon";
import { useQuiz } from "../context/QuizContext";
import Paragraph from "../u_interface/Paragraph";

type AnswersProps = {
  answers?: string[] | undefined;
  correctAnswer: string | undefined;
  id: number;
  isAnsweredQuestion: boolean;
};
type StyledCheckedAnswerProps = {
  $isAnswerCorrect: boolean;
  $isAnswerIncorrect: boolean;
  $active?: boolean;
};

const StyledAnswers = styled.div`
  ${flex}
  flex-direction: column;
  width: 100%;
  gap: 1.2rem;

  @media (min-width: 768px) {
    gap: 2.4rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
  }

  @media (min-width: 1280px) {
    gap: 2.4rem;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const StyledLetterCon = styled.div<StyledCheckedAnswerProps>`
${smallCon}
background: ${(props) =>
  props.$active
    ? "var(--cl-bg-btn-and-selection-active)"
    : props.$isAnswerCorrect
    ? "var(--cl-selection-correct)"
    : props.$isAnswerIncorrect
    ? "var(--cl-selection-incorrect)"
    : "var(--cl-bg-letter)"};
${flex}
${selectionText}
color: ${(props): Interpolation<any> =>
  props.$active || props.$isAnswerCorrect || props.$isAnswerIncorrect
    ? "var(--cl-white)"
    : "#7D8596"}; /* Change the color to green */
`;


const StyledLetterAnswerCon = styled.div`
  ${flex}
  gap: 1.6rem;
  width: 100%;
  justify-content: flex-start;

  @media (min-width: 768px) {
    gap: 3.2rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
  }
  @media (min-width: 1280px) {
    gap: 3.2rem;
  }
`;

const StyledInnerCon = styled(StyledLetterAnswerCon)`
  justify-content: space-between;
`;

const StyledCheckedAnswer = styled.div<StyledCheckedAnswerProps>`
  width: 3.2rem;
  height: 3.2rem;
  background: ${(props) =>
      props.$isAnswerCorrect
        ? 'url("/icon-correct.svg")'
        : props.$isAnswerIncorrect
        ? 'url("/icon-incorrect.svg")'
        : ""}
    no-repeat center;
  background-size: 3rem;

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    background-size: 3.5rem;
  }
`;

function Answers({
  answers,
  correctAnswer,
  id,
  isAnsweredQuestion,
}: AnswersProps) {
  const { handleAnswer, answerPicked, allAnswers, handleSelectAnswer } =
    useQuiz();
  const answerRefs = useRef<(HTMLButtonElement | null)[]>(
    new Array(answers?.length).fill(null)
  );

  const letters = ["A", "B", "C", "D"];


  useEffect(() => {
    answerRefs.current[0]?.focus();
  }, [id]);

  if (!answers || !correctAnswer) {
    return <Paragraph>Answer not found</Paragraph>;
  }

  return (
    <StyledAnswers>
      {answers.map((answer, index) => {
        const isAnswerCorrect =
          isAnsweredQuestion &&
          answer === allAnswers[id] &&
          allAnswers[id] === correctAnswer;
        const isAnswerIncorrect =
          isAnsweredQuestion &&
          answer === allAnswers[id] &&
          allAnswers[id] !== correctAnswer;
        const isActive = !isAnsweredQuestion && answer === answerPicked;

        return (
          <SelectBtn
            ref={(ref) => (answerRefs.current[index] = ref)}
            key={answer}
            handleClick={() => handleAnswer(answer, id)}
            isAnswerCorrect={isAnswerCorrect}
            isAnswerIncorrect={isAnswerIncorrect}
            active={isActive}
            isAnsweredQuestion={isAnsweredQuestion}
            handleKeyDown={(e) =>
              handleSelectAnswer(
                e,
                answer,
                id,
                index,
                answers,
                answerRefs,
                correctAnswer
              )
            }
          >
            <StyledInnerCon>
              <StyledLetterAnswerCon>
                <StyledLetterCon
                  $isAnswerCorrect={isAnswerCorrect}
                  $isAnswerIncorrect={isAnswerIncorrect}
                  $active={isActive}
                  className="letter-con"
                >
                  {letters[index]}
                </StyledLetterCon>
                {answer}
              </StyledLetterAnswerCon>
              <StyledCheckedAnswer
                $isAnswerCorrect={
                  isAnsweredQuestion && answer === correctAnswer
                }
                $isAnswerIncorrect={isAnswerIncorrect}
              />
            </StyledInnerCon>
          </SelectBtn>
        );
      })}
    </StyledAnswers>
  );
}

export default Answers;
