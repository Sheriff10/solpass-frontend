import React from "react";
import { BarLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg z-50">
      <BarLoader color="#52FF4F" width={150} />
    </div>
  );
}
