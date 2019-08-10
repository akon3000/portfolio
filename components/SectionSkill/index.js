import styled from 'styled-components'
import { rgba } from 'polished'
import { Card, Icon, Grid } from 'semantic-ui-react'
import palette from '../../css/palette'
import BgImage from '../BgImage'

const CardWrapper = styled('div')`
  .card {
    background-color: ${rgba(palette.bunker, 0.7)};
    .header, .meta, .description, .extra {
      color: #FFF !important;
    }
    .extra {
      border-top: solid 1px #FFF !important;
    }
  }
`

const Wrapper = styled('section')`
  position: relative;
  padding: 100px;
  z-index: 1;
  background-color: ${palette.bunker};
  box-shadow: 50px 50px 50px 0 ${palette.black} inset,
              -50px -50px 50px 0 ${palette.black} inset;
`

const SkillSection = ({ id, language, framework, devOps }) => (
  <Wrapper id={id}>
    <BgImage
      opacity={0.5}
      featherColor='#000'
      src='https://cdnb.artstation.com/p/assets/images/images/007/904/679/large/faiz-azhar-alfamart.jpg?1509273936'
    />
    <Grid columns='equal'>
        <Grid.Column computer={8}>
          <CardWrapper>
            <Card
              fluid
              header={language.title}
              description={language.skills.join(', ')}
              extra={
                <>
                  <Icon name='html5' />
                  {language.skills.length}
                </>
              }
            />
          </CardWrapper>
        </Grid.Column>
        <Grid.Column computer={8}>
          <CardWrapper>
            <Card
              fluid
              header={framework.title}
              description={framework.skills.join(', ')}
              extra={
                <>
                  <Icon name='code' />
                  {framework.skills.length}
                </>
              }
            />
          </CardWrapper>
        </Grid.Column>
        <Grid.Column computer={8}>
          <CardWrapper>
            <Card
              fluid
              meta='skill'
              header={devOps.title}
              description={devOps.skills.join(', ')}
              extra={
                <>
                  <Icon name='jenkins' />
                  {devOps.skills.length}
                </>
              }
            />
          </CardWrapper>
        </Grid.Column>
    </Grid>
  </Wrapper>
)

export default SkillSection
