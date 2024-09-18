import React from "react";

const UserCaseCard = ({ icon, title, description, title2 }) => {
  return (
    <div className="wrap relative bg-secondary-light overflow-clip">
      <div className="flex flex-col gap-4  p-5 rounded-xl relative h-full z-10 backdrop-blur-3xl ">
        <div className="flex justify-between items-center">
          <h4 className="text-md font-semibold">
            <span className="text-primary-green">{title}</span> {title2}
          </h4>
        </div>

        <p className="text-white text-opacity-65 text-sm">{description}</p>
      </div>

      <img
        src="/asset/circle-green.png"
        alt="green-cicrle"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};

export default UserCaseCard;
