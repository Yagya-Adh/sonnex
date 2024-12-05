import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const ToggleButton = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <button className="flex me-4 lg:hidden" onClick={handleClick}>
        {isClick ? (
          <XMarkIcon className="text-rose-600 size-8" />
        ) : (
          <Bars3Icon className="text-rose-600 size-8" />
        )}
      </button>
    </>
  );
};

export default ToggleButton;
