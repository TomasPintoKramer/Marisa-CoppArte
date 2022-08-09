import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Stack,
    Button,
    Textarea,
    useToast
  } from "@chakra-ui/react";
  import useInput from "../hooks/useInput";
  import { useState } from "react";
  import emailjs from "@emailjs/browser";
  
  const ContactForm = ({pictureTitle}) => {
    emailjs.init("Y96ZZ1-tLFUi6QhjG")
    const serviceID="service_vn39nql"
    const templateID='template_vl0i4qs'
    const publicKey="Y96ZZ1-tLFUi6QhjG"
    const toast=useToast();
    const pais = useInput();
    const motivo = useInput();
    const consulta = useInput();
    const [email, setEmail] = useState("");
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
      emailjs.send(serviceID, templateID, {to_name:email, from_name:motivo.value +" "+pictureTitle, message:consulta.value}, publicKey)
      .then(
        (result) => {
          toast({
            title: 'Consulta Enviada!',
            position:'top',
            description: "En breve nos contacteremos con usted. Muchas gracias!",
            status: 'success',
            duration:3000,
            isClosable: true,
          });
          console.log(result.text);
        })
        .catch((error)=> console.log(error.text))
    };
  
    return (
        <>
          <Stack spacing={2}>
        <FormControl isInvalid={emailError}>
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
                </FormControl>
                <FormControl>
            <FormLabel>Motivo</FormLabel>
            <Input bgColor="white" type="email" color="black" {...motivo} />
                </FormControl>
                <FormControl>
            <FormLabel>Consulta</FormLabel>
            <Textarea bgColor="white" type="email" color="black" {...consulta} />
                </FormControl>
                <FormControl>
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
            </FormControl>
            <Button
              onClick={handleClick}
              width="25%"
              color="black"
              disabled={emailError}
              >
              Enviar
            </Button>
          </Stack>
                </>
    );
  };
  
  export default ContactForm;
  