import styled, { css } from 'styled-components'
import { bulletList } from '../../constants/header'
import Portal from '../Portal'

const BulletLink = styled('a')`
  width: 12px;
  height: 12px;
  margin: 15px 2px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  ${({ isActive }) => isActive && css`
    width: 16px;
    height: 16px;
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
  padding: 0 50px;
  z-index: 999999;
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
