import Layout from '../components/Layout'

const Index = ({ title }) => (
  <Layout title={title}>
    Tony Hello
  </Layout>
)

Index.getInitialProps = () => {
  return {
    title: 'Portfolio | TINNAPOP SURAPHON'
  }
}

export default Index