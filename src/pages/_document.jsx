"use client"
import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

export default function Document() {

  let [account, setAccount] = useState(""); // State variable to set account/wallet.
  let [isconnected, setIsconnected] = useState(false); // State variable to set account/wallet.

  const handleConnectWallet = async () => {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
    setIsconnected(true);
  };

  return (
    <Html lang="en">
      <Head />
      <body>
          <div className="fixed right-20 top-6">
            <button
              className="px-10 py-2 text-md font-bold bg-black dark:bg-slate-100 text-slate-100 dark:text-black rounded-full hover:opacity-90 transition duration-200 ease-in-out"
              onClick={handleConnectWallet}
            >
              Connect wallet
            </button>
          </div>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
