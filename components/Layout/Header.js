import React, { useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { menuType } from '../../constants/header'
import Portal from '../Portal'

const GlobalHeaderStyle = createGlobalStyle`
  body {
    padding-left: ${({ contentWidth }) => `${contentWidth}px`};
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

const Header = () => {
  const [contentWidth, setContentWidth] = useState(0)
  const [activeSection, setActiveSection] = useState(menuType.home)
  const setGlobalStyle = el => {
    if (!el) return
    setContentWidth(el.clientWidth)
  }

  return (
    <Portal>
        <GlobalHeaderStyle contentWidth={contentWidth} />
        <Wrapper ref={setGlobalStyle}>
          <Navigator>
            {
              Object.keys(menuType).map(type => (
                <BulletLink
                  key={type}
                  isActive={activeSection === menuType[type]}
                  onClick={() => setActiveSection(menuType[type])}
                />
              ))
            }
          </Navigator>
        </Wrapper>
      </Portal>
  )
}

export default Header
