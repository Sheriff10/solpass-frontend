import React from "react";

export default function Statement() {
  return (
    <div className="wrap px-8 py-16" id="problem">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="wrap">
          <img
            src={"/asset/statement.png"}
            alt="a programmer"
            className="w-full rounded-lg"
          />
        </div>
        <div className="wrap">
          <h4 className="text-2xl font-bold mb-3">Problem Statement</h4>
          <p className="mb-4 text-white text-opacity-70 text-sm]">
            Bots and fake accounts can manipulate decentralised ecosystems,
            exploit vulnerabilities, and undermine trust. While various projects
            attempt to solve this problem through centralized Know Your Customer
            (KYC) processes, they introduce privacy risks and data handling
            issues. Additionally, KYC processes often hinder the user
            experience, creating barriers for new users entering the ecosystem.
            Solpass offers a decentralized, user-friendly alternative that
            ensures privacy, reduces friction, and enables more fluid
            interaction between real users and dApps.
          </p>
        </div>
      </div>
    </div>
  );
}
