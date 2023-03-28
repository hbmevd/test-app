// Chakra imports
import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

import Image from "next/image";
import crlogo from "assets/img/nfts/crlogo.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <img src={crlogo} alt={""} width={150} height={150}></img>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
