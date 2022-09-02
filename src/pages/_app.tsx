import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/globals'
import '@/styles/globals.ts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
