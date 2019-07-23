import styled from 'styled-components'
import { pinkPrimary } from '../../css/Colors'

const TonyImage = styled('img')`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
`

const OverlayImage = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 20px;
  box-shadow: 40px 40px 40px 0 #000 inset,
              -40px -40px 40px 0 #000 inset;
`

const ContentLeft = styled('div')`
  position: relative;
  width: 350px;
  min-width: 350px;
  border-radius: 20px;
  margin-bottom: 40px;
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
  margin-bottom: 30px;
`

const Wrapper = styled('section')`
  background-color: #0E1415;
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 50px 50px 50px 0 #000 inset,
              -50px -50px 50px 0 #000 inset;
`

const AboutSection = ({ profile, profile: { nickName: [ton, tony] } }) => (
  <Wrapper id='about'>
    <ContentLeft>
      <TonyImage src={profile.picture} />
      <OverlayImage />
    </ContentLeft>
    <ContentRight>
      <BoxDetail>
        <TextTitle>Myself</TextTitle>
        <p>
          My name is <u>Mr.{profile.firstName} {profile.lastName}</u> i am {profile.year} years old. And for my nickname you can call me <u>{ton}</u> or <u>{tony}</u>.
        </p>
      </BoxDetail>
      <BoxDetail>
        <TextTitle>Introduce</TextTitle>
        <ul style={{ paddingLeft: 15 }}>
          {
            profile.introduces.map((introduce, index) => (
              <li key={index}>{introduce}</li>
            ))
          }
        </ul>
      </BoxDetail>
      <BoxDetail>
        <TextTitle>Work Experience</TextTitle>
        <ul style={{ paddingLeft: 15 }}>
          {
            profile.workExperience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))
          }
        </ul>
      </BoxDetail>
    </ContentRight>
  </Wrapper>
)

export default AboutSection
