import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Stack,
  Button,
  Textarea,
  Heading,
  ModalContent,
} from "@chakra-ui/react";
import useInput from "../hooks/useInput";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  emailjs.init("Y96ZZ1-tLFUi6QhjG")
  const serviceID="service_vn39nql"
  const templateID='template_vl0i4qs'
  
  const publicKey="Y96ZZ1-tLFUi6QhjG"
  const [email, setEmail] = useState("");
  const pais = useInput();
  const motivo = useInput();
  const consulta = useInput();
  const [emailError, setEmailError] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (!expresiones.email.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //verifica que sea un email
  };

  const handleClick = (e) => {
    console.log("entre", email, pais.value, motivo.value, consulta.value);
    emailjs.send(serviceID, templateID, {to_name:email, from_name:motivo.value, message:consulta.value}, publicKey)
    .then(
      (result) => {
        alert("Message Sent Successfully");
        console.log(result.text);
      })
      .catch((error)=> console.log(error.text))
  };

  return (
    <Box
      color="white"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      py="2em"
       mb="10em"
      id="contacto"
    >
      <Heading fontSize="lg">Contacto</Heading>
      <FormControl onSubmit={handleClick} width="30%" isInvalid={emailError}>
        <Stack spacing={2}>
          <FormLabel>Email</FormLabel>
          <Input
            bgColor="white"
            type="email"
            color="black"
            value={email}
            onChange={emailHandler}
          />
          {!emailError ? (
            <FormHelperText>
              Por favor, ingrese su mail si quiere contactarse con nosotros.
            </FormHelperText>
          ) : (
            <FormErrorMessage>El email es requerid.</FormErrorMessage>
          )}
          <FormLabel>Motivo</FormLabel>
          <Input bgColor="white" type="email" color="black" {...motivo} />
          <FormLabel>Consulta</FormLabel>
          <Textarea bgColor="white" type="email" color="black" {...consulta} />
          <FormLabel>Pais desde donde nos contacta:</FormLabel>
          <Select {...pais} placeholder="Select country">
            <option>Argentina</option>
            <option>Uruguay</option>
            <option>Paraguay</option>
            <option>Chile</option>
            <option>Bolivia</option>
            <option>Peru</option>
            <option>Brasil</option>
            <option>Venezuela</option>
            <option>Colombia</option>
            <option>España</option>
            <option>Inglaterra</option>
            <option>Estados Unidos</option>
            <option>Otro lugar...</option>
          </Select>
          <Button
            onClick={handleClick}
            width="25%"
            color="black"
            disabled={emailError}
          >
            Enviar
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Contact;
