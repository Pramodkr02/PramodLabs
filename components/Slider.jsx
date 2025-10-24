"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { sliderData } from "../utils/dummyData";

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mx-auto max-w-6xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="rounded shadow overflow-hidden"
      >
        {sliderData.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative h-[340px] sm:h-[400px] md:h-[460px]">
              <img
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <div className="mb-3 flex items-center gap-4 text-sm opacity-90">
                  <span>◦ {s.meta.comments}</span>
                  <span>{s.meta.author}</span>
                  <span>{s.meta.date}</span>
                </div>
                <h2 className="max-w-4xl text-2xl font-extrabold drop-shadow sm:text-4xl md:text-5xl">
                  {s.title}
                </h2>
                <Link
                  href={`/main/slider/${s.id}`}
                  className="mt-6 rounded bg-orange-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700 cursor-pointer inline-block"
                >
                  READMORE
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom nav buttons */}
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="hidden sm:inline-flex absolute left-3 top-1/2 z-10 -translate-y-1/2 items-center justify-center h-11 w-11 rounded-full bg-white/90 text-gray-800 shadow ring-1 ring-black/5 hover:bg-white hover:scale-105 transition cursor-pointer"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          ref={nextRef}
          aria-label="Next slide"
          className="hidden sm:inline-flex absolute right-3 top-1/2 z-10 -translate-y-1/2 items-center justify-center h-11 w-11 rounded-full bg-white/90 text-gray-800 shadow ring-1 ring-black/5 hover:bg-white hover:scale-105 transition cursor-pointer"
        >
          <FaChevronRight size={18} />
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;
