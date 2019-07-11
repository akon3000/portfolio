import { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Portal from '../Portal'

const GlobalHeaderStyle = createGlobalStyle`
  body {
    padding-top: ${({ height }) => `${height}px`};
  }
`

const Wrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }

  setGlobalStyle = el => this.setState({ height: el.clientHeight })

  render() {
    return (
      <Portal>
        <GlobalHeaderStyle height={this.state.height} />
        <Wrapper ref={this.setGlobalStyle}>
          Headers
        </Wrapper>
      </Portal>
    )
  }
}

export default Header
