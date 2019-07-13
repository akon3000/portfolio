import Layout from '../components/Layout'
import SectionHome from '../components/SectionHome'

const Index = ({ title }) => (
  <Layout title={title}>
    <SectionHome />
  </Layout>
)

Index.getInitialProps = () => {
  return {
    title: 'Portfolio | TINNAPOP SURAPHON'
  }
}

export default Index