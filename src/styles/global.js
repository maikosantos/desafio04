import { injectGlobal } from "styled-components";

import "font-awesome/css/font-awesome.css";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
      height: 100%;
  }

  body {
    background: #FFFFFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;
