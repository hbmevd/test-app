// Chakra imports
import { ArrowForwardIcon, EmailIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Icon,
  IconButton,
  Link,
  Progress,
  Text,
} from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/NftBanner1.png";
import { FaBook, FaDiscord, FaDiscourse, FaEthereum } from "react-icons/fa";
import {
  IoBook,
  IoDocument,
  IoDocumentAttach,
  IoDocumentAttachSharp,
} from "react-icons/io5";
import {
  Md10Mp,
  MdAddComment,
  MdBookOnline,
  MdDashboardCustomize,
  MdLocationSearching,
  MdNotificationAdd,
} from "react-icons/md";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction="column"
      bgImage={banner}
      bgSize="cover"
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius="30px"
    >
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color="white"
        mb="14px"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight="700"
        lineHeight={{ base: "32px", md: "42px" }}
      >
        Cyberillaz
      </Text>
      <Text
        fontSize="md"
        color="black"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="40px"
        lineHeight="28px"
      >
        Cyberillaz: Enter the digital realm and level up your gaming experience
        with 10k 3D NFTs, each with full IP rights and a downloadable GLB file,
        all minting at a price of 0.0666 ETH for endless possibilities in the
        metaverse.
      </Text>
      <Flex align="center">
        <Button
          bg="white"
          color="black"
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight="500"
          fontSize="14px"
          py="20px"
          px="27"
          me="38px"
        >
          Discover now
        </Button>
        <Button
          leftIcon={<FaDiscord />}
          variant="brand"
          onClick={() =>
            window.open(
              "https://discord.com/invite/your-server-invite-link",
              "_blank"
            )
          }
        >
          Join Discord
        </Button>
      </Flex>
    </Flex>
  );
}
