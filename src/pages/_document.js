"use client";
import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "next-themes";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body className="dark:bg-gray-700 bg-green-50">
        <ThemeProvider enableSystem={true} attribute="class">
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
