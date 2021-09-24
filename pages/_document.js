import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style jsx>{`
          @font-face {
            font-family: 'Aspira';
            src: url('/_public/aspira/regular/aspira.eot');
            src: url('/_public/aspira/regular/aspira.eot?#iefix') format('embedded-opentype'),
            url('/_public/aspira/regular/aspira.woff2') format('woff2'),
            url('/_public/aspira/regular/aspira.woff') format('woff'),
            url('/_public/aspira/regular/aspira.ttf') format('truetype'),
            url('/_public/aspira/regular/aspira.svg#youworkforthem') format('svg');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'Aspira';
            src: url('/_public/aspira/bold/aspira-bold.eot');
            src: url('/_public/aspira/bold/aspira-bold.eot?#iefix') format('embedded-opentype'),
            url('/_public/aspira/bold/aspira-bold.woff2') format('woff2'),
            url('/_public/aspira/bold/aspira-bold.woff') format('woff'),
            url('/_public/aspira/bold/aspira-bold.ttf') format('truetype'),
            url('/_public/aspira/bold/aspira-bold.svg#youworkforthem') format('svg');
            font-weight: bold;
            font-style: normal;
          }
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument