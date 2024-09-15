import React from "react";
import StatsCard from "../quests/StatsCard";
import CategoryCard from "./CategoryCard";
import UserLayout from "../../../ui/user/UserLayout";

export default function QuestCategories() {
  return (
    <UserLayout>
      <div className="wrap">
        <StatsCard />

        <div className="p-8 mt-10">
          <div className="header text-center mb-10">
            <h1 className="font-bold text-3xl">
              Select <span className="text-primary-green">Category</span>
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
