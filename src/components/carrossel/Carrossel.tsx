/* eslint-disable no-irregular-whitespace */


import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function AutoPlay() {

  // const src =
  //   "//images.pexels.com/photos/13740563/pexels-photo-13740563.jpeg";
  // const items = [
  //   <div
  //     className="bg-red-600  h-96 max-h-96 flex items-center text-center justify-center text-white item"
  //     data-value="1"
  //   >
  //     <div className="p-6">
  //       <span className="text-3xl font-sans ">
  //         15.1 POR 1.000 NASCIDOS VIVOS FOI A TAXA DE MORTALIDADE INFANTIL EM
  //         RORAIMA EM 2019​​.
  //       </span>
  //       <h6 className="text-sm mt-2">*World Bank Open Data</h6>
  //     </div>
  //   </div>,

  //   <div
  //     className="relative h-96 max-h-96 bg-cover bg-center bg-no-repeat justify-center items-center  object-cover item"
  //     data-value="2"
  //   >
  //     <img src={src} alt="" />

  //     <div className="absolute inset-0 bg-blue-500 opacity-50 clip-diagonal" />
  //     <div className="absolute inset-0 flex items-center justify-center">
  //       <h1 className="text-white text-lg md:text-xl lg:text-5xl font-bold ">
  //         Dê uma mão amiga envolva-se

  //       </h1>
  //     </div>
  //   </div>,
  // ];

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://www.comidaquecura.com.br/arquivos/CARROUSSEL/3/3040808.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div
            className="bg-red-600  h-96 max-h-96 flex items-center text-center justify-center text-white item hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="p-6">
              <span className="text-3xl font-sans ">
                15.1 POR 1.000 NASCIDOS VIVOS FOI A TAXA DE MORTALIDADE INFANTIL
                EM RORAIMA EM 2019​​.
              </span>
              <h6 className="text-sm mt-2">*World Bank Open Data</h6>
            </div>
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        {/* <div className="absolute  z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div> */}
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4  dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4  dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
    // <AliceCarousel
    //   autoPlay

    //   autoPlayStrategy="none"
    //   autoPlayInterval={2000}
    //   animationDuration={2000}
    //   animationType="fadeout"
    //   infinite
    //   touchTracking={false}
    //   disableDotsControls
    //   disableButtonsControls
    //   items={items}
    // />
  );
}
export default AutoPlay;


