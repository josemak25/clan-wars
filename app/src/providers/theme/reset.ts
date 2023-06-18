import { Platform } from "react-native";
import { css } from "styled-components";

const createGlobalStyle = Platform.select({
  web: require("styled-components").createGlobalStyle,
  default: () => null,
});

// prettier-ignore
export const reset = css`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  border: 0;
  padding: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
a {
  text-decoration: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
`

const GlobalStyle = createGlobalStyle`${reset}

  @media (orientation: landscape) {
      ::-webkit-scrollbar {
        width: 8px;
        transition: background 350ms ease 0s;
        background-color: ${(p: any) => p.theme.palette.transparent};
      }

      ::-webkit-scrollbar-track {
        transition: background 350ms ease 0s;
        background-color: transparent;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 350ms ease 0s;
        border-radius: 5px;
        background-color: ${(p: any) =>
          p.theme.hexToRGB(p.theme.palette.text, 0.4)};
      }
  }


  html, 
  body, 
  #root{
    isolation: isolate;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${(p: any) => p.theme.palette.background};


    input:focus,
    select:focus,
    button:focus,
    textarea:focus,
    input[type=button]:focus,
    input.form-control:focus {
      box-shadow: none;
      -moz-box-shadow: none;
      outline:none !important;
      -webkit-box-shadow: none;
      outline-width: 0 !important;
    }

    /* Change autocomplete styles in WebKit */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
      box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      -webkit-text-fill-color: ${(p: any) => p.theme.palette.text};
    }
  }
`;

export default Platform.select({ web: GlobalStyle, default: () => null });
