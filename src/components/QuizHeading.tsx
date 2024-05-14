import { styled } from "styled-components";
import Headings from "../u_interface/Headings";
import flex from "../u_interface/Flex";
import Paragraph from "../u_interface/Paragraph";

interface QuizStartHeadingProps {
  element: "h1" | "h2" | "h3";
  spanText: string;
  text: string;
  isParagraph: boolean;
  pText?: string;
}

const StyledQuizStartHeading = styled.div`
  ${flex}
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;

  @media (min-width: 1024px) {
    width: 55%;
  }
  @media (min-width: 1280px) {
    width: 50%;

  }
`;

const StyledSpan = styled.span`
  font-weight: 300;
  display: block;
`;

function QuizStartHeading({
  element,
  spanText,
  text,
  isParagraph,
  pText,
}: QuizStartHeadingProps) {
  return (
    <StyledQuizStartHeading>
      <Headings as={element}>
        <StyledSpan>{spanText}</StyledSpan> {text}
      </Headings>
      {isParagraph && <Paragraph $size="small">{pText}</Paragraph>}
    </StyledQuizStartHeading>
  );
}

export default QuizStartHeading;
