import React from "react";

const Login = () => {
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 w-56 mb-10"
          src="https://avatars.githubusercontent.com/u/66319691?v=4"
          alt="AayushMohan Image"
        />
        <h1 className="text-6xl text-white font-bold">THE LOTTERY DAPP</h1>
        <h2 className="text-white">
          Get Started By Logging in with your MetaMask
        </h2>

        <button className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold">
          Login With MetaMask
        </button>
      </div>
    </div>
  );
};

export default Login;
