import NDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NDocument {
  render() {
    return (
      <Html>
        <Head />
        <body className='luc-light'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
