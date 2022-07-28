import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      position="absolute"
      width='100%'
      bottom='0'
    //   zIndex="916569406"
      backgroundColor="black"
      color="#FFFFFF"
      // mt="1000"
      p="1em"
      display="flex"
      flexDir="row"
      justifyContent="space-around"
    >
      <Heading fontSize="xl" fontWeight="bold">
        Marisa Coppa
      </Heading>
      <Link href="mailto:marisa@coppa.com">
        <a>marisa@coppa.com</a>
      </Link>
      <Link href="tel:+5491144464334">
        <a>+54 9 11 4446 4334</a>
      </Link>
      <Text>Buenos Aires, Argentina</Text>
      <Text>Taller Sur</Text>
      <Text>Proximos Evento:</Text>
    </Box>
  );
};

export default Footer;
