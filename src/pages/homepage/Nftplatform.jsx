import React from "react";
import UserCaseCard from "../../ui/UseCaseCard";

function SolPassUses() {
  const services = [
    {
      title: "Applications",
      title2: "(DAPPS)",
      description:
        "dApps can use Solpass to onboard real users, ensuring higher-quality interaction, reducing spam, and enhancing governance within DAOs by providing verified participants.",
    },
    {
      title: "NFT",
      title2: "Platform",
      description:
        "NFT creators and platforms can use Solpass to verify buyers and sellers, ensuring authentic participation in the marketplace and preventing bots from skewing auctions or token drops.",
    },
    {
      title: "Airdrop",
      title2: "Security",
      description:
        "Solpass can be used to ensure that only verified humans are eligible for airdrops, preventing bot-driven manipulation and ensuring fair token distribution.",
    },
  ];

  return (
    <section className=" bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <UserCaseCard
              description={service.description}
              title={service.title}
              title2={service.title2}
              key={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolPassUses;
