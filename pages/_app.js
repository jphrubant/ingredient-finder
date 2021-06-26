import { ChakraProvider } from "@chakra-ui/react";
import { GlobalProvider } from "./../context/GlobalState";

export default function MyApp({ Component, pageProps }) {
  return (
  <GlobalProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </GlobalProvider>
  )
}

