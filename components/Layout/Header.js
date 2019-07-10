import styled from 'styled-components'
import Portal from '../Portal'

const Wrapper = styled('div')`
  background-color: red;
`

const Header = () => (
  <Portal>
    <Wrapper>Header</Wrapper>
  </Portal>
)

export default Header
