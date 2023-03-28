import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoWhite from "assets/img/layout/logoWhite.png";
import crlogo from "assets/img/nfts/crlogo.png";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #e2e8f0 0%, #e2e8f0 100%)";
  const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      borderRadius="30px"
      me={{ base: "20px" }}
      position="relative"
    >
      <Flex
        border="5px solid"
        borderColor={borderColor}
        bg="linear-gradient(135deg, #e2e8f0 0%, #e2e8f0 100%)"
        borderRadius="50%"
        w="94px"
        h="94px"
        align="center"
        justify="center"
        mx="auto"
        position="absolute"
        left="50%"
        top="-47px"
        transform="translate(-50%, 0%)"
      >
        <Image src={crlogo} w="60px" h="60px" />
      </Flex>
      <Flex
        direction="column"
        mb="12px"
        align="center"
        justify="center"
        px="15px"
        pt="55px"
      >
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color="black"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          px="10px"
          mb="14px"
        >
          MINT 28TH APRIL
        </Text>
        <Text
          fontSize="14px"
          color={"black"}
          px="10px"
          mb="14px"
          textAlign="center"
        >
          Cyberillaz: Enter the digital realm and level up your gaming
          experience with 10k 3D NFTs, each with full IP rights and a
          downloadable GLB file, all minting at a price of 0.0666 ETH for
          endless possibilities in the metaverse.
        </Text>
      </Flex>
      <Link href="https://horizon-ui.com/pro">
        <Button
          bg="whiteAlpha.700"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"black"}
          fontWeight="bold"
          fontSize="sm"
          minW="185px"
          mx="auto"
          variant="outline"
        >
          Join Whitelist
        </Button>
      </Link>
    </Flex>
  );
}
