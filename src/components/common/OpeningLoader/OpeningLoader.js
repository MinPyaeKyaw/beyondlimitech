import React from "react";
import Lottie from "lottie-react";
import opening from "./../../../utils/lotties/opening.json";

export default function OpeningLoader({ setLoading }) {
  return (
    <div className="opening_container">
      <div className="opening">
        <Lottie
          animationData={opening}
          loop={false}
          onComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
