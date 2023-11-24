import React from "react";
import DesktopNav from "@/components/navbar/desktopnav/DesktopNav";
import MobileNav from "./mobilenav/MobileNav";

const Navbar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navbar;
