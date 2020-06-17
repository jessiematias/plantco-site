import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: Roboto, sans-serif;
}
body {
  background-color: #fafafa;
}
`

export default GlobalStyles