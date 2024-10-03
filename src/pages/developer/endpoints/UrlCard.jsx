import React from "react";
import { FaCopy } from "react-icons/fa";

export default function UrlCard({ description, code, example }) {
  return (
    <div className="wrap text-gray-200 text-sm">
      <span>
        {description}{" "}
        <code className="bg-neutral-800 px-2 py-1 text-red-400 rounded-sm">
          {code}
        </code>
        <code className="bg-neutral-800 px-2 py-1 text-green-500 rounded-sm ms-2">
          GET
        </code>
      </span>{" "}
      <br />
      <div className="wrap relative text-gray-400  border border-gray-400 rounded-xl p-4 mt-3 overflow-hidden text-ellipsis pr-10">
        <span className="absolute right-[20px] bg-black">
          <FaCopy />
        </span>
        <span>https://api.solpass.io/v1{example}</span>
      </div>
    </div>
  );
}
