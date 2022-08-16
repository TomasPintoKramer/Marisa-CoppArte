import { Box, Text, Image } from "@chakra-ui/react";

const AcercaDe = ({img}) => {
  return (
      <Box 
  id="acercade"
  display="flex"
  flexDir="row"
  alignItems="center"
  height="100%"
  textAlign="center"
  mx='5em'
  mb="10em">
      <Image width="60%" src={img} alt="cualquiercosa"/>
    <Box
      
      display="flex"
      flexDir="column"
      alignItems="left"
      textAlign="left"
     px='2em'
      width="50%"
      >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
        aliquam sem, vitae vestibulum nulla. Duis diam diam, ultricies eget
        massa a, eleifend posuere sapien. Fusce tristique nunc id aliquam
        egestas. Proin scelerisque, lectus eget pretium porta, risus massa
        laoreet justo, at aliquam quam libero sit amet nibh. Ut vitae nulla
        laoreet, suscipit orci et, aliquet quam. Donec vel purus id sem dapibus
        mollis vel ac felis. Maecenas commodo lectus imperdiet, rhoncus justo
        ac, feugiat nunc. Integer mattis rhoncus dignissim. Suspendisse rhoncus
        volutpat nunc, a vehicula sapien feugiat eget. Sed hendrerit commodo
        massa vel accumsan. Ut condimentum, justo at rhoncus molestie, massa
        lectus consectetur urna, sed porttitor turpis turpis sit amet ipsum.
        Integer elit risus, faucibus ut tristique ac, bibendum nec nulla. Nunc
        non nisl in diam viverra aliquam. In nec tincidunt est, in viverra
        magna.
      </Text>
      <Text>
        In auctor euismod facilisis. Nunc et tortor rutrum, molestie felis eu,
        porttitor libero. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Morbi quis tristique purus. Duis sit amet ipsum dolor. Cras
        lacinia justo id ex rhoncus rutrum. Pellentesque ultrices neque eu nulla
        rutrum scelerisque. Mauris auctor condimentum odio, sit amet viverra
        metus luctus sit amet. Nullam ultricies, nulla euismod tempor dapibus,
        eros quam eleifend neque, eget volutpat elit odio commodo nisi. Sed
        finibus sem eget ultricies porta. Vestibulum in massa nisi. Praesent
        dolor sem, dapibus vel ligula id, egestas laoreet justo. Nulla dapibus
        porttitor est et pulvinar.
      </Text>
     
    </Box>
  </Box>
    
  );
};

export default AcercaDe;
