import {
  MouseEventHandler,
  ReactNode,
  KeyboardEventHandler,
  forwardRef,
  ForwardedRef,
} from "react";
import { styled, css, Interpolation } from "styled-components";
import flex from "./Flex";
import selectionText from "./SelectionText";

type SelectConProps = {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  isAnswerCorrect?: boolean | undefined;
  active?: boolean | undefined;
  isAnswerIncorrect?: boolean | undefined;
  isAnsweredQuestion?: boolean | undefined;
  role?: string | undefined;
  ariaSelected?: boolean;
  handleKeyDown?: KeyboardEventHandler<HTMLButtonElement> | undefined;
  ref?: Array<HTMLButtonElement | null>;
  tabIndex?: number;
};

type AnswerProps = {
  $isAnswerCorrect?: boolean;
  $active?: boolean;
  $nextQuestion?: boolean;
  $isAnswerIncorrect?: boolean;
  $isAnsweredQuestion?: boolean;
  $ariaSelected?: boolean;
};

const StyledSelectBtn = styled.button<AnswerProps>`
  background: var(--cl-bg-choice);
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0px 16px 40px 0px var(--cl-shadow);
  ${flex}
  gap: 1.6rem;
  justify-content: flex-start;
  width: 100%;
  ${selectionText}
  text-align: left;
  border: ${(props) =>
    props.$active || props.$ariaSelected
      ? "3px solid var(--cl-bg-btn-and-selection-active)"
      : props.$isAnswerCorrect
      ? "3px solid var(--cl-selection-correct)"
      : props.$isAnswerIncorrect
      ? "3px solid var(--cl-selection-incorrect)"
      : "none"};

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    border-radius: 24px;
  }

  ${(props): Interpolation<any> =>
    !props.$active &&
    !props.$isAnswerCorrect &&
    !props.$isAnswerIncorrect &&
    !props.$isAnsweredQuestion &&
    css`
      &:hover {
        .letter-con {
          background: var(--cl-selection-hover);
          color: var(--cl-bg-btn-and-selection-active);
        }
      }
    `}

  @media (min-width: 1280px) {
    padding: 1.8rem;
  }
`;

const SelectBtn = forwardRef(
  (
    {
      children,
      handleClick,
      isAnswerCorrect,
      active,
      isAnswerIncorrect,
      isAnsweredQuestion,
      role,
      ariaSelected,
      handleKeyDown,
    }: SelectConProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <StyledSelectBtn
        onClick={handleClick}
        $isAnswerCorrect={isAnswerCorrect}
        $active={active}
        $isAnswerIncorrect={isAnswerIncorrect}
        $isAnsweredQuestion={isAnsweredQuestion}
        role={role}
        $ariaSelected={ariaSelected}
        aria-selected={ariaSelected}
        onKeyDown={handleKeyDown}
        ref={ref}
        tabIndex={0}
      >
        {children}
      </StyledSelectBtn>
    );
  }
);

export default SelectBtn;
