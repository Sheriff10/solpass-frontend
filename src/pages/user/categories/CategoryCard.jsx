import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard() {
  const navigation = useNavigate();
  return (
    <div className="card bg-[#191919] rounded-3xl p-5">
      <div className="head flex items-center justify-between">
        <h1 className="font-bold text-3xl">Blockchain ID</h1>
        <div className="wrap text-center">
          <small>Total Point</small> <br />
          <small className="text-primary-green">250</small>
        </div>
      </div>

      <p className="text-sm text-white text-opacity-70 py-5">
        Lorem ipsum dolor sit amet consectetur. Cum adipiscing ut vel dolor leo
        odio urna nulla. Velit sollicitudin nisl at amet nec turpis est donec.
        Cras id mauris duis parturient lacinia id sed et dictum. Penatibus nibh
        ipsum pharetra enim risus. Viverra.
      </p>

      <div className="flex items-center justify-between">
        <div className="wrap">
          <small>Total Point</small>
          <br />
          <small className="text-primary-green">12</small>
          <small>/20</small>
        </div>

        <button
          className="bg-primary-green rounded-3xl p-2 text-sm text-black px-4"
          onClick={() => navigation("/user/quest")}
        >
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
}
