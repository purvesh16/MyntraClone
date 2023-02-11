import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}
html {
 scroll-behavior: smooth; 
  /* 1rem = 10px */
  overflow-x: hidden;
}


a {
  text-decoration: none;
}

li {
  list-style: none;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}
`;
