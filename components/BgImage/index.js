import styled, { css } from 'styled-components'

const BgImage = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: ${({ opacity = 1 }) => opacity};
  ${({ featherColor }) => featherColor && css`
    box-shadow: 50px 50px 100px 0 ${featherColor} inset,
                -50px -50px 100px 0 ${featherColor} inset; 
  `}
`

export default BgImage
