/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (<nav className="container mx-auto flex flex-1 justify-between py-3 items-center">
    <div>
      <Link href="/"><img src="/logo.svg" alt="Quadratic Yeeter logo" /></Link>
    </div>
    <div><ConnectButton /></div>
  </nav>)
}

export default Nav
