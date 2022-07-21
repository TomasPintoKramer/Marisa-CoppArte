import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex="916569406"
      backgroundColor="black"
      color="#FFFFFF"
      p="1em"
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      boxShadow='dark-lg' 
    >
      <Heading fontSize="xl" fontWeight="bold">
        Header
      </Heading>

    </Box>
  );
};

export default Header;
