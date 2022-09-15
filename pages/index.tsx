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
import PropagateLoader from "react-spinners/PropagateLoader";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  console.log(address);

  if (isLoading) {
    return (
      <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2 mb-10">
          <img
            src="https://avatars.githubusercontent.com/u/66319691?v=4"
            alt=""
            className="rounded-full h-20 w-20"
          />
          <h1 className="text-lg text-white font-bold ">
            Loading The LOTTERY DAPP
          </h1>
        </div>
        <PropagateLoader color="white" size={30} loading />
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
