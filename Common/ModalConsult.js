import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,

} from "@chakra-ui/react";
import { useRef } from "react";
import ContactForm from "./contactFrom";

function ModalConsult({ pictureTitle }) {


  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const initialRef = useRef(null);
  const finalRef = useRef(null);



  return (
    <>
      <Button onClick={onOpen} color="black" >Contsulta</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Consutla por:<br/>{pictureTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <ContactForm pictureTitle={pictureTitle} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalConsult;
