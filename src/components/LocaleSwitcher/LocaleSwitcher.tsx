import { RiMoonFill, RiSunLine } from "react-icons/ri";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { IconButton } from "@/components/Buttons";

export const LocaleSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <IconButton
      onClick={() => handleClick()}
      className="bg-secondary-6 dark:bg-accent-1 text-white dark:text-accent-7 p-2 rounded-xl hover:cursor-pointer"
    >
      {click ? (
        <RiMoonFill className="text-xl" />
      ) : (
        <RiSunLine className="text-xl" />
      )}
    </IconButton>
  );
};
