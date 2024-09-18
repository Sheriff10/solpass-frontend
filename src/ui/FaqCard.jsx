import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function FaqCard({ answer, question }) {
  const [show, setShow] = useState(false);

  return (
    <div className="card rounded-xl  relative overflow-clip">
      {show && (
        <img
          src="/asset/circle-green.png"
          alt="green-cicrle"
          className="absolute bottom-0 right-0"
        />
      )}
      <div className="bg-con relative z-10 backdrop-blur-3xl  p-5 bg-white bg-opacity-5">
        <div className="header flex justify-between items-center">
          <h1 className="font-semibold text-md">{question}</h1>
          <span
            onClick={() => setShow(!show)}
            className="text-primary-green p-2"
          >
            {show ? <FaCaretUp /> : <FaCaretDown />}
          </span>
        </div>

        {show && <p className="text-white opacity-70 text-sm mt-3">{answer}</p>}
      </div>
    </div>
  );
}
