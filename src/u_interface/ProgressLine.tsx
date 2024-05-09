import { styled } from "styled-components";
import { useParams } from "react-router-dom";

type StyledProgressProps = {
  $progress: number | undefined;
};

const StyledProgressLineCon = styled.div`
  width: 100%;
  height: 16px;
  padding: 4px;
  background: var(--cl-bg-choice);
  border-radius: 999px;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const StyledProgress = styled.div<StyledProgressProps>`
  border-radius: 999px;
  height: 8px;
  width: ${(props) =>
    props.$progress ? `${(props.$progress / 10) * 100}%` : "0"};
  background: var(--cl-bg-btn-and-selection-active);
`;

function ProgressLine() {
  const { id } = useParams();
  return (
    <StyledProgressLineCon>
      <StyledProgress $progress={id ? parseInt(id, 10) : 0} />
    </StyledProgressLineCon>
  );
}

export default ProgressLine;
