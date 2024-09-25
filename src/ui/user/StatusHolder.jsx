import React from "react";
import { FaCircle } from "react-icons/fa6";

export default function StatusHolder({ statusNumber }) {
  return (
    <div className="status mt-10 px-3">
      <h1 className="font-bold mb-2">
        Proof Status <span className="text-primary-green">Timeline</span>
      </h1>
      <div className="flex items-center gap-4 mb-3">
        <FaCircle
          className={`${
            statusNumber > 0 ? "text-primary-green" : "text-gray-600"
          }`}
        />
        <span
          className={`font-medium text-xs ${
            statusNumber > 0 ? "text-neutral-300" : "text-white text-opacity-20"
          }`}
        >
          SESSION STARTED
        </span>
      </div>
      <div className="flex items-center gap-4 mb-3">
        <FaCircle
          className={`${
            statusNumber > 1 ? "text-primary-green" : "text-gray-600"
          }`}
        />
        <span
          className={`font-medium text-xs ${
            statusNumber > 1 ? "text-neutral-300" : "text-white text-opacity-20"
          }`}
        >
          USER INITIALIZE VERIFICATION
        </span>
      </div>
      <div className="flex items-center gap-4 mb-3">
        <FaCircle
          className={`${
            statusNumber > 2 ? "text-primary-green" : "text-gray-600"
          }`}
        />
        <span
          className={`font-medium text-xs ${
            statusNumber > 2 ? "text-neutral-300" : "text-white text-opacity-20"
          }`}
        >
          PROOF GENERATION STARTED
        </span>
      </div>
      <div className="flex items-center gap-4 mb-3">
        <FaCircle
          className={`${
            statusNumber > 3 ? "text-primary-green" : "text-gray-600"
          }`}
        />
        <span
          className={`font-medium text-xs ${
            statusNumber > 3 ? "text-neutral-300" : "text-white text-opacity-20"
          }`}
        >
          PROOF SUBMITTED
        </span>
      </div>
    </div>
  );
}
