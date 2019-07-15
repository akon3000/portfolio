import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { menuType } from '../../constants/header'
import Portal from '../Portal'

const GlobalHeaderStyle = createGlobalStyle`
  body {
    padding-left: ${({ contentWidth }) => `${contentWidth}px`};
  }
`

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

const Header = () => {
  const [contentWidth, setContentWidth] = useState(0)
  const [activeSection, setActiveSection] = useState(menuType.home)
  const setGlobalStyle = el => {
    if (!el) return
    setContentWidth(el.clientWidth)
  }

  const handleActiveBullet = type => {
    setActiveSection(menuType[type])
    const section = document.querySelector(menuType[type])
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
   
  })

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
                  onClick={() => handleActiveBullet(type)}
                />
              ))
            }
          </Navigator>
        </Wrapper>
      </Portal>
  )
}

export default Header
