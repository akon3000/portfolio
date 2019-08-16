import React, { useEffect } from 'react'
import styled from 'styled-components'
import BgImage from '../BgImage'

const Wrapper = styled('section')`
  position: relative;
  padding: 100px;
`

const ContactSection = ({ id, bg, workExamples }) => {

  useEffect(() => jQuery('#images-work').nanogallery2(workExamples), [])

  return (
    <Wrapper id={id}>
      <BgImage
        img={bg}
        opacity={0.6}
        isFeatherTop
        isFeatherLeft
        isFeatherRight
      />
      <div id='images-work' />
    </Wrapper>
  )
}

export default ContactSection
