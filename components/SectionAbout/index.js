import styled from 'styled-components'

const TonyImage = styled('img')`
  width: 100%;
  height: auto;
  opacity: 0.7;
  border-radius: 20px;
  
`

const ContentLeft = styled('div')`
  width: 40%;
  border-radius: 20px;
  box-shadow: 10px 10px 20px 0 #000, -10px -10px 20px 0 #000;
`

const Wrapper = styled('section')`
  background-color: #0E1415;
  padding: 100px;
  display: flex;
  box-shadow: 50px 50px 50px 0 #000 inset,
                -50px -50px 50px 0 #000 inset;
`

const AboutSection = () => (
  <Wrapper id='about'>
    <ContentLeft>
      <TonyImage src='/static/image/section-about-tony.jpg' />
    </ContentLeft>
  </Wrapper>
)

export default AboutSection
