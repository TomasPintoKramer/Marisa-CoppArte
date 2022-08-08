import { Image, SimpleGrid, AspectRatio } from "@chakra-ui/react";
import Link from "next/link";

const Galeria = ({ imgs, infos }) => {
  return (
    <SimpleGrid m="5em" columns={3} spacing={10}>
      {infos.map((info, i) => (
        <Link key={i} href={`/${info._location.path_}`}>
        <a>
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image src={imgs[i]} objectFit="cover" />
        </AspectRatio>
        </a>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default Galeria;
