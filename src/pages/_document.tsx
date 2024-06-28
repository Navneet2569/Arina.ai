/* eslint-disable @next/next/no-css-tags */
// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and Apple Touch Icon */}
          <link rel="icon" href="/assets/img/favicon.png" />
          <link
            rel="apple-touch-icon"
            href="/assets/img/apple-touch-icon.png"
          />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          {/* Vendor Styles */}
          <link
            href="/assets/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
          <link
            href="/assets/vendor/glightbox/css/glightbox.min.css"
            rel="stylesheet"
          />
          <link
            href="/assets/vendor/swiper/swiper-bundle.min.css"
            rel="stylesheet"
          />

          {/* Main Styles */}
          <link href="/main.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="/main.js" strategy="beforeInteractive" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
