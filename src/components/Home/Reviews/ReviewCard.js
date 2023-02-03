import React from "react";

export default function ReviewCard({ review }) {
  return (
    <div className="review_card">
      <div className="review_personContainer">
        <img
          alt={review.desc}
          src={review.person.img}
          className="review_personImg"
        />

        <div className="review_personInfo">
          <div className="review_personName">{review.person.name}</div>
          <div>{review.person.role}</div>
        </div>
      </div>
      <div className="review">{review.desc}</div>
    </div>
  );
}
