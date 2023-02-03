import React from "react";
import Btn from "../../common/Btn/Btn";
import * as Scroll from "react-scroll";

export default function Banner() {
  const scroll = Scroll.animateScroll;

  return (
    <div className="banner_container">
      <div className="banner_slogan">Build apps for your business</div>

      <div className="banner_itemListContainer">
        <div className="banner_imgContainer">
          <img alt="img" src="/images/banner2.png" className="banner_img" />
        </div>

        <div className="row-span-2 banner_imgContainer">
          <img alt="img" src="/images/banner1.png" className="banner_img" />
        </div>

        <div className="banner_imgContainer">
          <img alt="img" src="/images/banner3.png" className="banner_img" />
        </div>

        <div className="banner_imgContainer">
          <img alt="img" src="/images/banner4.png" className="banner_img" />
        </div>

        <div className="banner_imgContainer">
          <img alt="img" src="/images/banner5.webp" className="banner_img" />
        </div>
      </div>

      <div className="banner_desc">
        We are providing many colorful features to your enterprice business. You
        can customize your features depending on your requirements. We are here
        for your service.
      </div>

      <Btn title="Get Started" action={() => scroll.scrollToBottom()} />
    </div>
  );
}
