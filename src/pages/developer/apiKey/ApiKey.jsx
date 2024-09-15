import React from "react";
import DevLayout from "../../../ui/DevLayout";
import { grayBtnSmClass } from "../../../ui/buttonStyle";
import KeyTable from "./KeyTable";

export default function ApiKey() {
  return (
    <DevLayout>
      <div className="wrap p-5 text-white">
        <div className="wrap bg-secondary-light p-5 rounded-xl">
          <div className="header flex justify-between items-center">
            <h1 className="text-xl">API Keys</h1>
            <button className={grayBtnSmClass}>Generate New Key</button>
          </div>

          <div className="table-wrap overflow-x-scroll lg:overflow-x-hidden">
            <KeyTable data={[1, 2, 3, 4]} />
          </div>
        </div>
      </div>
    </DevLayout>
  );
}
