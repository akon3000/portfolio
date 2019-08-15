import styled, { css } from 'styled-components'
import palette from '../../css/palette'

const Feather = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

const FeatherLeft = styled(Feather)`
  box-shadow: inset 50px 0 25px -25px ${({ color = palette.black }) => color};
`

const FeatherRight = styled(Feather)`
  box-shadow: inset -50px 0 25px -25px ${({ color = palette.black }) => color};
`

const FeatherTop = styled(Feather)`
  box-shadow: inset 0 50px 25px -25px ${({ color = palette.black }) => color};
`

const FeatherBottom = styled(Feather)`
  box-shadow: inset 0 -50px 25px -25px ${({ color = palette.black }) => color};
`

const ImageBottom = styled('img')`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: auto;
`

const Wrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: ${palette.bunker};
  opacity: ${({ opacity = 1 }) => opacity};
  ${({ img, bgPosition = 'center center' }) => img && css`
    background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: ${bgPosition};
  `};
`

const BgImage = ({
  img,
  opacity,
  bgPosition,
  colorFeather,
  isFeatherTop,
  isFeatherLeft,
  isFeatherRight,
  isFeatherBottom,
}) => (
  <Wrapper img={img} opacity={opacity} bgPosition={bgPosition}>
    {isFeatherTop && <FeatherTop color={colorFeather} />}
    {isFeatherLeft && <FeatherLeft color={colorFeather} />}
    {isFeatherRight && <FeatherRight color={colorFeather} />}
    {isFeatherBottom
      ? <FeatherBottom color={colorFeather} />
      : <ImageBottom src='/static/image/cover-bg-image.png' />
    }
  </Wrapper>
)

export default BgImage
