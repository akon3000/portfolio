import Layout from '../components/Layout'
import SectionHome from '../components/SectionHome'
import SectionAbout from '../components/SectionAbout'
import SectionSkill from '../components/SectionSkill'
import SectionContact from '../components/SectionContact'

import { BASIC, MEDIUM, STRONG } from '../constants/skillLv'

const Index = ({ title, bgHome, bgAbout, bgSkills, bgContact, profile, skill }) => (
  <Layout title={title}>
    <SectionHome id='home' bg={bgHome} />
    <SectionAbout id='about' bg={bgAbout} profile={profile} />
    <SectionSkill id='skill' bg={bgSkills} {...skill} />
    <SectionContact id='contact' bg={bgContact} />
  </Layout>
)

Index.getInitialProps = () => {
  return {
    title: 'Portfolio | TINNAPOP SURAPHON',
    bgHome: '/static/image/section-home-bg.jpg',
    bgAbout: '/static/image/section-about-bg.jpg',
    bgSkills: '/static/image/section-skill-bg.jpg',
    bgContact: '/static/image/section-contact-bg.png',
    profile: {
      firstName: 'Tinnapop',
      lastName: 'Suraphon',
      picture: '/static/image/section-about-tony.jpg',
      year: 27,
      nickName: ['Ton', 'Tony'],
      educations: [
        'December 2014, 4 th year student, Faculty of Informatics Burapha University, GPA 2.42',
        'May 2004 – 2010, Sisaket Wittayalai School, Sisaket, Thailand, GPA 2.93'
      ],
      workExperience: [
        {
          company: 'Getlinks Thailand',
          period: '01 April 2018 – present',
          responsibilities: [
            'Develop web application platform Tech talent community by Next JS framework, Express JS framework, React JS, EJS, Redux, Recompose, Style-component (core project)',
            'Develop application platform scraping data by Python language (micro project)'
          ]
        },
        {
          company: 'Thomson Reuters',
          period: '20 October 2017 – 20 March 2018',
          responsibilities: [
            'Develop pc application by Electron framework, Angular JS, Polymer, Type Script (core project)'
          ]
        },
        {
          company: 'Elite digital studio',
          period: '03 April 2017 – 31 August 2017',
          responsibilities: [
            'Develop web application platform HTML Website Creation by React JS, React Router, Redux and Webpack (core project)',
          ]
        },
        {
          company: 'Aksorn Education Public Company Limited',
          period: '02 April 2016 – 15 March 2017',
          responsibilities: [
            'Develop pc application by Electron framework, Angular JS, Grunt and Less (core project)',
            'Develop landing page for support every feature is company want (core project)'
          ]
        },
        {
          company: 'D.T.C. ENTERPRISE Co.,Ltd',
          period: '19 Jan 2015 – 1 Mar 2016, (1 year)',
          responsibilities: [
            'Develop web application by PHP, Node JS, jQuery, PostgreSQL and Angular JS (customer project)',
            'Develop mobile application by Cordova framework, Node JS and Angular JS (core project)'
          ]
        }
      ]
    },
    skill: {
      language: {
        title: 'LANGUAGE TECH',
        skills: [
          { name: 'HTML & HTML5', lv: STRONG },
          { name: 'Javascript ES5 & ES6', lv: STRONG },
          { name: 'ReactJS', lv: STRONG },
          { name: 'CSS', lv: STRONG },
          { name: 'SASS', lv: STRONG },
          { name: 'LESS', lv: STRONG },
          { name: 'Jquery', lv: MEDIUM },
          { name: 'AngularJS v1', lv: MEDIUM },
          { name: 'PHP', lv: BASIC },
          { name: 'EJS', lv: BASIC },
          { name: 'VueJS', lv: BASIC }, 
          { name: 'Python', lv: BASIC },
          { name: 'Type Script', lv: BASIC },
        ]
      },
      framework: {
        title: 'FRAMEWORK',
        skills: [
          { name: 'Node JS', lv: STRONG },
          { name: 'Express JS', lv: STRONG },
          { name: 'Next JS', lv: STRONG },
          { name: 'Bootstrap', lv: STRONG },
          { name: 'styled-component', lv: STRONG },
          { name: 'Redux', lv: STRONG },
          { name: 'Recompose', lv: MEDIUM },
          { name: 'Material-ui', lv: MEDIUM },
          { name: 'Webpack', lv: MEDIUM },
          { name: 'Babel JS', lv: MEDIUM },
          { name: 'PM2', lv: MEDIUM },
          { name: 'Docker', lv: BASIC },
          { name: 'Grunt', lv: BASIC },
          { name: 'Nginx', lv: BASIC },
          { name: 'Radis', lv: BASIC },
          { name: 'Cordova', lv: BASIC },
          { name: 'Graph QL', lv: BASIC },
          { name: 'electron', lv: BASIC },
          { name: 'Mocha', lv: BASIC }
        ]
      },
      sql: {
        title: 'SQL',
        skills: [
          { name: 'MySQL', lv: MEDIUM },
          { name: 'PostgreSQL', lv: MEDIUM },
          { name: 'MongoDB', lv: BASIC },
        ]
      },
      other: {
        title: 'Other',
        skills: [
          { name: 'Git tools', lv: STRONG },
          { name: 'Photoshop', lv: MEDIUM },
          { name: 'Window os', lv: STRONG },
          { name: 'Linux os', lv: MEDIUM },
          { name: 'Mac os', lv: MEDIUM },
          { name: 'Thai language', lv: STRONG },
          { name: 'English language', lv: MEDIUM },
        ]
      }
    }

  }
}

export default Index