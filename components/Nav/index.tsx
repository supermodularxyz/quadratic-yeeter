import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Nav = () => {
  return (<nav className="container mx-auto flex flex-1 justify-between py-3 items-center">
    <div>QR Yeeter</div>
    <div><ConnectButton /></div>
  </nav>)
}

export default Nav
