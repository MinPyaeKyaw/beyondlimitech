import React from "react";
import { offers } from "../../../utils/data";

export default function Offer() {
  return (
    <div className="offer_container">
      <div className="offer_title">What we are offering</div>

      <div className="offer_contentContainer">
        {offers.map((offer) => {
          return (
            <div key={offer.id} className="offer_card">
              <img
                alt={offer.title}
                src={offer.image}
                className="offer_cardImg"
              />
              <div className="offer_cardTitle">{offer.title}</div>
              <div className="offer_cardDesc">{offer.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
