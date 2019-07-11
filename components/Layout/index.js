import Head from 'next/head'
import GlobalStyle from '../../css/GlobalStyle'
import Header from './Header'

const Layout = ({ children, title }) => (
  <>
    <GlobalStyle />
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
  </>
)

export default Layout
