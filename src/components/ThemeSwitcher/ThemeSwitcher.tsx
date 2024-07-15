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
    <IconButton ghost size={"lg"} onClick={handleClick}>
      {click ? <RiMoonFill size={24} /> : <RiSunLine size={24} />}
    </IconButton>
  );
};
