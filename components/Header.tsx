import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <img
          src="https://avatars.githubusercontent.com/u/66319691?v=4"
          alt="User Image"
          className="rounded-full h-20 w-20"
        />
        <div>
          <h1 className="font-bold text-lg text-white">LOTTERY DAPP</h1>
          <p className="text-xs text-emerald-500 truncate">User...</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
