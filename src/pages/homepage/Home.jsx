import React from "react";
import Header from "../../ui/Header";
import Statement from "./Statement";
import Solution from "./Solution";
import Architecture from "./Architecture";
import UseCases from "./UseCases";
import Intro from "./Intro";
import SolPassUses from "./Nftplatform";
import Faqs from "./Faqs";
import Footer from "../../ui/Footer";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <Intro />
      <Statement />
      <Solution />
      <Architecture />
      <UseCases />
      <Faqs />
      <Footer />
    </div>
  );
}
