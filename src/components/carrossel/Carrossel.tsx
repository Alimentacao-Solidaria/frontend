/* eslint-disable no-irregular-whitespace */


import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function AutoPlay() {

  const src =
    "//images.pexels.com/photos/13740563/pexels-photo-13740563.jpeg";
  const items = [
    <div
      className="bg-red-600  h-96 max-h-96 flex items-center text-center justify-center text-white item"
      data-value="1"
    >
      <div className="p-6">
        <span className="text-3xl font-sans ">
          15.1 POR 1.000 NASCIDOS VIVOS FOI A TAXA DE MORTALIDADE INFANTIL EM
          RORAIMA EM 2019​​.
        </span>
        <h6 className="text-sm mt-2">*World Bank Open Data</h6>
      </div>
    </div>,

    <div
      className="relative h-96 max-h-96 bg-cover bg-center bg-no-repeat justify-center items-center  object-cover item"
      data-value="2"
    >

      <img src={src} alt="" />

      <div className="absolute inset-0 bg-blue-500 opacity-50 clip-diagonal" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-lg md:text-xl lg:text-5xl font-bold ">
          Dê uma mão amiga envolva-se
        </h1>
      </div>
    </div>,
  ];

  return(
    <AliceCarousel
      autoPlay

      autoPlayStrategy="none"
      autoPlayInterval={2000}
      animationDuration={2000}
      animationType="fadeout"
      infinite
      touchTracking={false}
      disableDotsControls
      disableButtonsControls
      items={items}
    />
  );
}
export default AutoPlay;


// import React from "react";
// import Slider from "react-slick";


// function AutoPlay() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,

//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div className="bg-red-600  h-96 max-h-96 flex items-center text-center justify-center text-white">
//             <div className="p-6">
//               <span className="text-3xl font-sans ">
//                 15.1 POR 1.000 NASCIDOS VIVOS FOI A TAXA DE MORTALIDADE INFANTIL
//                 EM RORAIMA EM 2019​​.
//               </span>
//               <h6 className="text-sm mt-2">*World Bank Open Data</h6>
//             </div>
//           </div>

//           <div className="relative h-96 max-h-96 bg-cover bg-center bg-no-repeat justify-center items-center  object-cover ">
//             <img
//               src={
//                 "https://images.pexels.com/photos/13740563/pexels-photo-13740563.jpeg"
//               }
//             />
//             <div className="absolute inset-0 bg-blue-500 opacity-50 clip-diagonal" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h1 className="text-white text-lg md:text-xl lg:text-5xl font-bold ">
//                 Dê uma mão amiga envolva-se
//               </h1>
//             </div>
//           </div>

//           <div
//             className="relative h-96 max-h-96 bg-cover bg-center bg-no-repeat justify-center items-center  object-cover slide-item slide-image"
//             style={{
//               backgroundImage:
//                 "url('https://images.pexels.com/photos/13740563/pexels-photo-13740563.jpeg')",
//               backgroundSize: "contain",
//             }}
//           >
//             <div className="absolute inset-0 bg-blue-500 opacity-50 clip-diagonal" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h1 className="text-white text-lg md:text-xl lg:text-5xl font-bold ">
//                 Dê uma mão amiga envolva-se
//               </h1>
//             </div>
//           </div>
//           <div
//             className="relative h-96 max-h-96 bg-cover bg-center bg-no-repeat justify-center items-center  object-cover "
//             style={{
//               backgroundImage:
//                 "url('https://images.pexels.com/photos/13740563/pexels-photo-13740563.jpeg')",
//               backgroundSize: "contain",
//             }}
//           >
//             <div className="absolute inset-0 bg-blue-500 opacity-50 clip-diagonal" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h1 className="text-white text-lg md:text-xl lg:text-5xl font-bold ">
//                 Dê uma mão amiga envolva-se
//               </h1>
//             </div>
//           </div>
//           <div
//             className="relative h-96 max-h-96 bg-cover bg-center bg-no-repeat justify-center items-center  object-cover "
//             style={{
//               backgroundImage:
//                 "url('https://images.pexels.com/photos/13740563/pexels-photo-13740563.jpeg')",
//               backgroundSize: "contain",
//             }}
//           >
//             <div className="absolute inset-0 bg-blue-500 opacity-50 clip-diagonal" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h1 className="text-white text-lg md:text-xl lg:text-5xl font-bold ">
//                 Dê uma mão amiga envolva-se
//               </h1>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default AutoPlay;
