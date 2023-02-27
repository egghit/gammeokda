import { createGlobalStyle } from 'styled-components';

import background from '@/assets/background.png';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: 'DNFBitBitTTF';
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    position: relative;
    max-width: 400px;
    margin: 0 auto;
    min-height: 100vh;
    padding: 0;
  }

  ol, ul {
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
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  * {
      box-sizing: border-box;
  }

  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  @font-face {
    font-family: 'DNFBitBitTTF';
    src: url('/fonts/DNFBitBitTTF.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body, * {
    font-family: 'DNFBitBitTTF';
  }

  body {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    background-image: url(${background});
    background-size: 100% 100%;
  }
`;

export default GlobalStyles;
