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
          <meta name='description' content='Portfolio landing page' />
          <meta name='keywords' content='portfolio, developer-portfolio, tech skill' />
          <meta name='author' content='Mr.Tinnapop Suraphon' />

          {/** Facebook og */}
          <meta property='og:title' content='Tony Portfolio' />
          <meta property='og:image' content='https://portfolio-1500d.firebaseapp.com/static/image/tony.jpg' />
          <meta property='og:url' content='https://portfolio-1500d.firebaseapp.com' />
          <meta property='og:description' content='Portfolio of tony' />

          {/** Twitter tag */}
          <meta name='twitter:title' content='Tony Portfolio' />
          <meta name='twitter:image' content='https://portfolio-1500d.firebaseapp.com/static/image/tony.jpg' />
          <meta name='twitter:url' content='https://portfolio-1500d.firebaseapp.com' />
          <meta name='twitter:card' content='Portfolio of tony' />

          <link rel='icon' type='image/png' href='/static/image/favicon.png' />

          {/** Stylesheet third party */}
          <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css' />
          <link rel='stylesheet' href='//unpkg.com/nanogallery2@2.4.2/dist/css/nanogallery2.min.css' />

          {/** Javascript third party */}
          <script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js' />
          <script type='text/javascript' src='//unpkg.com/nanogallery2@2.4.2/dist/jquery.nanogallery2.min.js' />

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
