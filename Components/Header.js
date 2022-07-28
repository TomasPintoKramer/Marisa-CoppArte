import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex="916569406"
      backgroundColor="black"
      color="#FFFFFF"
      p="1em"
      display="flex"
      flexDir="row"
      justifyContent="space-around"
      boxShadow="lg"
    >
      <Heading fontSize="xl" fontWeight="bold">
        Marisa Coppa
      </Heading>
      <Text>Acerca de mi</Text>
      <Text>Muestras</Text>
      <Text>Colecciones</Text>
      <Text>Corpus Completo</Text>
      <Text>Agenda</Text>
      <Link href="#contacto" 
      scroll={false}
      >
        <a>Contacto</a>
      </Link>
    </Box>
  );
};

export default Header;
