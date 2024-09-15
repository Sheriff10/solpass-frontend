import React from "react";

export default function StatsCard() {
  return (
    <div className="wrap">
      <div className="grid lg:grid-cols-2 gap-5  p-8">
        <div className="wrap">
          <p className="text-xl">
            Connect your blockchain-based profiles and assets to prove your
            identity <span>10/25</span>
          </p>
        </div>

        <div className="wrap">
          <div className="grid grid-cols-2 gap-5">
            <div className="card p-5 bg-[#191919] rounded-3xl">
              <span className="">Unique Humanity Score</span>
              <div className="wrap flex gap-3 items-center mt-5">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-[30px] lg:w-[50px]"
                />
                <h1 className="text-3xl lg:text-4xl">300</h1>
              </div>
            </div>

            <div className="card p-5 bg-primary-green rounded-3xl text-black">
              <span>Lets increase that score</span>
              <div className="wrap flex flex-col gap-2 lg:gap-1 justify-center mt-5">
                <small className="text-xs  hidden lg:block">
                  Here is a tip on how to raise your score to a minimum of 20
                </small>
                <button className="bg-black p-2 rounded-3xl text-xs text-white text-nowrap">
                  {" "}
                  Start Quests
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
