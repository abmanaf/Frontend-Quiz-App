import { styled } from "styled-components";
//import ColorTheme from "./ColorTheme";
import flex from "../u_interface/Flex";
import QuizIconName from "../u_interface/QuizIconName";
import { useParams } from "react-router-dom";

type ImageMappingProps ={
  HTML: string;
  CSS: string;
  Javascript: string;
  Accessibility: string;
}
const imageMapping: ImageMappingProps = {
  HTML: "html",
  CSS: "CSS",
  Javascript: "js",
  Accessibility: "accessibility",
}

const StyledHeader = styled.header`
  width: 100%;
  height: 7.2rem;
  ${flex}
  justify-content: space-between;
  border: 2px solid red;

  @media (min-width: 768px) {
    width: 100%;
    border: 2px solid yellow;
  }

  @media (min-width: 1024px) {
    height: 8.5rem;
    align-self: center;
    padding: 0;
  }
`;

function Header({ displayAccessibility }: { displayAccessibility: boolean }) {
  const { type } = useParams();
  
  return (
    <StyledHeader>
      {/*       <ColorTheme />
 Conditionally render QuizIconName based on displayAccessibility */}
      {displayAccessibility && (
        <QuizIconName
          name={type}
          iconName={imageMapping[type as keyof ImageMappingProps]}
          cl={`--cl-${type}`}
        />
      )}
    </StyledHeader>
  );
}

export default Header;
