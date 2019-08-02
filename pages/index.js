import Layout from '../components/Layout'
import SectionHome from '../components/SectionHome'
import SectionAbout from '../components/SectionAbout'

const Index = ({ title, urlBgHome, profile }) => (
  <Layout title={title}>
    <SectionHome id='home' urlBgHome={urlBgHome} />
    <SectionAbout id='about' profile={profile} />
  </Layout>
)

Index.getInitialProps = () => {
  return {
    title: 'Portfolio | TINNAPOP SURAPHON',
    urlBgHome: '/static/image/section-home-bg.jpg',
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
    }
  }
}

export default Index