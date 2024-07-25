"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { GuessRows } from "@/components/GuessRows";

const DailyClassic = () => {
  const translate = useTranslations('Index');
  const champs = [
    { name: "Aatrox", role: 'Mage'},
    { name: "Ahri", role: "Mage" },
    { name: "Akali", role: "Assassin" },
    { name: "Alistar", role: "Tank" },
    { name: "Amumu", role: "Tank" },
    { name: "Anivia", role: "Mage" },
  ];
  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Role', key: 'role' },
  ]

  return (
    <>
      <GuessRows selectedChamps={champs} headers={headers} />
    </>
  )
};

export default DailyClassic;
