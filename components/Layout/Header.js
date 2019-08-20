import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { bulletList, bulletSize, paddingLeft, paddingRight } from '../../constants/header'
import screen from '../../css/screen'
import palette from '../../css/palette'
import Portal from '../Portal'

const BulletLink = styled('a')`
  width: ${bulletSize - 4}px;
  height: ${bulletSize - 4}px;
  margin: 15px 2px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${rgba(palette.white, 0.2)};
  ${({ isActive }) => isActive && css`
    width: ${bulletSize}px;
    height: ${bulletSize}px;
    border: 0;
    margin: 15px 0;
    background-color: ${palette.white};
  `}
`

const Navigator = styled('nav')`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Wrapper = styled('header')`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  padding: 0 ${paddingRight}px 0 ${paddingLeft}px;

  @media ${screen.TABLET} {
    display: none;
  }

`

const Header = ({ activeSection, onSelectBullet }) => (
  <Portal>
    <Wrapper>
      <Navigator>
        {
          Object.keys(bulletList).map(type => (
            <BulletLink
              key={type}
              isActive={activeSection === type}
              onClick={() => onSelectBullet(type)}
            />
          ))
        }
      </Navigator>
    </Wrapper>
  </Portal>
)

export default Header
