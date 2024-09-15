import React from "react";

export default function QuestCard() {
  return (
    <div className="card bg-secondary-light p-3 rounded-xl relative overflow-hidden border border-white border-opacity-20">
      <img
        src="/asset/waggle.png"
        alt="Waggle"
        className="absolute top-0 left-0"
      />
      <div className="head flex justify-between items-center relative z-10">
        <div className="wrap flex flex-col md:flex-row lg:items-center gap-2 text-lg">
          <img src="/logo.png" alt="Quest" className="w-[20px] lg:w-[30px]" />
          <h1>Binance KYC</h1>
        </div>
        <p className="lg:text-2xl font-bold absolute lg:relative top-[0px] right-[1px]">
          15.6
        </p>
      </div>

      <div className="text-wrap my-5 relative z-10">
        <p className="text-sm">
          Very your moniepoint account number, by implementing your tails above.
        </p>
      </div>
      <button className="bg-[#1E1E1E] hidden md:block w-full p-2 rounded-xl relative z-10">
        Get Started
      </button>
    </div>
  );
}
