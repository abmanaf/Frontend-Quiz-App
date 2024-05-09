import { createGlobalStyle } from "styled-components";

const MainStyle = createGlobalStyle`
:root {

//shared
--cl-bg-btn-and-selection-active: #A729F5;
--cl-bg-btn-hover: rgba(167, 41, 245, 0.5);
--cl-selection: #F4F6FA;
--cl-selection-hover: #F6E7FF;
--cl-selection-text: #626C7F;
--cl-selection-correct: #26D782;
--cl-selection-incorrect: #EE5454;
--cl-white: #FFF;
--cl-HTML: #FFF1E9;
--cl-CSS: #E0FDEF;
--cl-JavaScript: #EBF0FF;
--cl-Accessibility: #F6E7FF;
--cl-bg-letter: #F4F6FA;
--cl-txt-letter: #313E51;




//light-mode
&,&.light-mode{
--cl-bg-main: #F4F6FA;
--cl-bg-choice: #FFF;
--cl-txt-main: #313E51;
--cl-txt-sub: #626C7F;
--cl-svg-fill:#626C7F; 
--cl-shadow: rgba(143, 160, 193, 0.18);
}

//dark-mode:
&.dark-mode{
--cl-bg-main: #313E51;
--cl-bg-choice: #3B4D66;
--cl-txt-main: #FFF;
--cl-txt-sub: #ABC1E1;
--cl-svg-fill:#FFF;  
--cl-shadow: rgba(49, 62, 81, 0.18);
}



--color-neutral-white: hsl(0, 0%, 100%);
--color-neutral-off-white: hsl(0, 0%, 94%);
--color-neutral-light-gray: hsl(0, 0%, 86%);
--color-neutral-smokey-gray: hsl(0, 1%, 44%);
--color-neutral-off-black: hsl(0, 0%, 8%);

 
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
   font-size: 62.5%;
}

/* Remove default margin in favour of better control in authored CSS */
body, h1, h2, h3, h4, h5, h6, p,
figure, blockquote, dl, dd {
  margin-block-end: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
  font-family: "Rubik", sans-serif;


}
/* Remove list styles on ul, ol elements */
ul,
ol{
  list-style: none;
}



/* Set shorter line heights on headings and interactive elements */
h1, h2, h3, h4, h5, h6
button, input, label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1, h2,
h3, h4, h5, h6 {
  /* text-wrap: balance; - not yet supporeted on some browsers */
overflow-wrap: break-word;
 hyphens: auto;
}


/* Make images easier to work with */
img,
picture {
  max-width: 100%;

}

/* Inherit fonts for inputs and buttons */
input, button,
textarea, select {
  font: inherit;
  color: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: gray;
  color: black;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid lightgray;
  outline-offset: -1px;
}

// remove the default arrows (spinner controls) from number inputs 
/* For Chrome, Safari, and newer versions of Edge */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* For Firefox */
/* input[type="number"] {
  -moz-appearance: textfield;
} */


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

:-webkit-any(article, aside, nav, section) h1 {
   
    margin-block-start: 0;
    margin-block-end: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; 
  border: 0;
}

`;
export default MainStyle;
