import React from "react";
import Lottie from "lottie-react";
import business from "./../../../utils/lotties/business.json";

export default function BusinessMove() {
  return (
    <div className="business_container">
      <div className="business_info">
        <div className="business_whiteTitle">Make the right move</div>
        <div className="business_redTitle">Business move</div>
        <div className="business_divider"></div>
        <div>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
      </div>

      <div className="business_lottie">
        <Lottie animationData={business} loop={true} />
      </div>
    </div>
  );
}
