import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importando as imagens
import carrossel1 from '../../../src/assets/carrossel1.jpeg';
import carrossel2 from '../../../src/assets/carrossel2.jpeg';
import carrossel3 from '../../../src/assets/carrossel3.jpeg';
import carrossel4 from '../../../src/assets/carrossel4.jpeg';

function CustomCarousel() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="relative w-full h-auto rounded-lg "
      >
        <SwiperSlide>
          <img
            src={carrossel1}
            className="block w-full h-fit"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carrossel2}
            className="block w-full h-fit"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carrossel3}
            className="block w-full h-fit"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carrossel4}
            className="block w-full h-fit"
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomCarousel;