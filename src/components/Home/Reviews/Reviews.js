import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import "swiper/css/navigation";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { reviews } from "../../../utils/data";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="review_container">
      <div className="review_title">Check Out Recent Reviews</div>

      <div className="review_dataContainer">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper flex items-center justify-center relative"
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            );
          })}

          <div className="flex top-[40%] absolute px-3 z-10 w-full justify-between">
            <PrevBtn />
            <NextBtn />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
