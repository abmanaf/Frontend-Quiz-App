import {
  ForwardedRef,
  MouseEventHandler,
  ReactNode,
  forwardRef,
  KeyboardEventHandler,
} from "react";
import { styled } from "styled-components";

type ButtonProps = {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  cl?: string;
  handleKeyDown?: KeyboardEventHandler<HTMLButtonElement> | undefined;
};

type StyledButtonProps = {
  $cl?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  padding: 1.8rem;
  background: ${(props) =>
    props.$cl === "scores"
      ? "var(--cl-selection-correct)"
      : "var(--cl-bg-btn-and-selection-active)"};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 18px;
  color: var(--cl-white);
  border-radius: 12px;
  box-shadow: 0px 16px 40px 0px var(--cl-shadow);
  border: none;

  &:hover {
    background: var(--cl-bg-btn-hover);
    transition: all 0.2s ease-in-out;
  }

  @media (min-width: 768px) {
    padding: 3.2rem;
    border-radius: 24px;
    font-size: 2.8rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem;
    font-size: 1.8rem;
  }
  @media (min-width: 1028px) {
    font-size: 2.8rem;
    padding: 3.2rem;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

const Button = forwardRef(
  (
    { children, handleClick, cl, handleKeyDown }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <StyledButton
        ref={ref}
        $cl={cl}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {children}
      </StyledButton>
    );
  }
);
export default Button;
