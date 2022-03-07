import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
  }
  body {
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;

export default GlobalStyle;
