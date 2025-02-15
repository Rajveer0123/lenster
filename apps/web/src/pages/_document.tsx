import Document, { Head, Html, Main, NextScript } from 'next/document';

class LensterDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Prefetch and Preconnect */}
          <link rel="preconnect" href="https://media.lenster.xyz" />
          <link rel="dns-prefetch" href="https://media.lenster.xyz" />
          <link rel="preconnect" href="https://assets.lenster.xyz" />
          <link rel="dns-prefetch" href="https://assets.lenster.xyz" />

          {/* Mobile settings */}
          <meta name="apple-mobile-web-app-capable" content="yes" />

          {/* Icons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default LensterDocument;
