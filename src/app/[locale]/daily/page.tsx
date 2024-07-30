"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { GuessRows } from "@/components/GuessRows";
import { IChampion } from "@/interfaces/IChampion";

const DailyClassic = () => {
  const t = useTranslations("headers");

  const champs: IChampion[] = [
    {
      displayName: "Zilean",
      shortName: "Zilean",
      gender: 1,
      partype: 3,
      position: ["Support"],
      rangeType: ["Ranged"],
      regionFrom: ["Icathia"],
      releaseDate: "11-02-2009",
      role: ["Support", "Mage"],
      specie: ["Human"],
      titleChamp: "The Chronokeeper",
      avatarURL:
        "https://cdn.communitydragon.org/11.16.1/champion/Zilean/square",
    },
    {
      displayName: "Zoe",
      shortName: "Zoe",
      gender: 2,
      partype: 3,
      position: ["Middle"],
      rangeType: ["Ranged"],
      regionFrom: ["Targon"],
      releaseDate: "06-14-2017",
      role: ["Mage"],
      specie: ["Aspect"],
      titleChamp: "The Aspect of Twilight",
      avatarURL: "https://cdn.communitydragon.org/11.16.1/champion/Zoe/square",
    },
    {
      displayName: "Zyra",
      shortName: "Zyra",
      gender: 2,
      partype: 1,
      position: ["Support"],
      rangeType: ["Ranged"],
      regionFrom: ["Unknown"],
      releaseDate: "11-07-2012",
      role: ["Mage", "Support"],
      specie: ["Human-Plant Hybrid"],
      titleChamp: "Rise of the Thorns",
      avatarURL: "https://cdn.communitydragon.org/11.16.1/champion/Zyra/square",
    },
  ];

  const headers = [
    { key: "displayName", label: t("displayName") },
    { key: "gender", label: t("gender") },
    { key: "partype", label: t("partype") },
    { key: "position", label: t("position") },
    { key: "rangeType", label: t("rangeType") },
    { key: "role", label: t("role") },
    { key: "regionFrom", label: t("regionFrom") },
    { key: "releaseDate", label: t("releaseDate"), isDate: true },
    { key: "specie", label: t("species") },
  ];

  return (
    <>
      <GuessRows selectedChamps={champs} headers={headers} />
    </>
  );
};

export default DailyClassic;
