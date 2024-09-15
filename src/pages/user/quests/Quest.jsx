import React from "react";
import StatsCard from "./StatsCard";
import QuestCard from "./QuestCard";
import UserLayout from "../../../ui/user/UserLayout";

export default function Quest() {
  const dum = [1, 1, 1, 1, 1, 1];
  return (
    <UserLayout>
      <div className="wrap">
        <StatsCard />
        <div className="wrap p-8">
          <h1 className="font-bold text-3xl">
            Blockchain <span className="text-primary-green">ID</span>
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-10">
            {dum.map((i, index) => (
              <QuestCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
