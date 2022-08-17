import { Box, Heading, useDisclosure, Slide } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scroll = this.scrollY;
      if (router.asPath == "/") {
        scroll > 250 ? onOpen() : onClose();
      } else {
        onOpen();
      }
    });
  });
  return (
    <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
      <Box
        // placement="top"
        // // onClose={onClose}
        // onOpen={onOpen}
        // isOpen={isOpen}
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
        <Link href="/">
          <a>
            <Heading fontSize="xl" fontWeight="bold">
              Marisa Coppa
            </Heading>
          </a>
        </Link>
        <Link href="/#acercade" scroll={false}>
          <a>Acerca de mi</a>
        </Link>
        <Link href="/#muestras" scroll={false}>
          <a>Muestras</a>
        </Link>
        <Link href="/#muestras" scroll={false}>
          <a>Colecciones</a>
        </Link>
        <Link href="/colection/CompleteCorpus">
          <a>Corpus Completo</a>
        </Link>
        <Link href="/#muestras" scroll={false}>
          <a>Agenda</a>
        </Link>
        <Link href="/#contacto" scroll={true}>
          <a>Contacto</a>
        </Link>
        {/* </DrawerBody>
      </DrawerContent> */}
      </Box>
    </Slide>
  );
};

export default Header;
