import React from "react";
import { PropagateLoader } from "react-spinners";

const Loading = () => {
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
      <PropagateLoader color="white" size={30} />
    </div>
  );
};

export default Loading;
