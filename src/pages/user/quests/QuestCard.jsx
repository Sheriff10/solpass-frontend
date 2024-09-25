import React, { useState } from "react";
import { verificationLink } from "../../../services/api-service";
import { getCookie } from "../../../utils/cookies";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import VerificationCard from "./VerificationCard";

export default function QuestCard({
  name,
  point,
  description,
  setLink,
  setStatusLink,
  setDescription,
  setShow,
  completed_quest,
}) {
  const address = getCookie("address");
  const [loading, setLoading] = useState(false);

  const verificationHandler = async () => {
    try {
      setLoading(true);
      const data = await verificationLink(address, name);
      setLink(data.requestUrl);
      setStatusLink(data.statusUrl);
      setDescription(name);
      console.log(data);
      setShow(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // const completed_quest = ["GOOGLE", "Facebook Username"];
  return (
    <div
      className={`${
        completed_quest.includes(name)
          ? "bg-primary-green text-black"
          : "bg-secondary-light"
      }  card p-3 rounded-xl relative overflow-hidden border border-white border-opacity-20`}
    >
      <img
        src="/asset/waggle.png"
        alt="Waggle"
        className="absolute top-0 left-0"
      />
      <div className="flex flex-col items-center text-center justify-between gap-5 h-full relative">
        <div className="head flex justify-between items-center z-10 w-full gap-3">
          <div className="wrap flex flex-col md:flex-row lg:items-center gap-2 text-">
            <img src="/logo.png" alt="Quest" className="w-[20px] lg:w-[30px]" />
            <h1>{name}</h1>
          </div>
          <p className="lg:text-sm font-bold text-primary-green absolute lg:relative top-[0px] right-[1px]">
            +{point}
          </p>
        </div>

        <div className="text-wrap my-5 relative z-10 hidden lg:block">
          <p className="text-xs">{description}</p>
        </div>

        {completed_quest.includes(name) ? (
          <button className="bg-[#1E1E1E] text-primary-green flex justify-center md:block w-full p-2 rounded-xl text-sm relative z-10 ">
            Verification Completed
          </button>
        ) : (
          <button
            className="bg-[#1E1E1E] flex justify-center md:block w-full p-2 rounded-xl text-sm relative z-10 "
            onClick={verificationHandler}
          >
            {loading ? (
              <BarLoader color="#52FF4F" width={150} className="mx-auto" />
            ) : (
              "Get Started"
            )}
          </button>
        )}
      </div>
    </div>
  );
}
