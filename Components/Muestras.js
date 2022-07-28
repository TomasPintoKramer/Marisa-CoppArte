import {
  Box,
  List,
  ListItem,
  ListIcon,
  Image,
  UnorderedList,
  Heading,
} from "@chakra-ui/react";

const Muestras = ({img}) => {
  return(
  <Box 
  id="muestras"
  display="flex"
  flexDir="row"
  alignItems="center"
  textAlign="center"
  mx='5em'
  mb="10em">
    <Box
      
      display="flex"
      flexDir="column"
      alignItems="left"
      textAlign="left"
     px='2em'
      width="50%"
    >
      <Heading fontWeight="medium" fontSize="xl" py="0.5em">
        Muestras
      </Heading>
      <UnorderedList spacing={3}>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    </Box>
<Image width="60%" src={img}/>
  </Box>)
};

export default Muestras;
