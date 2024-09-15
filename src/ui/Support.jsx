import React from "react";
import { BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export default function Support() {
  return (
    <div className="wrap relative bottom-0">
      <h1 className="text-xl font-bold">Support</h1>

      <div className="grid md:grid-cols-2 gap-10 mt-5">
        <div className="wrap border border-gray-600 rounded-xl p-3 text-gray-300 leading-10">
          <BsDiscord />
          <span>Follow us on discord for more info</span>
        </div>
        <div className="wrap border border-gray-600 rounded-xl p-3 text-gray-300 leading-10">
          <FaXTwitter />
          <span>Follow us on discord for more info</span>
        </div>
      </div>
    </div>
  );
}
