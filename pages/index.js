import Layout from '../components/Layout'
import SectionHome from '../components/SectionHome'
import SectionAbout from '../components/SectionAbout'

const Index = ({ title, profile }) => (
  <Layout title={title}>
    <SectionHome />
    <SectionAbout profile={profile} />
  </Layout>
)

Index.getInitialProps = () => {
  return {
    title: 'Portfolio | TINNAPOP SURAPHON',
    profile: {
      firstName: 'Tinnapop',
      lastName: 'Suraphon',
      picture: '/static/image/section-about-tony.jpg',
      year: 27,
      nickName: ['Ton', 'Tony'],
      introduces: [
        'I am friendly even work or normal.',
        'For color i like Gray,Black,White.',
        `I don't like vegetable.`,
        'I like challenge work.',
        'Actually i like many things.'
      ],
      workExperience: [
        'D.T.C. ENTERPRISE Co.,Ltd | 1 year',
        'Aksorn Education Public Company Limited, | 1 year',
        'Elite digital studio | 4 mounts',
        'Thomson Reuters | 6 mounts',
        'Getlinks Thailand | Present'
      ]
    }
  }
}

export default Index