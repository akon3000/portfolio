import { createGlobalStyle } from 'styled-components'
import { headerSize } from '../../constants/header'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src: url('static/fonts/icomoon/icomoon.eot?srf3rx');
    src: url('static/fonts/icomoon/icomoon.eot?srf3rx#iefix') format("embedded-opentype"), url('static/fonts/icomoon/icomoon.ttf?srf3rx') format("truetype"), url('static/fonts/icomoon/icomoon.woff?srf3rx') format("woff"), url('static/fonts/icomoon/icomoon.svg?srf3rx#icomoon') format("svg");
    font-weight: normal;
    font-style: normal;
  }

  body {
    color: #FFF;
    background-color: #000;
    padding-left: ${headerSize}px;
    font-family: 'icomoon', sans-serif;
  }

  h1, h2, h3, h4, h5, h6,
  body,
  p {
    margin: 0;
  }

  .text-pink {
    color: #EC9191;
  }
`

export default GlobalStyle
