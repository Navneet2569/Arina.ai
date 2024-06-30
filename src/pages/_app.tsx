import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
