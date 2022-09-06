import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

const Header = () => {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <img
          src="https://avatars.githubusercontent.com/u/66319691?v=4"
          alt="User Image"
          className="rounded-full h-20 w-20"
        />
        <div>
          <h1 className="font-bold text-lg text-white">LOTTERY DAPP</h1>
          <p className="text-xs text-emerald-500 truncate">
            User: {address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:col-span-3 justify-center rounded-md">
        <div className="bg-[#0A1F1C] p-4 rounded space-x-2">
          <NavButton isActive title="Buy Tickets" />
          <NavButton title="Logout" />
        </div>
      </div>
      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />

        <span className="md:hidden">
          <NavButton title="Logout" />
        </span>
      </div>
    </div>
  );
};

export default Header;
