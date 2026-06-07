import React from "react";
import HeadinLine from "../HeadinLine/HeadinLine";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CustomerReviewData from "../../assets/CustomerReviewData/CustomerReviewData";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Testomonials = () => {
  return (
    <section>
      <div className="max-w-[1300px] md:px-10 px-5 md:py-20 py-10">
        <HeadinLine highlight="Customer" heading="Review" />

        {/* Arrow icon */}
        <div className="flex justify-end gap-3 md:mb-5 mb-3">
          <button className="customPrev w-9 h-9 text-2xl flex justify-center items-center text-zinc-800 bg-zinc-200 hover:bg-orange-500 hover:text-white rounded-sm ">
            <IoIosArrowBack />
          </button>
          <button className="customNext w-9 h-9  text-2xl flex justify-center items-center text-zinc-800 bg-zinc-200 hover:bg-orange-500 hover:text-white rounded-sm ">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: ".customNext",
            prevEl: ".customPrev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {CustomerReviewData.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="bg-zinc-100 rounded-xl md:p-8 p-5"
              >
                <div className="flex items-center gap-5">
                  <div>
                    <img
                      src={item.image}
                      className="md:w-16 w-12 md:h-16 h-12 bg-red-300 rounded-full outline-2 outline-orange-500 outline-offset-3"
                    />
                  </div>
                  <div className="">
                    <h5 className="text-xl font-semibold">{item.name}</h5>
                    <p className="text-zinc-600 mb-2">{item.profession}</p>
                    <div className="flex items-center gap-2">
                      <span className="flex gap-1 text-sm text-orange-400">
                        {Array.from({ length: item.rating }, (_, index) => (
                          <FaStar />
                        ))}
                      </span>
                      <span className="text-sm">({item.rating})</span>
                    </div>
                  </div>
                </div>
                <div className="md:mt-10 mt-5 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testomonials;
