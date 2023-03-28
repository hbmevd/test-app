/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Link, NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import cyborgbg from "assets/img/auth/cyborgbg.png";
import { FcGoogle } from "react-icons/fc";
import {
  MdAddBox,
  MdAttachMoney,
  MdBarChart,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { RiEyeCloseLine, RiStackFill } from "react-icons/ri";
import {
  ConnectWallet,
  ThirdwebNftMedia,
  useDisconnect,
  Web3Button,
} from "@thirdweb-dev/react";
import crlogo from "assets/img/nfts/crlogo.png";
import { useMetamask } from "@thirdweb-dev/react";
import styles from "styles/Home.module.css";
import { FaEthereum } from "react-icons/fa";
import { useAddress } from "@thirdweb-dev/react";
import MiniStatistics from "components/card/MiniStatistics";
import NFTCard from "components/card/NFTCard";
import IconBox from "components/icons/IconBox";
import { stakingContractAddress } from "consts/contractAddresses";
import { ethers, BigNumber } from "ethers";

function SignIn() {
  // Chakra color mode
  const address = useAddress();
  const textColor = useColorModeValue("black", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();

  return (
    <DefaultAuth illustrationBackground={cyborgbg} image={cyborgbg}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <img src={crlogo} alt={""} width={150} height={150}></img>
        <Box me="auto"></Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <Flex align="center" mb="25px"></Flex>
          <div>
            {!address ? (
              <>
                <Heading color={textColor} fontSize="36px" mb="10px">
                  Connect to Web3
                </Heading>
                <Text
                  mb="36px"
                  ms="4px"
                  color={textColorSecondary}
                  fontWeight="400"
                  fontSize="md"
                >
                  Connect with a Web3 provider to continue
                </Text>
                <button
                  className={styles.styledButton}
                  onClick={connectWithMetamask}
                >
                  <Icon
                    width={15}
                    height={15}
                    justifyContent="center"
                    mr="5"
                    as={FaEthereum}
                  ></Icon>
                  Connect Metamask
                </button>
              </>
            ) : (
              <>
                <button className={styles.styledButton} onClick={disconnect}>
                  <Icon
                    width={15}
                    height={15}
                    justifyContent="center"
                    mr="5"
                    as={FaEthereum}
                  ></Icon>
                  Disconnect wallet
                </button>
                <Text
                  mb="36px"
                  ms="4px"
                  color={textColorSecondary}
                  fontWeight="400"
                  fontSize="md"
                  mt="3"
                >
                  {address}
                </Text>
                <div>
                  <button className={styles.styledButton}>
                    <Link to={"/default"}>Continue</Link>
                  </button>
                </div>
              </>
            )}
          </div>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
