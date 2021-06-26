import '../styles/globals.css'

import { GlobalProvider } from "./../context/GlobalState";

export default function MyApp({ Component, pageProps }) {
  return (
  <GlobalProvider>
    <Component {...pageProps} />
  </GlobalProvider>
  )
}

