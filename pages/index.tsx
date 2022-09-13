import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractData,
  useContractCall,
} from "@thirdweb-dev/react";
import Login from "../components/Login";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  console.log(address);

  if (isLoading) {
    return (
      <div>
        <div>
          <img src="https://i.imgur.com/4h7mAu7.com" alt="" />
          <h1>Loading The LOTTERY DAPP</h1>
        </div>
      </div>
    );
  }

  if (!address) {
    return <Login />;
  }

  return (
    <div className="bg-[#091b1b] min-h-screen flex flex-col">
      <Head>
        <title>LOTTERY DAPP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
