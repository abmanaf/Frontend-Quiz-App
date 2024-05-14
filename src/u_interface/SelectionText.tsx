import { css } from "styled-components";

const selectionText = css`
  font-size: 1.8rem;
  color: var(--cl-txt-main);
  font-weight: 500;
  line-height: 18px;

  @media (min-width: 768px) {
    font-size: 2.8rem;
    line-height: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  @media (min-width: 1280px) {
    font-size: 2.8rem;
    line-height: 28px;
  }
`;

export default selectionText;
