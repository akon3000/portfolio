import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { pinkPrimary } from '../../css/Colors'

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
  ${pinkPrimary};
  font-size: 22px;
  font-weight: 600;
  margin-right: 15px;
  margin-bottom: 18px;
  text-transform: uppercase;
  position: relative;

  &::before {
    content: "";
    width: 30px;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: -5px;
    background-color: #EC9191;
  }
`

const DescriptionList = styled('ul')`
  list-style: none;
  line-height: 1;
  padding-left: 15px;
  & > li {
    display: flex;
    & > :first-child {
      ${pinkPrimary};
      position: relative;
      margin-right: 10px;
      font-size: 6px;
      display: flex;
      justify-content: center;
      &::before {
        content: "";
        width: 1px;
        position: absolute;
        top: 1px;
        bottom: 0;
        left: 3.4px;
        background-color: #EC9191;
      }
    }
  }
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
                <p>
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
                </p>
              </li>
            ))
          }
        </DescriptionList>
      </BoxDetail>
    </ContentRight>
  </Wrapper>
)

export default AboutSection
