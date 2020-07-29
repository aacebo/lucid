import NDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>

        <body className="luc-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
