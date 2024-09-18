import React from "react";
import SolPassUses from "./Nftplatform";
import {
  grayBtnSmClass,
  greenBtnSmClass,
  whiteBtnSmClass,
} from "../../ui/buttonStyle";

export default function UseCases() {
  return (
    <section className="px-8 py-16 text-white" id="usecase ">
      <div className="">
        <h3 className="text-4xl font-bold text-[#52FF4F] text-center mb-10">
          <span className="text-white">Use</span> Cases{" "}
        </h3>
      </div>
      <SolPassUses />
      <div className="w-full bg-[#52FF4F] rounded-xl py-20 flex flex-col justify-center items-center relative mt-10">
        <img
          src={"/logo.png"}
          alt="name"
          className="absolute top-3 left-3 w-[60px]"
        />
        <img
          src={"/logo.png"}
          alt="name"
          className="absolute bottom-3 right-3 w-[60px]"
        />
        <p className="lg:w-[60%] text-center text-black mb-5 px-5 text-sm">
          Solpass aims to establish trust and accountability in the Solana
          ecosystem by providing a decentralized and privacy-focused human
          verification solution. By enabling seamless integration with dApps and
          empowering developers with verifiable identity scores, Solpass
          enhances the legitimacy and security of decentralized platforms.
        </p>
        <div className="flex gap-5">
          <button className={grayBtnSmClass + "text-white"}>
            Connect Wallet
          </button>
          <button className={whiteBtnSmClass}>Documentation</button>
        </div>
      </div>
    </section>
  );
}
