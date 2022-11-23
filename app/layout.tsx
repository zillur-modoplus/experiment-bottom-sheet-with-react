"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { roboto } from "../lib/fonts";

export default function RootLayout({ children }: any) {
  return (
    <html className={roboto.className} lang="en">
      <head />
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
