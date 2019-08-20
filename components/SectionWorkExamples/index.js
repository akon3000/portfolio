import React, { useEffect } from 'react'
import styled from 'styled-components'
import screen from '../../css/screen'
import BgImage from '../BgImage'

const Wrapper = styled('section')`
  position: relative;
  padding: 100px;

  #images-work {
    margin-bottom: 150px;
  }

  @media ${screen.MOBILE_L} {
    padding: 20px;
  }
`

const WorkExampleSection = ({ id, bg, workExamples }) => {

  useEffect(() => {
    jQuery('#images-work').nanogallery2(workExamples)
  })

  return (
    <Wrapper id={id}>
      <BgImage
        img={bg}
        opacity={0.6}
        isFeatherTop
        isFeatherLeft
      />
      <div id='images-work' />
    </Wrapper>
  )
}

export default WorkExampleSection
