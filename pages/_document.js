import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
	        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name="description" content="Portfolio landing page" />
          <meta name="keywords" content="portfolio, developer-portfolio, tech skill" />
          <meta name="author" content="Mr.Tinnapop Suraphon" />

          {/** Facebook og */}
          <meta property='og:title' content='' />
          <meta property='og:image' content='' />
          <meta property='og:url' content='' />
          <meta property='og:site_name' content='' />
          <meta property='og:description' content='' />

          {/** Twitter tag */}
          <meta name='twitter:title' content='' />
          <meta name='twitter:image' content='' />
          <meta name='twitter:url' content='' />
          <meta name='twitter:card' content='' />

          {/* <link rel='shortcut icon' href='favicon.ico' /> */}

          <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css' />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
