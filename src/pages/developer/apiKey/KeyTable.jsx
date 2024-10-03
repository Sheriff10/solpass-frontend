import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import SensitiveText from "./SensitiveText";
import { format } from "date-fns";

export default function KeyTable({ data }) {
  const formatDate = (date) => {
    // Example format: 'MMMM dd, yyyy hh:mm:ss a'
    const formattedDate = format(date, "MMM dd yyyy");
    return formattedDate;
  };
  return (
    <table className="w-full text-center  border-separate border-spacing-y-4">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Key</th>
          <th>Created At</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((i, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className="min-w-[150px]">{i.name}</td>
            <td className="min-w-[250px]">
              <SensitiveText text={i.key} />
            </td>
            <td className="min-w-[150px]">{formatDate(i.createTime)}</td>
            <td>
              <div className="flex justify-center">
                <FaTrashAlt className="text-red-500" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
