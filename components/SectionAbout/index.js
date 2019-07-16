import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { pinkPrimary } from '../../css/Colors'

const TonyImage = styled('img')`
  width: 100%;
  height: auto;
  opacity: 0.7;
  display: block;
  border-radius: 20px;
`

const ContentLeft = styled('div')`
  width: 450px;
  min-width: 300px;
  border-radius: 20px;
  box-shadow: 10px 10px 20px 0 #000, -10px -10px 20px 0 #000;
`

const ContentRight = styled('div')`
  width: 500px;
  padding: 0 40px;
`

const TextTitle = styled('p')`
  ${pinkPrimary};
  font-size: 22px;
  font-weight: 400;
  margin-right: 15px;
  margin-bottom: 15px;
`

const BoxDetail = styled('div')`
  display: flex;
  margin-bottom: 30px;
`

const Wrapper = styled('section')`
  background-color: #0E1415;
  padding: 100px;
  display: flex;
  box-shadow: 50px 50px 50px 0 #000 inset,
              -50px -50px 50px 0 #000 inset;
`

const AboutSection = ({ profile, profile: { nickName: [ton, tony] } }) => (
  <Wrapper id='about'>
    <ContentLeft>
      <TonyImage src='/static/image/section-about-tony.jpg' />
    </ContentLeft>
    <ContentRight>
      <BoxDetail>
        <TextTitle>
          <Icon name='smile outline' />
        </TextTitle>
        <div>
          <TextTitle>Myself</TextTitle>
          <p>
            My name is <u>Mr.{profile.firstName} {profile.lastName}</u> i am {profile.year} years old. And for my nickname you can call me <u>{ton}</u> or <u>{tony}</u>.
          </p>
        </div>
      </BoxDetail>
      <BoxDetail>
        <TextTitle>
          <Icon name='list' />
        </TextTitle>
        <div>
          <TextTitle>Introduce</TextTitle>
          <ul style={{ paddingLeft: 15 }}>
            {
              profile.introduces.map((introduce, index) => (
                <li key={index}>{introduce}</li>
              ))
            }
          </ul>
        </div>
      </BoxDetail>
      <BoxDetail>
        <TextTitle>
          <Icon name='pencil alternate' />
        </TextTitle>
        <div>
          <TextTitle>Work Experience</TextTitle>
          <ul style={{ paddingLeft: 15 }}>
            {
              profile.workExperience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))
            }
          </ul>
        </div>
      </BoxDetail>
    </ContentRight>
  </Wrapper>
)

export default AboutSection
