import { RiMoonFill, RiSunLine } from "react-icons/ri";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { IconButton } from "@/components/Buttons";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <IconButton onClick={handleClick}>
      {click ? (
        <RiMoonFill className="text-xl" />
      ) : (
        <RiSunLine className="text-xl" />
      )}
    </IconButton>
  );
};
