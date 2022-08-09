import { Image, Box, AspectRatio, Heading, Text, Flex } from "@chakra-ui/react";
import db from "../../Firebase/client";
import { ref, doc, getDoc } from "firebase/storage";
import ModalConsult from "../../Common/ModalConsult";

const picture = ({ img, pictureTitle }) => {
  
  return (
    <Box
      bg="black"
      height="container.md"
      width="100%"
       display="flex"
      flexDir="column"
       alignItems='center'
       alignContent="center"
      justifyContent="center"
    >
      <Box color="white" 
      display="flex" 
       flexDir="row"
      justifyContent='space-around'
      // alignItems='center'
      // alignContent="center"
     
      >
        <Box position='relative'>
        <AspectRatio maxW="600px" ratio={16 / 9} ml="5em">
          <Image src={img} objectFit="cover"  zIndex={1}/>
        </AspectRatio>
        </Box>
        <Box display='flex' flexDir='column' width='30%'>
        <Heading fontSize='xl' ml='1em' mb="1em">{pictureTitle}</Heading>
        <Text mb="1em">
        Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Text>
        <Box w="40%">
        <ModalConsult  pictureTitle={pictureTitle}/>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default picture;

// export async function getServerSideProps({ params }) {
//   const { picture } = params;
//   try {
//  const refDoc= doc(db,picture)
//  const snapShot= await getDoc(refDoc)
//  if(snapShot.exists()){
// const docData= await snapShot.data()
// const data=await docData.json()
//     return { props: { img: data } };}
//   } catch (error) {
//     console.log(error);
//   }
// }
// export async function getServerSideProps({ params }) {
//   const { picture } = params;
//   try {
//     const url = await getDownloadURL(
//       ref(storage, `gs://marisacopparte.appspot.com/cuadros/${picture}`)
//     );
//     return { props: { img: url, pictureTitle:picture } };
//   } catch (error) {
//     console.log(error);
//   }
// }
