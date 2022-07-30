import { Heading, Box, Text, Image } from "@chakra-ui/react";

const Name = () => {
  return (
    <Box
      width="%100"
      display="flex"
      flexDir="column"
      justifyItems="center"
      textAlign="center"
      alignItems="center"
      height="100%"
      color="white"
      p="20%"
      mb="10em"
    >
      {/* <Image src="https://static.arteinformado.com/documentos/eventos/07/70929/Marisa_Coppa,_Monumento_ecuestre.jpg" alt="https://drive.google.com/file/d/1nH254xlu8D0zAqLyfmn6E2GPEv54j2ew/view?usp=sharing"/> */}
      <Heading fontSize='75px' fontFamily='fantasy'>Marisa Coppa</Heading>
      <Text>Artista Plastica</Text>
      <Text py="0.5em" fontStyle='italic'>
        “Hay otro mundo que no es, en absoluto, el que se puede ver; y la unión
        con ese mundo, como la plegaria para el místico, es la pintura.” André
        Malraux
      </Text>
    </Box>
  );
};

export default Name;
