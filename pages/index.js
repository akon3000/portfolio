import { BASIC, MEDIUM, STRONG } from '../constants/skillLv'
import { HOME, ABOUT, SKILL, WORK_EXAMPLE, FOOTER } from '../constants/header'
import Layout from '../components/Layout'
import SectionHome from '../components/SectionHome'
import SectionAbout from '../components/SectionAbout'
import SectionSkill from '../components/SectionSkill'
import SectionWorkExamples from '../components/SectionWorkExamples'
import SectionFooter from '../components/SectionFooter'

const Index = ({ 
  title,
  bgHome,
  bgAbout,
  bgSkills,
  bgContact,
  profile,
  skill,
  workExamples,
  footer
}) => (
  <Layout title={title}>
    <SectionHome id={HOME} bg={bgHome} />
    <SectionAbout id={ABOUT} bg={bgAbout} profile={profile} />
    <SectionSkill id={SKILL} bg={bgSkills} {...skill} />
    <SectionWorkExamples id={WORK_EXAMPLE} bg={bgContact} workExamples={workExamples} />
    <SectionFooter id={FOOTER} {...footer} />
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
      thumbnailHeight: '200 XS80 LA250 XL350',
      thumbnailHoverEffect2: 'scale120',
      thumbnailDisplayTransition: 'slideUp',
      thumbnailDisplayTransitionDuration: 3000,
      itemsBaseURL: '/static/image',
      viewerToolbar: {
        standard: 'minimizeButton',
        minimized: 'minimizeButton, downloadButton, fullscreenButton'
      },
      items: [
        { src: '/work-00.png', srct: '/work-00.png' },
        { src: '/work-04.png', srct: '/work-04.png' },
        { src: '/work-05.png', srct: '/work-05.png' },
        { src: '/work-06.png', srct: '/work-06.png' },
        { src: '/work-07.png', srct: '/work-07.png' },
        { src: '/work-08.png', srct: '/work-08.png' },
        { src: '/work-09.png', srct: '/work-09.png' },
        { src: '/work-10.png', srct: '/work-10.png' },
        { src: '/work-11.jpg', srct: '/work-11.jpg' },
        { src: '/work-12.jpg', srct: '/work-12.jpg' },
        { src: '/work-13.jpg', srct: '/work-13.jpg' },
        { src: '/work-14.jpg', srct: '/work-14.jpg' },
        { src: '/work-02.png', srct: '/work-02.png' },
        { src: '/work-03.png', srct: '/work-03.png' },
        { src: '/work-01.png', srct: '/work-01.png' },
        { src: '/work-17.jpg', srct: '/work-17.jpg' },
        { src: '/work-15.jpg', srct: '/work-15.jpg' },
        { src: '/work-16.jpg', srct: '/work-16.jpg' }
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