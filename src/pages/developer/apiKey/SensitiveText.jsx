import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Font Awesome Icons

const SensitiveText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex gap-4 justify-center items-center">
      {isVisible ? text : "••••••••••••••••"}{" "}
      {isVisible ? (
        <FaEye onClick={() => setIsVisible(!isVisible)} />
      ) : (
        <FaEyeSlash onClick={() => setIsVisible(!isVisible)} />
      )}
    </div>
  );
};

export default SensitiveText;
