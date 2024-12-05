import { useState } from "react";
import { BarIcon, XmarkIcon } from "@/app/icons";

const ToggleButton = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <button type="button" className="flex me-4 lg:hidden" onClick={handleClick}>
      {isClick ? (
        <XmarkIcon className="fill-sonex-prime size-8" />
      ) : (
        <BarIcon className="fill-sonex-prime size-8" />
      )}
    </button>
  );
};

export default ToggleButton;
