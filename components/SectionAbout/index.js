import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import palette from '../../css/palette'

const TonyImage = styled('img')`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
  position: sticky;
  top: 35px;
  left: 0;
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
  font-size: 22px;
  font-weight: 600;
  margin-right: 15px;
  margin-bottom: 18px;
  color: ${palette.seaPink};
  text-transform: uppercase;
  position: relative;

  &::before {
    content: "";
    width: 30px;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: -5px;
    background-color: ${palette.seaPink};
  }
`

const DescriptionList = styled('ul')`
  line-height: 1;
  list-style: none;
  padding-left: 15px;
  & > li {
    display: flex;
    & > :first-child {
      color: ${palette.seaPink};
      position: relative;
      margin-right: 10px;
      font-size: 8px;
      display: flex;
      justify-content: center;
      &::before {
        content: "";
        width: 2px;
        position: absolute;
        top: 2px;
        left: 3px;
        bottom: 0;
        background-color: ${palette.seaPink};
      }
      & > :last-child {
        padding-bottom: 20px;
      }
    }
  }
  & > li:last-child > :last-child {
    padding-bottom: 0 !important;
  }
`

const BoxDetail = styled('div')`
  margin-bottom: 30px;
`

const Wrapper = styled('section')`
  display: flex;
  padding: 100px;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${palette.bunker};
  box-shadow: 50px 50px 50px 0 ${palette.black} inset,
              -50px -50px 50px 0 ${palette.black} inset;
`

const AboutSection = ({ id, profile, profile: { nickName: [ton, tony] } }) => (
  <Wrapper id={id}>
    <ContentLeft>
      <TonyImage src={profile.picture} />
    </ContentLeft>
    <ContentRight>
      <BoxDetail>
        <TextTitle>About Me</TextTitle>
        <p>
          My name is <u>Mr.{profile.firstName} {profile.lastName}</u> i am {profile.year} years old. And for my nickname you can call me <u>{ton}</u> or <u>{tony}</u>.
        </p>
      </BoxDetail>
      <BoxDetail>
        <TextTitle>Education</TextTitle>
        <DescriptionList>
          {
            profile.educations.map((edu, index) => (
              <li key={index}>
                <p>
                  <Icon name='circle' />
                </p>
                <p>{edu}</p>
              </li>
            ))
          }
        </DescriptionList>
      </BoxDetail>
      <BoxDetail>
        <TextTitle>Work Experience</TextTitle>
        <DescriptionList>
          {
            profile.workExperience.map((exp, index) => (
              <li key={index}>
                <p>
                  <Icon name='circle' />
                </p>
                <div style={{ paddingBottom: 20 }}>
                  <b>{exp.company}</b>
                  <br />
                  <small>{exp.period}</small>
                  <br />
                  {
                    exp.responsibilities.map((list, idx) => (
                      <p key={`responsibilities-${idx}`}>
                        <small >
                          <Icon name='minus' size='tiny' /> {list}
                        </small>
                      </p>
                    ))
                  }
                </div>
              </li>
            ))
          }
        </DescriptionList>
      </BoxDetail>
    </ContentRight>
  </Wrapper>
)

export default AboutSection
