/* eslint-disable no-irregular-whitespace */



import "react-alice-carousel/lib/alice-carousel.css";

function AutoPlay() {



  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full "
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}

          <div
            className="hidden duration-700 ease-in-out   "
            data-carousel-item
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczNuqwApNd4zgAjNuA8vYSKhoJHTJ6Du7GQ6xlQ4ErUCYX6Efqmtm0s4iKG7vikEE7l_wu1Hv9gx9uvkFzl8rCrBW7BJobbYU6fQExfx-V-uMlc42x8mIr2vkZ8kmqmwleP36HIEdw1CJHK8IqmUnpm8OXo1da2oGLAIlo7r28O8a1r58VeTbwIEW-KSCvXlcNMsHe4dF0IxvSgMDJBK93v8d4-vUQOklRMlC4vAtlL0vJMOrOQZVAvkEOzFmgGQW7is7fyqgK4vSf18qsaVo7UiyMOl2sXqmnF3CgkU_X0YCWc_C0C8KANsfO6wEHxT_NeEgE9qohJorhDSraHrpRmQAbNlYriv4MMHL90TiUL5-em7_2LYd1M55y_7K-5G1h41bNc8TGqk-TKmXpjydVehhJBW1Nkj-d4s_SYXmbyyb5upI3Kcdh_fJ4Y5ZYmYmjjSwJlm4QyGDjOjdjxccY0ZqvNFo2PS_oSgkup36g2F9PC_KvxuOEyFBlikR5yD_Hip8S4uthJHx52iZdXUh76ukD0mTQd7IYdZLb0MUEOnTTspHJlUUIiQnhdF7MmM2arkMNDfL17epCZ6Iz2LohSfW2r3z3pj_o2gakdytE382mg_yL4rVjDv13f4qHHkS51bCaHCiSnJT8mfPL2ddZSKM9LQrwV-7CejQwy_8QypZo4csQDx0aNSKSfqgQa8nhBWDYCpqhTMHXopWnUyMIUaTgmJBiv3mg9NXqaBXREkVZxb57cQs-6B8G5iNaV4MKnR5vdTe9yrbQppg4uVgkakS0y6MvG3y3XHSyX1geQv4cZM7Z991sqSGWe4foZS7Lj-GwUnhYbS2KA_ggzp81J2GZDBjqkhalDNTCcpBSrsqhydh4ZMBN1ZHLsU_ms_Fum16aD-62ke1Ifz1mhJejY-=w1600-h900-s-no-gm?authuser=0"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
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
  );
}
export default AutoPlay;


