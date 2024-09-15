import React from "react";
import DevLayout from "../../../ui/DevLayout";
import UrlCard from "./UrlCard";

export default function Endpoints() {
  return (
    <DevLayout>
      <div className="wrap p-5 text-white">
        <div className="wrap bg-secondary-light p-5 rounded-xl">
          <h1 className="text-3xl">API Endpoints URLs</h1>
          <span className="text-gray-200 text-sm">
            Api endpoint for getting proof of how huma an address is and extra
            data to your taste
          </span>

          <div className="mt-16">
            <UrlCard
              description={"Get address active points"}
              code={"/address/:address"}
              example={"/address/SH7UkJS83K345928SHD7CYH9J92BE8"}
            />
          </div>
          <div className="mt-5">
            <UrlCard
              description={"Get address quest "}
              code={"/quest/:address"}
              example={"/quest/SH7UkJS83K345928SHD7CYH9J92BE8"}
            />
          </div>
        </div>
      </div>
    </DevLayout>
  );
}
