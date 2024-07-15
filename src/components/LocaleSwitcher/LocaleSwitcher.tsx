import { BiWorld } from "react-icons/bi";
import React from "react";
import { IconButton } from "@/components/Buttons";

export const LocaleSwitcher = () => {
  return (
    <div className="dropdown dropdown-end">
      <IconButton ghost size={"lg"} tabIndex={0} role="button">
        <BiWorld size={24} />
      </IconButton>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};
