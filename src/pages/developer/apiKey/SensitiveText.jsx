import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Font Awesome Icons

const SensitiveText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex gap-4 justify-center items-center">
      {isVisible ? "h34e-SK32-0MA4-DCV2" : "••••••••••••••••"}{" "}
      {isVisible ? (
        <FaEye onClick={() => setIsVisible(!isVisible)} />
      ) : (
        <FaEyeSlash onClick={() => setIsVisible(!isVisible)} />
      )}
    </div>
  );
};

export default SensitiveText;
