import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import screen from '../../css/screen'
import palette from '../../css/palette'
import BgImage from '../BgImage'

const HeadText = styled('h1')`
  font-size: 60px;
  @media ${screen.MOBILE_L} {
    font-size: 40px;
  }
`

const HeadSubText = styled('h3')`
  font-weight: 300;
  u {
    color: ${palette.seaPink};
  }
`

const Wrapper = styled('section')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${screen.MOBILE_L} {
    text-align: center;
    padding: 20px;
  }

  ${({ contentHeight }) => css`height: ${contentHeight}px;`}
`

const HomeSection = ({ id, bg }) => {
  const [contentHeight, setContentHeight] = useState(1080)

  useEffect(() => {
    setContentHeight(window.innerHeight)
    document.addEventListener('resize', () => setContentHeight(window.innerHeight))
  }, [])

  return (
    <Wrapper id={id} contentHeight={contentHeight}>
      <BgImage
        img={bg}
        opacity={0.5}
        isFeatherLeft
      />
      <HeadText>Tony - Portfolio</HeadText>
      <HeadSubText>I am <u>web</u> developer. Creator of platform website application.</HeadSubText>
      <HeadSubText>...</HeadSubText>
      <HeadSubText><u>Coding</u> is letting go of fear.</HeadSubText>
    </Wrapper>
  )
}

export default HomeSection
