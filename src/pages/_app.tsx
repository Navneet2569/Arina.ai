import AOS from "aos";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
