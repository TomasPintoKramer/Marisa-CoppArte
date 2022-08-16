import {
  Box,
  Text
} from "@chakra-ui/react";
import ContactForm from "../Common/ContactFrom.js";

const Contact = () => {
    return (
    <Box
      color="white"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      py="2em"
       mb="5em"
      id="contacto"
    >
      <Text fontWeight="medium" fontSize="xl" py="0.5em">Contacto</Text>
   <ContactForm/>
    </Box>
  );
};

export default Contact;
