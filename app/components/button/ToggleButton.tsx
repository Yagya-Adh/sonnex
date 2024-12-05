import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const ToggleButton = ({ handleSideBarPop }) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
    handleSideBarPop();
  };
  return (
    <>
      <button
        type="button"
        className="flex me-4 lg:hidden"
        onClick={handleClick}
      >
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
