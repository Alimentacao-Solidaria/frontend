import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CustomCarousel() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="relative h-56 overflow-hidden rounded-lg md:h-96"
      >
        <SwiperSlide>
          <img
            src="../../../src/assets/carrossel1.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            src="../../../src/assets/carrossel2.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            src="../../../src/assets/carrossel3.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            src="../../../src/assets/carrossel4.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomCarousel;