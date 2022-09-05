import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="grid">
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
      <div>
        <div className="bg-[#0A1F1C] p-4">
          <NavButton isActive title="Buy Tickets" />
          <NavButton title="Logout" />
        </div>
      </div>
      <div>
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
