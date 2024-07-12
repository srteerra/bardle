import Image from "next/image";
import Logo from "../../../public/branding/logos/logo-dark.png";
import React from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { LocaleSwitcher } from "@/components/LocaleSwitcher/LocaleSwitcher";

export const MainHeader = () => {
  return (
    <header>
      <div className={"w-60 mx-auto mt-12 mb-6"}>
        <Image src={Logo} alt={"Bardle Logo"} />
      </div>

      <div className={"flex gap-3 justify-center mt-6 mb-12"}>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
};
