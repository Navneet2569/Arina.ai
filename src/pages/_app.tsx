// src/pages/_app.tsx

import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      once: true,
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return <Component {...pageProps} />;
}

export default MyApp;
