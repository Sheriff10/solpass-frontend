import React, { useState } from "react";
import StatsCard from "./StatsCard";
import QuestCard from "./QuestCard";
import UserLayout from "../../../ui/user/UserLayout";
import {
  addressStats,
  categoryQuest,
  verificationLink,
} from "../../../services/api-service";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaTriangleExclamation } from "react-icons/fa6";
import VerificationCard from "./VerificationCard";
import { getCookie } from "../../../utils/cookies";

export default function Quest() {
  const [open, setOpen] = useState(false);

  const { categoryId, categoryName } = useParams();
  const [firstPart, secondPart] = categoryName.split(" ");

  const [link, setLink] = useState("");
  const [statusLink, setStatusLink] = useState("");
  const [description, setDescription] = useState("");

  const {
    data: questData = [],
    error: questError,
    isLoading: questLoading,
  } = useQuery({
    queryKey: ["fetch-quest", categoryId],
    queryFn: async () => await categoryQuest(categoryId),
  });

  const address = getCookie("address");
  const {
    data: stats,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["address-stats", address],
    queryFn: async () => await addressStats(address),
  });

  console.log(questData);
  return (
    <UserLayout>
      <div className="wrap">
        <StatsCard />

        {open && (
          <VerificationCard
            description={description}
            verificationLink={link}
            statusLink={statusLink}
            setShow={setOpen}
            open={open}
          />
        )}
        <div className="wrap p-8">
          <h1 className="font-bold text-3xl">
            {firstPart} <span className="text-primary-green">{secondPart}</span>
          </h1>{" "}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-10">
            {questData?.map((i, index) => (
              <QuestCard
                name={i?.name}
                point={i?.points}
                description={i?.description}
                setLink={setLink}
                setStatusLink={setStatusLink}
                setShow={setOpen}
                setDescription={setDescription}
                completed_quest={stats?.completed_quests || []}
                key={index}
              />
            ))}
            {questData.length === 0 && (
              <div className="flex justify-between py-10">
                <div className="bg-primary-green bg-opacity-20 text-white text-lg flex items-center gap-2 rounded-2xl p-5">
                  <FaTriangleExclamation /> No quest found
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
