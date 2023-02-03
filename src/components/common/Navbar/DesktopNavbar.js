import React from "react";
import { navigations } from "../../../utils/navigations";
import Btn from "../Btn/Btn";
import NavbarItem from "./NavbarItem";
import * as Scroll from "react-scroll";

export default function DesktopNavbar() {
  const scroll = Scroll.animateScroll;

  return (
    <div className={`navbar_container md:flex hidden`}>
      <div className="navbar_logoContainer">
        <img src="/images/logo.png" alt="logo" className="navbar_logo" />
      </div>

      <div className="navbar_itemListContainer">
        {navigations.map((item) => {
          return (
            <NavbarItem
              key={item.id}
              title={item.title}
              dropList={item.dropList}
            />
          );
        })}

        <div className="ml-6">
          <Btn title="Get Started" action={() => scroll.scrollToBottom()} />
        </div>
      </div>
    </div>
  );
}
