import { css } from "styled-components";

const smallCon = css`
  min-width: 4rem;
  height: 4rem;
  border-radius: 8px;

  @media (min-width: 768px) {
    min-width: 5.6rem;
    height: 5.6rem;
  }
`;

export default smallCon;
