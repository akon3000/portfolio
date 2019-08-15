import styled from 'styled-components'
import BgImage from '../BgImage'

const Wrapper = styled('section')`
  position: relative;
  padding: 100px;
`

const ContactSection = ({ id, bg }) => (
  <Wrapper id={id}>
    <BgImage
      img={bg}
      isFeatherLeft
      isFeatherRight
      bgPosition='top center'
    />
  </Wrapper>
)

export default ContactSection
