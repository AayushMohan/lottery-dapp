import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex">
        <img
          src="https://avatars.githubusercontent.com/u/66319691?v=4"
          alt="User Image"
          className="rounded-full h-20 w-20"
        />
        <div>
          <h1>Lottery DAPP</h1>
          <p>User...</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
