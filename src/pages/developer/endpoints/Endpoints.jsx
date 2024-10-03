import React from "react";
import DevLayout from "../../../ui/DevLayout";
import UrlCard from "./UrlCard";

export default function Endpoints() {
  const enpoints = [
    {
      description: "Get address active points",
      code: "/address/:address/points",
      example: "/address/SH7UkJS83K345928SHD7CYH9J92BE8/points",
    },
    {
      description: "Get address completed quests",
      code: "/address/:address/quests",
      example: "/address/SH7UkJS83K345928SHD7CYH9J92BE8/quests",
    },
    {
      description: "Get details about a specific quest",
      code: "/single-quest",
      example: "/single-quest?questName=SolanaExplorer",
    },
    {
      description: "Get all quest categories",
      code: "/categories",
      example: "/categories",
    },
    {
      description: "Get details about a single category",
      code: "/single-category",
      example: "/single-category?categoryName=Blockchain",
    },
    {
      description: "Get quests from a specific category",
      code: "/quests/category",
      example: "/quests/category?categoryName=Blockchain",
    },
  ];

  return (
    <DevLayout>
      <div className="wrap p-5 text-white">
        <div className="wrap bg-secondary-light p-5 rounded-xl">
          <h1 className="text-3xl">API Endpoints URLs</h1>
          <span className="text-gray-200 text-sm">
            Api endpoint for getting proof of how huma an address is and extra
            data to your taste
          </span>

          {enpoints.map((i, index) => (
            <div className="mt-5" key={index}>
              <UrlCard
                description={i.description}
                code={i.code}
                example={i.example}
              />
            </div>
          ))}
        </div>
      </div>
    </DevLayout>
  );
}
