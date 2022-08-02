import {Image, Box} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import storage from "../../Firebase/client";
import { ref, getDownloadURL } from "firebase/storage";

const picture = ({img}) => {

  return (
<Box bg="black" minHeight="full">
Soy una IMG
    <Image 
     src={img}
    />
    </Box>
  )
}

export default picture

export async function getServerSideProps({params}) {
 const {picture}=params
   try {
      const url = await getDownloadURL(
        ref(storage, `gs://marisacopparte.appspot.com/cuadros/${picture}`)
      )
      console.log("🚀 ~ file: [picture].js ~ line 21 ~ getServerSideProps ~ url", url)
      return { props: { img: url} };
     } 
    catch (error) {
      console.log(error);
     }
   }