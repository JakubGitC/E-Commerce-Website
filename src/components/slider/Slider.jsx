import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./Slider.css";
//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from "../../data/products";

const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 600 ? 2 : 3
  );
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 700 ? 2 : 3);
    };

    // Dodaj nasłuchiwanie na zdarzenie zmiany rozmiaru okna
    window.addEventListener("resize", handleResize);

    // Zainicjuj wartość początkową
    handleResize();

    // Usuń nasłuchiwanie na zdarzenie zmiany rozmiaru okna po zamontowaniu komponentu
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={slidesPerView}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
