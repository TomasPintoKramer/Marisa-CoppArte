import {
  Box,
  Text
} from "@chakra-ui/react";
import useInput from "../hooks/useInput";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "../Common/contactFrom";

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
