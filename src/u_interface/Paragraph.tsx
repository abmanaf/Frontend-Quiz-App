import { styled, css } from "styled-components";

type ParagraphProps = {
  $size?: "small" | "medium" | "large";
  $cl?: string;
};

const Paragraph = styled.p<ParagraphProps>`
  font-size: 2rem;
  line-height: 24px;
  color: var(--cl-txt-main);
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 3.6rem;
    line-height: 43.2px;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1.2;
  }
  @media (min-width: 1280px) {
    font-size: 3.6rem;
    line-height: 43.2px;
  }

  ${(props) =>
    props.$size === "small" &&
    css`
      font-size: 1.4rem;
      color: var(--cl-txt-sub);
      font-style: italic;
      font-weight: 400;
      line-height: 21px;
      @media (min-width: 768px) {
        font-size: 2rem;
        line-height: 30px;
      }
    `}

  ${(props) =>
    props.$size === "medium" &&
    css`
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 18px;
      color: ${props.$cl === "error"
        ? "var(--cl-selection-incorrect)"
        : "var(--cl-txt-sub)"};
      @media (min-width: 768px) {
        line-height: 36px;
        font-size: 2.4rem;
      }
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      font-size: 8.8rem;
      line-height: 88px;
      @media (min-width: 768px) {
        font-size: 14.4rem;
        line-height: 144px;
      }
    `}
`;

export default Paragraph;
