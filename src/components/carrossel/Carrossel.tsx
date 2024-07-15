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
          <div className="bg-red-600 h-full flex items-center justify-center text-white">
            <div className="p-6 text-center">
              <span className="text-3xl font-sans">
                15.1 POR 1.000 NASCIDOS VIVOS FOI A TAXA DE MORTALIDADE INFANTIL EM RORAIMA EM 2019​​.
              </span>
              <h6 className="text-sm mt-2">*World Bank Open Data</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../src/assets/test2.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../src/assets/test2.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../src/assets/test2.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomCarousel;