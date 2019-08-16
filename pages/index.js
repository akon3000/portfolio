import Layout from '../components/Layout'
import SectionHome from '../components/SectionHome'
import SectionAbout from '../components/SectionAbout'
import SectionSkill from '../components/SectionSkill'
import SectionWorkExamples from '../components/SectionWorkExamples'
import SectionFooter from '../components/SectionFooter'

import { BASIC, MEDIUM, STRONG } from '../constants/skillLv'

const Index = ({ title, bgHome, bgAbout, bgSkills, bgContact, profile, skill, workExamples, footer }) => (
  <Layout title={title}>
    <SectionHome id='home' bg={bgHome} />
    <SectionAbout id='about' bg={bgAbout} profile={profile} />
    <SectionSkill id='skill' bg={bgSkills} {...skill} />
    <SectionWorkExamples id='work-example' bg={bgContact} workExamples={workExamples} />
    <SectionFooter id='footer' {...footer} />
  </Layout>
)

Index.getInitialProps = () => {
  return {
    title: 'Portfolio | TINNAPOP SURAPHON',
    bgHome: '/static/image/section-00-bg.jpg',
    bgAbout: '',
    bgSkills: '/static/image/section-01-bg.png',
    bgContact: '/static/image/section-02-bg.jpg',
    profile: {
      firstName: 'Tinnapop',
      lastName: 'Suraphon',
      picture: '/static/image/tony.jpg',
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
        title: 'LANGUAGE',
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
        title: 'DATABASE',
        skills: [
          { name: 'MySQL', lv: MEDIUM },
          { name: 'PostgreSQL', lv: MEDIUM },
          { name: 'MongoDB', lv: BASIC },
        ]
      },
      other: {
        title: 'OTHER',
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
    },
    workExamples: {
      thumbnailWidth: '300 XS100 LA400 XL500',
      thumbnailHeight: 'auto',
      thumbnailHoverEffect2: 'scale120',
      thumbnailDisplayTransition: 'slideUp',
      thumbnailDisplayTransitionDuration: 3000,
      itemsBaseURL: 'https://cdna.artstation.com/p/assets/images/images',
      viewerToolbar: {
        standard: 'minimizeButton',
        minimized: 'minimizeButton, downloadButton, fullscreenButton'
      },
      items: [
        {
          src: '/019/036/497/large/alena-aenami-2.jpg?1561726443',
          srct: '/019/036/497/large/alena-aenami-2.jpg?1561726443'
        },
        {
          src: '/002/078/419/large/alena-aenami-forest-beast1900.jpg?1456935568',
          srct: '/002/078/419/large/alena-aenami-forest-beast1900.jpg?1456935568'
        },
        {
          src: '/012/136/679/large/alena-aenami-003.jpg?1533216279',
          srct: '/012/136/679/large/alena-aenami-003.jpg?1533216279'
        },
        {
          src: '/001/793/794/large/alena-aenami-revenant2-2-1.jpg?1452811928',
          srct: '/001/793/794/large/alena-aenami-revenant2-2-1.jpg?1452811928'
        },
        {
          src: '/018/592/008/large/valentin-petrov-mirror-sc04.jpg?1559935905',
          srct: '/018/592/008/large/valentin-petrov-mirror-sc04.jpg?1559935905'
        },
        {
          src: '/019/821/937/large/su-jian-190720-20190806-102434-20190806-175119.jpg?1565146472',
          srct: '/019/821/937/large/su-jian-190720-20190806-102434-20190806-175119.jpg?1565146472'
        },
        {
          src: '/019/036/497/large/alena-aenami-2.jpg?1561726443',
          srct: '/019/036/497/large/alena-aenami-2.jpg?1561726443'
        },
        {
          src: '/002/078/419/large/alena-aenami-forest-beast1900.jpg?1456935568',
          srct: '/002/078/419/large/alena-aenami-forest-beast1900.jpg?1456935568'
        },
        {
          src: '/012/136/679/large/alena-aenami-003.jpg?1533216279',
          srct: '/012/136/679/large/alena-aenami-003.jpg?1533216279'
        },
        {
          src: '/001/793/794/large/alena-aenami-revenant2-2-1.jpg?1452811928',
          srct: '/001/793/794/large/alena-aenami-revenant2-2-1.jpg?1452811928'
        },
        {
          src: '/018/592/008/large/valentin-petrov-mirror-sc04.jpg?1559935905',
          srct: '/018/592/008/large/valentin-petrov-mirror-sc04.jpg?1559935905'
        }
      ]
    },
    footer: {
      facebook: 'https://www.facebook.com/AlcatrazArmy',
      instagram: 'https://www.instagram.com/t0no0',
      line: '@z.3lz.gg',
      mail: 'vonmane001@gmail.com',
      phone: '099-4947771'
    }
  }
}

export default Index