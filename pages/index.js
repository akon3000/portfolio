import Layout from '../components/Layout'
import SectionHome from '../components/SectionHome'
import SectionAbout from '../components/SectionAbout'

const Index = ({ title }) => (
  <Layout title={title}>
    <SectionHome />
    <SectionAbout />
  </Layout>
)

Index.getInitialProps = () => {
  return {
    title: 'Portfolio | TINNAPOP SURAPHON'
  }
}

export default Index