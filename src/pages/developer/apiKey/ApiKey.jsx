import React, { useState } from "react";
import DevLayout from "../../../ui/DevLayout";
import { grayBtnSmClass } from "../../../ui/buttonStyle";
import KeyTable from "./KeyTable";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getApiKey } from "../../../services/api-service";
// import  from "random-words";
import { createApiKey } from "../../../services/api-service";
import Loader from "../../../ui/Loader";
import { generate } from "random-words";
import { BsExclamationCircleFill } from "react-icons/bs";

export default function ApiKey() {
  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();
  const { data = [] } = useQuery({
    queryKey: ["apikey"],
    queryFn: async () => await getApiKey(),
  });

  const generateAPIKey = async () => {
    try {
      setLoading(true);
      const name = generate();
      await createApiKey(name);

      queryClient.invalidateQueries([["apikey"]]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <DevLayout>
      {loading && <Loader />}
      <div className="wrap p-5 text-white">
        <div className="wrap bg-secondary-light p-5 rounded-xl">
          <div className="header flex justify-between items-center">
            <h1 className="text-xl">API Keys</h1>
            <button className={grayBtnSmClass} onClick={generateAPIKey}>
              Generate New Key
            </button>
          </div>

          <div className="table-wrap overflow-x-scroll lg:overflow-x-hidden">
            {data?.apiKeys?.length === 0 ? (
              <div className="flex justify-between items-center w-full mx-auto">
                <div className="bg-primary-green bg-opacity-25 text-primary-green p-5 rounded-xl text-xl mx-auto">
                  <BsExclamationCircleFill className="mx-auto" />{" "}
                  <span>No Secret Key</span>
                </div>
              </div>
            ) : (
              <KeyTable data={data?.apiKeys} />
            )}
          </div>
        </div>
      </div>
    </DevLayout>
  );
}
