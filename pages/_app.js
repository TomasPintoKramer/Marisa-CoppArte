import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme.js";
import Header from "../Components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
