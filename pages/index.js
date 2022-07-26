import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Contact from "../Components/Contact";
import Name from "../Components/Name";
import AcercaDe from "../Components/AcercaDe";
import Muestras from "../Components/Muestras.js";

import db from "../Firebase/client";
import { query,  collection, getDocs } from "firebase/firestore";
import Colecciones from "../Components/Colecciones";

export default function Home({ imgs }) {
  return (
    <Box
      bgColor="black"
    >
      <Head>
        <title>Marisa Coppa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-around"
        color="white"
        // alignItems="center"
        // textAlign="center"
      >
        <Name />
        <AcercaDe img={imgs[0].url} />
        <Muestras img={imgs[1].url}/>
        <Colecciones img={imgs}/>
        <Contact />
      </Box>
    </Box>
  );
}
export async function getStaticProps() {
  try { 
    const cuadrosQuery= await query(collection(db, 'cuadrosInicio'))
    const querySnapshot= await getDocs(cuadrosQuery)
    let pictureArr=[]
    querySnapshot.forEach((doc)=>pictureArr.push(doc.data()))
    console.log("🚀 ~ file: index.js ~ line 47 ~ getStaticProps ~ allDocs", pictureArr)
    return { props: { imgs: pictureArr } }
   } catch (error) {
      console.log(error);
    }
  }

// Para buscar todas las img del storage
// export async function getServerSideProps() {
//   try {
//     const list = await listAll(
//       ref(storage, "gs://marisacopparte.appspot.com/cuadros/index")
//     );
//     const listUrl = await list.items.map((item) =>
//       getDownloadURL(
//         ref(storage, `gs://marisacopparte.appspot.com/${item._location.path}`)
//       )
//     );
//     const urls = await Promise.all(listUrl);
//     return { props: { imgs: urls } };
//   } catch (error) {
//     console.log(error);
//   }
// }

// Para buscar una sola img
// export async function getServerSideProps() {
//   try {
//     const url = await getDownloadURL(
//       ref(storage, "gs://marisacopparte.appspot.com/cuadros/Captura de Pantalla 2022-07-14 a la(s) 19.07.30.png")
//     )
//     return { props: { imgs: url } };
//   } catch (error) {
//     console.log(error);
//   }
// }
