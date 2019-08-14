import styled from 'styled-components'
import BgImage from '../BgImage'

const Wrapper = styled('section')`
  position: relative;
  padding: 100px;
`

const ContactSection = ({ id }) => (
  <Wrapper id={id}>
    <BgImage
      isFeatherTop
      isFeatherRight
    />
  </Wrapper>
)

export default ContactSection
