import { Image, SimpleGrid, AspectRatio } from "@chakra-ui/react";
import Link from "next/link";

const Galeria = ({ imgs }) => {
  return (
    <SimpleGrid m="5em" columns={3} spacing={10}>
      {imgs.map((img) => (
        <Link href={`picture/${img.slice(img.length-30)})}`}>
        <a>
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image src={img} objectFit="cover" />
        </AspectRatio>
        </a>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default Galeria;
