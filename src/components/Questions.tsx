import { styled } from "styled-components";
import flex from "../u_interface/Flex";
import Paragraph from "../u_interface/Paragraph";
import ProgressLine from "../u_interface/ProgressLine";

type QuestionsProps = {
  id: string | undefined;
  question: string | undefined;
};


const StyledQuestions = styled.div`
  ${flex}
  flex-direction: column;
  gap: 2.8rem;
  width: 100%;
  @media (min-width: 1024px) {
    height: 100%;
    justify-content: space-between;
  }
`;

const StyledTextCon = styled.div`
  ${flex}
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  width: 100%;
`;

function Questions({ id, question }: QuestionsProps) {
  if (!question || !id) {
    return <Paragraph>Quiz not found</Paragraph>;
  }

  return (
    <StyledQuestions>
      <StyledTextCon>
        <Paragraph $size="small">Question {id} of 10</Paragraph>
        <Paragraph>{question}</Paragraph>
      </StyledTextCon>
      <ProgressLine />
    </StyledQuestions>
  );
}

export default Questions;
