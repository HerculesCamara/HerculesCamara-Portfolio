import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/globals";
import "@/styles/globals.ts";
import { PrismicProvider } from "@prismicio/react";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <Component {...pageProps} />
      <GlobalStyles />
    </PrismicProvider>
  );
}

export default MyApp;
