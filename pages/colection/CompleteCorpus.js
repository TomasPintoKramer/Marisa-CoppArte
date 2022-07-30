import { Box } from "@chakra-ui/react";
import Galeria from "../../Common/Galeria";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "../../Firebase/client";

const CompleteCorpus = ({ imgs }) => {
  return (
    <Box bg="black" minHeight="full">
      CompleteCorpus
      <Galeria imgs={imgs} />
    </Box>
  );
};

export default CompleteCorpus;

export async function getServerSideProps() {
  try {
    const list = await listAll(
      ref(storage, "gs://marisacopparte.appspot.com/cuadros")
    );
    const listUrl = await list.items.map((item) =>
      getDownloadURL(ref(storage, `gs://${item.bucket}/${item._location.path}`))
    );
    const urls = await Promise.all(listUrl);
    return { props: { imgs: urls } };
  } catch (error) {
    console.log(error);
  }
}
