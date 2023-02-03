import React from "react";

import { HiMenu } from "react-icons/hi";

export default function MobileNavbarItem() {
  return (
    <div className="mobileNavbar_container">
      <div className="mobileNavbar_logoContainer">
        <img src="/images/logo.png" alt="logo" className="mobileNavbar_logo" />
      </div>

      <div>
        <HiMenu size={30} color={"white"} />
      </div>
    </div>
  );
}
