import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { useSwiper } from "swiper/react";

export default function NextBtn() {
  const swiper = useSwiper();

  return (
    <div onClick={() => swiper.slideNext()} className="review_swiperBtn">
      <HiChevronRight size={15} color={"black"} />
    </div>
  );
}
