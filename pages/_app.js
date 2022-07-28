import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme.js";
import Header from "../Components/Header";
import Footer from "../Components/Footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
}

export default MyApp;
