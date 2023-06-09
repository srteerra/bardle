/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DarkMode from "@/components/DarkMode";
import mainLogo from "../../public/bardle.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bardle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkMode />
      <div className="grid place-items-center translate-y-60">
        <div className="grid place-items-center px-6 py-4">
          <div className="w-[300px] md:w-[400px]">
            <Link href="/">
              <Image
                src={mainLogo}
                className="w-[300px] md:w-[400px]"
              />
            </Link>
          </div>
          <div>
            <ul>
              <li>Daily Champion</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
