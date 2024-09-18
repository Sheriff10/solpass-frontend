import React from "react";
import { greenBtnSmClass } from "../../ui/buttonStyle";

export default function Intro() {
  return (
    <div className="wrap py-56  px-8 relative overflow-clip">
      <img
        src="/asset/Line.png"
        className="absolute w-full z-[-1] top-0 left-0 right-0 lg:hidden"
        alt="line"
      />
      <div className="flex text-center flex-col gap-10 justify-center items-center lg:w-[60%] mx-auto">
        <h1 className=" text-4xl lg:text-6xl font-bold">
          Unlock The Best Of Web3
        </h1>

        <p className="text-white text-sm lg:text-md text-opacity-65">
          Access a world of Web3 opportunities securely with a single sign-in.
          Effortlessly connect to decentralized applications and services,
          streamline your user experience.
        </p>

        <div className="wrap flex justify-center gap-3 items-center">
          <button className={greenBtnSmClass}>Connect Wallet</button>
          <img src="/asset/user.png" alt="users" />
          <span className="text-xs text text-white text-opacity-65">
            Verify and start <br /> claiming with people
          </span>
        </div>
      </div>
      <img
        src="/asset/line-light.png"
        alt="lineLight"
        className="absolute bottom-0 right-0 w-[250px]"
      />
      <img
        src="/asset/intro-blur.png"
        alt="lineLight"
        className="absolute top-[250px]"
      />
      <img
        src="/asset/globe.png"
        alt="lineLight"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
