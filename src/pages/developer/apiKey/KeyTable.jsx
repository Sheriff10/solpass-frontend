import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import SensitiveText from "./SensitiveText";

export default function KeyTable({ data }) {
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
        {data.map((i, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className="min-w-[150px]">Micky phone</td>
            <td className="min-w-[250px]">
              <SensitiveText />
            </td>
            <td className="min-w-[150px]">25th Jan. 2024</td>
            <td>
              <div className="flex justify-center">
                <FaTrashAlt />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
