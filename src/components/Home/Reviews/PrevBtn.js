import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useSwiper } from "swiper/react";

export default function PrevBtn() {
  const swiper = useSwiper();

  return (
    <div onClick={() => swiper.slidePrev()} className="review_swiperBtn">
      <HiChevronLeft size={15} color={"black"} />
    </div>
  );
}
