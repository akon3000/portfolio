import styled from 'styled-components'
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

const Wrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: ${({ opacity = 1 }) => opacity};
`

const BgImage = ({
  img,
  opacity,
  colorFeather,
  isFeatherTop,
  isFeatherLeft,
  isFeatherRight,
  isFeatherBottom,
}) => (
  <Wrapper img={img} opacity={opacity}>
    {isFeatherTop && <FeatherTop color={colorFeather} />}
    {isFeatherLeft && <FeatherLeft color={colorFeather} />}
    {isFeatherRight && <FeatherRight color={colorFeather} />}
    {isFeatherBottom && <FeatherBottom color={colorFeather} />}
  </Wrapper>
)

export default BgImage
