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

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Grid,
  Icon,
  Select,
  SimpleGrid,
  Stack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import {
  MdAddBox,
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdSafetyCheck,
} from "react-icons/md";
import CheckTable from "views/admin/rtl/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import tableDataCheck from "views/admin/default/variables/tableDataCheck";
import tableDataComplex from "views/admin/default/variables/tableDataComplex";
import Stake from "../stake";
import {
  useAddress,
  useContract,
  useOwnedNFTs,
  useTokenBalance,
  useContractRead,
  ConnectWallet,
  Web3Button,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import {
  nftDropContractAddress,
  tokenContractAddress,
  stakingContractAddress,
} from "consts/contractAddresses";
import { BigNumber, ethers } from "ethers";
import { useState, useEffect } from "react";
import styles from "styles/Home.module.css";
import NFTCard from "components/card/NFTCard";
import Notifications from "../profile/components/Notifications";
import { Headers } from "@tanstack/react-table";
import { MastercardIcon } from "components/icons/Icons";
import { FaEthereum } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { UserWallet } from "@thirdweb-dev/sdk";
import General from "../profile/components/General";
import { VSeparator, HSeparator } from "components/separator/Separator";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(
    contract,
    "getStakeInfo",
    address
  );

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", address);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [id]);
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        {!address ? (
          <Tag position="fixed" padding="5" fontWeight="bold" fontSize="20">
            <Icon pr="3" w="32px" h="32px" as={FaEthereum} color={brandColor} />
            Connect Wallet to continue
          </Tag>
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
              name="CRXX Balance"
              value={Number(tokenBalance?.displayValue).toFixed(1)}
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="CRXX to Claim"
              value={
                !claimableRewards
                  ? "Loading..."
                  : parseFloat(ethers.utils.formatUnits(claimableRewards, 18))
                      .toFixed(1)
                      .toString()
              }
            />
            <MiniStatistics
              growth="ERC721"
              name="NFT Total Supply"
              value="10,000"
            />
          </SimpleGrid>
        )}
      </Box>
      <Box pt={{ base: "180px", md: "80px", xl: "0px" }}>
        <Grid
          mb="20px"
          gridTemplateColumns={{ xl: "repeat(2, 1fr)", "2xl": "1fr 1fr" }}
          gap={{ base: "20px", xl: "20px" }}
          display={{ base: "block", xl: "grid" }}
        >
          <div>
            <Tag
              shadow="md"
              m="1"
              fontWeight="bold"
              fontFamily="sans-serif"
              padding="3"
            >
              {" "}
              <Icon
                pr="3"
                w="32px"
                h="32px"
                as={RiStackFill}
                color={"orange"}
              />
              Your Staked NFTs
            </Tag>
            <div>
              {stakedTokens &&
                stakedTokens[0]?.map((stakedToken: BigNumber) => (
                  <NFTCard
                    tokenId={stakedToken.toNumber()}
                    key={stakedToken.toString()}
                  />
                ))}
            </div>
          </div>
          <div>
            <Tag
              shadow="md"
              m="1"
              padding="3"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              <Icon pr="3" w="32px" h="32px" as={MdAddBox} color={"orange"} />
              Unstaked NFTs
            </Tag>
            <div>
              {ownedNfts?.map((nft) => (
                <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                  <ThirdwebNftMedia
                    metadata={nft.metadata}
                    className={styles.nftMedia}
                  />{" "}
                  <Web3Button
                    contractAddress={stakingContractAddress}
                    action={() => stakeNft(nft.metadata.id)}
                    colorMode="light"
                  >
                    Stake
                  </Web3Button>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Box>
    </>
  );
}
