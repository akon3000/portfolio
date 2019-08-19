import { createGlobalStyle } from 'styled-components'
import { headerSize } from '../../constants/header'
import screen from '../screen'
import palette from '../palette'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src: url('static/fonts/icomoon/icomoon.eot?srf3rx');
    src: url('static/fonts/icomoon/icomoon.eot?srf3rx#iefix') format('embedded-opentype'),
         url('static/fonts/icomoon/icomoon.ttf?srf3rx') format('truetype'),
         url('static/fonts/icomoon/icomoon.woff?srf3rx') format('woff'),
         url('static/fonts/icomoon/icomoon.svg?srf3rx#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  body {
    color: ${palette.white};
    padding-left: ${headerSize}px;
    background-color: ${palette.black};
    font-family: 'icomoon', sans-serif;
    @media ${screen.TABLET} {
      padding-left: 0;
    }
  }

  h1, h2, h3, h4, h5, h6,
  body,
  p {
    margin: 0;
  }
`

export default GlobalStyle
