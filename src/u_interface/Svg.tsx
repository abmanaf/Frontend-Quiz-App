import { styled } from "styled-components";

type SvgProps = {
  width: string;
  height: string;
  viewBox: string;
  fill: string;
  d: string;
};

const StyledSvg = styled.svg`
  path {
    fill: ${(props) => `${props.fill}`};
  }
`;

function Svg({ width, height, viewBox, fill, d }: SvgProps) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <path fill={fill} d={d} />
    </StyledSvg>
  );
}

export default Svg;
