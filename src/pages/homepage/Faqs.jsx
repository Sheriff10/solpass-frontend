import React, { useState } from "react";
import FaqCard from "../../ui/FaqCard";

export default function Faqs() {
  const faqs = [
    {
      question: "What is Solpass?",
      answer:
        "Solpass is a verification platform on the Solana blockchain, allowing users to prove their identity through Reclaim for human verification. It's similar to Gitcoin Passport but built specifically for Solana.",
    },
    {
      question: "How do I verify my Solana address?",
      answer:
        "To verify your Solana address, simply connect your wallet, complete the required verifications through Reclaim, and earn points that reflect your verification status.",
    },
    {
      question: "How can developers use Solpass?",
      answer:
        "Developers can integrate the Solpass SDK/API into their dApps to assess the 'human score' of Solana addresses based on completed verifications, enabling a safer, more human user base.",
    },
  ];

  return (
    <div className="wrap px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="wrap">
          <h1 className="lg:block hidden text-5xl leading-[60px] font-bold">
            Frequently Asked <br />{" "}
            <span className="text-primary-green">Question (FAQs)?</span>
          </h1>
          <h1 className="lg:hidden font-bold text-2xl text-center leading-[60px] text-primary-green">
            (FAQs)?
          </h1>
        </div>
        <div className="wrap flex flex-col gap-5">
          {faqs.map((i, index) => (
            <FaqCard question={i.question} answer={i.answer} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
