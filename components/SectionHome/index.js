import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import BgImage from '../BgImage'

const HeadText = styled('h1')`
  font-size: 60px;
`

const HeadSubText = styled('h3')`
  font-weight: 300;
`

const Wrapper = styled('section')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ contentHeight }) => css`height: ${contentHeight}px;`}
`

const HomeSection = ({ id, urlBgHome }) => {
  const [contentHeight, setContentHeight] = useState(1080)

  useEffect(() => {
    setContentHeight(window.innerHeight)
    document.addEventListener('resize', () => setContentHeight(window.innerHeight))
  })

  return (
    <Wrapper id={id} contentHeight={contentHeight}>
      <BgImage
        opacity={0.5}
        src={urlBgHome}
        featherColor='#000'
      />
      <HeadText>Tony - Portfolio</HeadText>
      <HeadSubText>I am <u>Front-End</u> developer. Currently i'm working with NodeJs,React (Main)</HeadSubText>
      <HeadSubText>...</HeadSubText>
      <HeadSubText>But for <u>Back-End</u> & <u>Dev-ops</u> i can do some framework.</HeadSubText>
    </Wrapper>
  )
}

export default HomeSection
