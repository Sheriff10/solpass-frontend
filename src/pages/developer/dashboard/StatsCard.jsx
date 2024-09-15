import React from "react";
import { greenIconBtnSmClass } from "../../../ui/buttonStyle";
import { FaHome } from "react-icons/fa";

export default function StatsCard({ primaryText, secondaryText, info }) {
  return (
    <div className="wrap p-8 rounded-lg bg-secondary-light">
      <div className="flex flex-col gap-2">
        <small className="text-xs">{primaryText}</small>
        <h1 className="text-3xl font-bold">{secondaryText}</h1>
        <span>{info}</span>
        <div className="btn-wrap">
          <button className={`${greenIconBtnSmClass}`}>
            <FaHome /> Manage Plan
          </button>
        </div>
      </div>
    </div>
  );
}
