import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop",
    title: "Optimized Image Size, Fast Loading, and Auto Youtube Thumbnail",
    meta: { comments: 0, author: "Tien Nguyen", date: "Apr 17, 2015" },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
    title: "Make Your Morning Better With Coffee",
    meta: { comments: 4, author: "Jane Doe", date: "Jun 15, 2024" },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop",
    title: "Design Aesthetic, Clean and Minimal",
    meta: { comments: 2, author: "John Smith", date: "Jan 03, 2025" },
  },
];

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
        {slides.map((s) => (
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
                  to={`/main/slider/${s.id}`}
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
