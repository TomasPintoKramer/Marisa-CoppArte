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
      <Link href="#acercade" 
      scroll={false}
      >
        <a>Acerca de mi</a>
      </Link>
      <Link href="#muestras" 
      scroll={false}
      >
        <a>Muestras</a>
      </Link>
      <Link href="#muestras" 
      scroll={false}
      >
        <a>Colecciones</a>
      </Link>
      <Link href="#muestras" 
      scroll={false}
      >
        <a>Corpus Completo</a>
      </Link>
      <Link href="#muestras" 
      scroll={false}
      >
        <a>Agenda</a>
      </Link>
      <Link href="#contacto" 
      scroll={true}
      >
        <a>Contacto</a>
      </Link>
    </Box>
  );
};

export default Header;
