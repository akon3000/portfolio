import { Component } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { menuType } from '../../constants/header'
import Portal from '../Portal'

const GlobalHeaderStyle = createGlobalStyle`
  body {
    padding-left: ${({ space }) => `${space}px`};
  }
`

const BulletLink = styled('a')`
  width: 15px;
  height: 15px;
  margin: 15px 0;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  ${({ isActive }) => isActive && css`
    width: 16px;
    height: 16px;
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

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      space: 0,
      active: menuType.home
    }
  }

  setGlobalStyle = el => this.setState({ space: el.clientWidth })

  handleActiveMenu = type => this.setState({ active: type })

  render() {
    return (
      <Portal>
        <GlobalHeaderStyle space={this.state.space} />
        <Wrapper ref={this.setGlobalStyle}>
          <Navigator>
            {
              Object.keys(menuType).map(type => (
                <BulletLink
                  key={type}
                  isActive={this.state.active === menuType[type]}
                  onClick={() => this.handleActiveMenu(menuType[type])}
                />
              ))
            }
          </Navigator>
        </Wrapper>
      </Portal>
    )
  }
}

export default Header
