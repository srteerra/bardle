"use client";
import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "next-themes";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

function Document() {

  let [account, setAccount] = useState(""); // State variable to set account/wallet.
  let [isconnected, setIsconnected] = useState(false); // State variable to set account/wallet.


  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  const handleConnectWallet = async () => {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
    setIsconnected(true);
  };

  return (
    <Html lang="en">
      <Head />

      <body className="dark:bg-gray-700 bg-green-50">
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="fixed right-20 top-6">
            <button
              className="px-10 py-2 text-md font-bold bg-slate-900 text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out"
              onClick={handleConnectWallet}
            >
              Connect wallet
            </button>
          </div>
          <div className="fixed right-6 top-6">
            {theme === "dark" ? (
              <Fade triggerOnce direction="down" delay={600}>
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              </Fade>
            ) : (
              <Fade triggerOnce direction="down" delay={600}>
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-900 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="white" />
                </button>
              </Fade>
            )}
          </div>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}

export default Document