import styled, { css } from 'styled-components'
import { bulletList, bulletSize, paddingLeftRight } from '../../constants/header'
import Portal from '../Portal'

const BulletLink = styled('a')`
  width: ${bulletSize - 4}px;
  height: ${bulletSize - 4}px;
  margin: 15px 2px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  ${({ isActive }) => isActive && css`
    width: ${bulletSize}px;
    height: ${bulletSize}px;
    border: 0;
    margin: 15px 0;
    background-color: #FFF;
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
  padding: 0 ${paddingLeftRight}px;
`

const Header = ({ activeSection, onSelectBullet }) => (
  <Portal>
    <Wrapper>
      <Navigator>
        {
          Object.keys(bulletList).map(type => (
            <BulletLink
              key={type}
              onClick={() => onSelectBullet(type)}
              isActive={activeSection === bulletList[type]}
            />
          ))
        }
      </Navigator>
    </Wrapper>
  </Portal>
)

export default Header
