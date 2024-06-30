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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,400;0,700;1,400&family=Raleway:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />

          {/* Vendor Styles */}
          <link
            rel="stylesheet"
            href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          />
          <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
          <link
            rel="stylesheet"
            href="/assets/vendor/glightbox/css/glightbox.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/swiper/swiper-bundle.min.css"
          />

          {/* Main Styles */}
          <link rel="stylesheet" href="/main.css" />
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
