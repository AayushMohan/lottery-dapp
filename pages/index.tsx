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
import Loading from "../components/Loading";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  console.log(address);

  if (isLoading) return <Loading />;

  if (!address) return <Login />;

  return (
    <div className="bg-[#091b1b] min-h-screen flex flex-col">
      <Head>
        <title>LOTTERY DAPP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* The Next Draw Box */}
      <div>
        <div>
          <h1>The Next Draw</h1>
        </div>
        <div>
          <div>
            <h2>Total Pool</h2>
            <p>0.1 ETH</p>
          </div>
        </div>
      </div>

      {/* The Price Per Ticket Box */}
      <div></div>
    </div>
  );
};

export default Home;
