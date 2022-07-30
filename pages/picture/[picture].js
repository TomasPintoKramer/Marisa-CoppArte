import {Image} from '@chakra-ui/react'
import { useRouter } from 'next/router'

const picture = ({img}) => {
    const router=useRouter()
    console.log("🚀 ~ file: [picture].js ~ line 6 ~ picture ~ router", router)
  return (
    <Image 
    // src={img}
    />
  )
}

export default picture

export async function getServerSideProps() {
    try {
      const url = await getDownloadURL(
        ref(storage, "gs://marisacopparte.appspot.com/cuadros/Captura de Pantalla 2022-07-14 a la(s) 19.07.30.png")
      )
      return { props: { imgs: url } };
    } catch (error) {
      console.log(error);
    }
   }