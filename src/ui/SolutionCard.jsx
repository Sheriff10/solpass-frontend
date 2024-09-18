import React from "react";

const SolutionCard = ({ icon, title, description, title2 }) => {
  return (
    <div className="flex flex-col gap-4 bg-secondary-light p-5 rounded-xl relative">
      <div className="flex justify-between items-center">
        <h4 className="text-lg w-[50%] font-semibold">
          <span className="text-primary-green">{title}</span> {title2}
        </h4>
        <div className="border-2 border-[#91FF6A66]  rounded-full p-2 absolute top-5 right-5">
          <div className="border-2 border-[#91FF6A66] rounded-full p-2">
            <div className="border-2 border-[#91FF6A66] rounded-full p-2">
              {icon}
            </div>
          </div>
        </div>
      </div>

      <p className="text-white text-opacity-65 text-sm">{description}</p>
    </div>
  );
};

export default SolutionCard;
