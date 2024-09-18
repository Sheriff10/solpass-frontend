import React from "react";

export default function Architecture() {
  const process = [
    {
      title: "Admission",
      title2: "Solution",
      description:
        "Users submit their Solana address to Solpass for verification.",
    },
    {
      title: "Verification",
      title2: "Via Reclaim",
      description:
        "Users complete biometric and social media verifications via Reclaim.",
    },
    {
      title: "Identity",
      title2: "Scoring",
      description:
        "Verified users receive a score stored in their Solana account.",
    },
    {
      title: "SDK/API",
      title2: "Query",
      description:
        "dApps use Solpass SDK/API to query the score and assess human validity.",
    },
  ];

  return (
    <div className="wrap px-8 py-16 relative overflow-clip" id="architecture">
      <div className="header">
        <h1 className="relative z-10 text-2xl font-semibold text-primary-green text-center mb-5">
          Architecture
        </h1>
      </div>

      <div className="flex relative z-10 lg:grid-cols-2 gap-10 justify-center  ">
        <div className="wrap rounded-2xl bg-secondary-light py-5 relative lg:w-[60%]">
          <img
            src="/asset/rounder.png"
            alt="rounder"
            className="absolute inset-0 mx-auto my-auto"
          />
          <div className="header lg:text-center font-bold text-neutral-500 lg:text-white text-sm lg:text-xl relative z-10">
            <h1>User Verification Process</h1>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:p-5 mt-4">
            {process.map((i, index) => (
              <div
                className="card bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-5"
                key={index}
              >
                <div className="header mb-2 font-semibold text-sm">
                  <p>
                    <span className="text-primary-green">{i.title}</span>{" "}
                    <span>{i.title2}</span>
                  </p>
                </div>
                <p className="text-xs text-white text-opacity-60">
                  {i.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <img src="/asset/arch2.png" alt="arch" /> */}
      </div>

      <img
        src="/asset/line-light.png"
        alt="lineLight"
        className="absolute bottom-0 right-[-100px] w-[250px] rotate-[-50deg]"
      />
    </div>
  );
}
