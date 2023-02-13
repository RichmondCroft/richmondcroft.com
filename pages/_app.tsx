import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/home.css'
import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
