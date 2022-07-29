import { Box, Heading, useDisclosure, useMediaQuery, Drawer } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [position, setPosition]=useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scroll = this.scrollY;
      scroll>250? setPosition(true):setPosition(false)
      scroll>250? onOpen:onClose
      
      console.log("🚀 ~ file: Header.js ~ line 8 ~ Header ~ isOpen", isOpen)
     
      
    });
  });
  return (
    
    <Drawer
    onClose={onClose} isOpen={isOpen}
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
    </Drawer>
    
);
};


export default Header;
