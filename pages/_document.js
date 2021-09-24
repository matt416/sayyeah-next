import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style jsx>{`
          @font-face {
            font-family: 'Aspira';
            src: url('/aspira/regular/aspira.eot');
            src: url('/aspira/regular/aspira.eot?#iefix') format('embedded-opentype'),
            url('/aspira/regular/aspira.woff2') format('woff2'),
            url('/aspira/regular/aspira.woff') format('woff'),
            url('/aspira/regular/aspira.ttf') format('truetype'),
            url('/aspira/regular/aspira.svg#youworkforthem') format('svg');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'Aspira';
            src: url('/aspira/bold/aspira-bold.eot');
            src: url('/aspira/bold/aspira-bold.eot?#iefix') format('embedded-opentype'),
            url('/aspira/bold/aspira-bold.woff2') format('woff2'),
            url('/aspira/bold/aspira-bold.woff') format('woff'),
            url('/aspira/bold/aspira-bold.ttf') format('truetype'),
            url('/aspira/bold/aspira-bold.svg#youworkforthem') format('svg');
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