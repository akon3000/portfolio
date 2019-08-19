import styled from 'styled-components'
import { rgba } from 'polished' 
import { Icon, Divider } from 'semantic-ui-react'
import screen from '../../css/screen'
import palette from '../../css/palette'

const ListItem = styled('div')`
  margin: 10px;
  a {
    line-height: 1;
    display: inline-flex;
    align-items: center;
    color: ${rgba(palette.white, 0.6)};
    &:hover {
      color: ${palette.white};
    }
  }
`

const ListContent = styled('div')`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DividerContent = styled('div')`
  max-width: 800px;
  margin: auto;
`

const ContactBox = styled('div')`
  margin: 20px;
  & > div {
    margin-top: 20px;
  }
`

const Wrapper = styled('div')`
  padding: 100px;
  position: relative;
  text-align: center;
  color: ${palette.white};

  @media ${screen.MOBILE_L} {
    padding: 20px;
  }
`

const FooterSection = ({ id, facebook, instagram, line, mail, phone }) => (
  <Wrapper id={id}>
    <h4>CONTACT ME</h4>
    <ListContent>
      <ListItem>
        <a target='_blank' href={facebook}>
          <Icon name='facebook f' /><span>Facebook</span>
        </a>
      </ListItem>
      <ListItem>
        <a target='_blank' href={instagram}>
          <Icon name='instagram' /><span>Instagram</span>
        </a>
      </ListItem>
      <ListItem>
        <a>
          <Icon name='linechat' /><span>Line {line}</span>
        </a>
      </ListItem>
    </ListContent>
    <DividerContent>
      <Divider horizontal inverted content='OR' />
    </DividerContent>
    <ListContent>
      <ContactBox>
        <Icon name='mail' size='big' />
        <div>{mail}</div>
      </ContactBox>
      <ContactBox>
        <Icon name='phone' size='big' />
        <div>{phone}</div>
      </ContactBox>
    </ListContent>
  </Wrapper>
)

export default FooterSection
