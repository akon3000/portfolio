import styled from 'styled-components'
import { rgba } from 'polished'
import { Grid, Divider, Button } from 'semantic-ui-react'
import { LEVEL_COLORS } from '../../constants/skillLv'
import screen from '../../css/screen'
import palette from '../../css/palette'
import BgImage from '../BgImage'

const SkillTitle = styled('h2')`
  font-size: 30px;
  margin-bottom: 20px;
`

const SkillLabel = styled('label')`
  color: ${palette.white};
`

const ContentSkill = styled('div')`
  position: relative;
  margin-top: 100px;
  .ui.buttons {
    margin: 5px;
    & > .skill {
      color: ${palette.white};
      background: ${palette.bastille};
      &:hover {
        background: ${rgba(palette.bastille, 0.2)};
      }
    }
  }
  @media ${screen.MOBILE_L} {
    margin-top: 170px;
  }
`

const Wrapper = styled('section')`
  position: relative;
  padding: 100px;

  @media (max-width: 991px) {
    .ui.divider {
      display: none;
    }
  }

  @media ${screen.TABLET} {
    padding: 20px;
  }
`

const SkillSection = ({ id, bg, language, framework, sql, other }) => (
  <Wrapper id={id}>
    <BgImage
      img={bg}
      isFeatherLeft
    />
    <ContentSkill>
      <Grid>
        <Grid.Row>
          <Grid.Column tablet={16} computer={7}>
            <SkillTitle>{language.title}</SkillTitle>
            {
              language.skills.map((skill, index) => (
                <Button.Group key={index} size='mini'>
                  <Button className='skill'>{skill.name}</Button>
                  <Button.Or text='LV' />
                  <Button color={LEVEL_COLORS[skill.lv]} inverted>{skill.lv}</Button>
                </Button.Group>
              ))
            }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column tablet={16} computer={7} floated='right'>
            <SkillTitle>{framework.title}</SkillTitle>
            {
              framework.skills.map((skill, index) => (
                <Button.Group key={index} size='mini'>
                  <Button className='skill'>{skill.name}</Button>
                  <Button.Or text='LV' />
                  <Button color={LEVEL_COLORS[skill.lv]} inverted>{skill.lv}</Button>
                </Button.Group>
              ))
            }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column tablet={16} computer={7}>
            <SkillTitle>{sql.title}</SkillTitle>
            {
              sql.skills.map((skill, index) => (
                <Button.Group key={index} size='mini'>
                  <Button className='skill'>{skill.name}</Button>
                  <Button.Or text='LV' />
                  <Button color={LEVEL_COLORS[skill.lv]} inverted>{skill.lv}</Button>
                </Button.Group>
              ))
            }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column tablet={16} computer={7} floated='right'>
            <SkillTitle>{other.title}</SkillTitle>
            {
              other.skills.map((skill, index) => (
                <Button.Group key={index} size='mini'>
                  <Button className='skill'>{skill.name}</Button>
                  <Button.Or text='LV' />
                  <Button color={LEVEL_COLORS[skill.lv]} inverted>{skill.lv}</Button>
                </Button.Group>
              ))
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider vertical>
        <SkillLabel>Skills</SkillLabel>
      </Divider>
    </ContentSkill>
  </Wrapper>
)

export default SkillSection
