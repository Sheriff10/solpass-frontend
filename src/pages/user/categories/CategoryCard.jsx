import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({
  name,
  desription,
  total_quest,
  total_completed,
  id,
}) {
  const navigation = useNavigate();
  return (
    <div className="card bg-[#191919] rounded-3xl p-5">
      <div className="head flex items-center justify-between">
        <h1 className="font-bold text-3xl">{name}</h1>
        <div className="wrap text-center">
          <small>Total Point</small> <br />
          <small className="text-primary-green">250</small>
        </div>
      </div>

      <p className="text-sm text-white text-opacity-70 py-5">{desription}</p>

      <div className="flex items-center justify-between">
        <div className="wrap">
          <small>Total Point</small>
          <br />
          <small className="text-primary-green">{total_completed}</small>
          <small>/{total_quest}</small>
        </div>

        <button
          className="bg-primary-green rounded-3xl p-2 text-sm text-black px-4"
          onClick={() => navigation(`/user/quest/${id}/${name}`)}
        >
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
}
