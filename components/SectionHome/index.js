import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

const SectionHome = styled('section')`
  background-color: red;
  ${({ contentHeight = 0 }) => css`height: ${contentHeight}px;`}
`

const HomeSection = () => {
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    setContentHeight(window.innerHeight)
  })

  return (
    <SectionHome contentHeight={contentHeight}>
      Test
    </SectionHome>
  )
}

export default HomeSection
