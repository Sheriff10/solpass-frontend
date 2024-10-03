import React from "react";
import StatsCard from "../quests/StatsCard";
import CategoryCard from "./CategoryCard";
import UserLayout from "../../../ui/user/UserLayout";
import { useQuery } from "@tanstack/react-query";
import { categoryStats } from "../../../services/api-service";
import { getCookie } from "../../../utils/cookies";

export default function QuestCategories() {
  const address = getCookie("address");
  const {
    data: categoryData = [],
    error: categoryError,
    isLoading: categoryLoading,
  } = useQuery({
    queryKey: ["fetch-category-stat", address],
    queryFn: async () => await categoryStats(),
  });

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
            {categoryData?.map((category, index) => (
              <CategoryCard
                name={category?.name}
                desription={category?.description}
                total_completed={category?.completed}
                total_quest={category?.totalQuest}
                id={category?._id}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
