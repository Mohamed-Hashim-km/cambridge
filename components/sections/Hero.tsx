"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import EnquiryModalWrapper from "./EnquiryModalWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const campusData = [
  { image: "/images/hero/1.png", name: "Green Campus", location: "Adyar, Mangalore." },
  { image: "/images/hero/2.png", name: "Robotics and technology learning", location: "Adyar, Mangalore." },
  { image: "/images/hero/3.png", name: "Sports turf and multi-court facilities", location: "Adyar, Mangalore." },
  { image: "/images/hero/4.png", name: "Transport across Mangalore and surrounding areas", location: "Adyar, Mangalore." },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const updateCompletedBullets = useCallback((swiper: SwiperType) => {
    const bullets = swiper.pagination?.el?.querySelectorAll(".swiper-pagination-bullet");
    if (!bullets) return;
    bullets.forEach((bullet, index) => {
      if (index < swiper.realIndex) {
        bullet.classList.add("swiper-bullet-completed");
      } else {
        bullet.classList.remove("swiper-bullet-completed");
      }
    });
  }, []);

  return (
    <div className=" bg-white relative overflow-hidden font-sans">
      {/* Background Red Curve SVG - Adjusted scale for mobile to prevent massive overflow */}
      <div className="absolute hidden md:block -top-40 md:-top-96 -right-1 z-0 pointer-events-none w-[200px] md:w-[500px] lg:w-[600px] translate-x-[20%] md:translate-x-[30%] -translate-y-10">
        <svg viewBox="0 0 666 1129" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M126.853 2.05966C-258.442 643.507 358.43 827.747 662.219 1125.5" stroke="url(#paint0_linear_68_2)" strokeWidth="8" />
          <defs>
            <linearGradient id="paint0_linear_68_2" x1="-48.2408" y1="-38.3603" x2="-1010.08" y2="4127.8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E31C22" />
              <stop offset="1" stopColor="#E31C22" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* --- NAVBAR SECTION --- */}
      <nav className="w-full relative z-50">
        {/* Adjusted padding: py-6 for mobile, py-10 for desktop */}
        <div className="container mx-auto px-4 py-6 md:py-10 flex justify-between items-center">
          <Image src="/svgs/navLogo.svg" width={220} height={220} alt="Logo" className="hidden md:block" />
          <Image src="/svgs/navLogo.svg" width={180} height={180} alt="Logo" className="block md:hidden" />
          <div>
            <Button className="" onClick={() => setIsModalOpen(true)}>
              Apply Now
            </Button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full ">
        <div className="container mx-auto pt-4 md:pt-5 px-4 relative z-10 ">
          {/* Adjusted padding-bottom: pb-12 for mobile, pb-32 for desktop */}
          <div className="border-b-[3px] pb-12 md:pb-32 border-[#DBDBDB]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary md:mb-6 leading-tight">
              A School Where Children
              <br className="hidden md:block" />
              Learn, Explore and Grow
              <br className="hidden md:block" />
              with Confidence
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-8 items-stretch">
              {/* Left Column: Text & Buttons */}
              <div className="flex col-span-5 flex-col items-start space-y-6 md:space-y-8 mt-4 md:my-10">
                <h2 className="text-xl md:text-2xl font-bold text-primary leading-tight">
                  Admissions Open from
                  <br />
                  Nursery to Grade 10
                </h2>

                <div>
                  <Button variant="secondary" className="w-full md:w-auto" onClick={() => setIsModalOpen(true)}>
                    Book a Campus Visit
                  </Button>
                </div>

                <div className="md:mt-auto md:space-y-1 max-w-[80%]">
                  <p className="text-primary font-bold text-lg md:text-xl  transition-all duration-300">{campusData[activeIndex].name}</p>
                  <p className="text-[#191919] text-lg md:text-xl transition-all duration-300">{campusData[activeIndex].location}</p>
                </div>
              </div>

              {/* Right Column: Swiper Slider */}
              <div className="relative col-span-7 w-full mt-10 lg:mt-0">
                <div className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-100">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    className="w-full aspect-[4/3] md:aspect-video rounded-xl mySwiper"
                    onSwiper={(swiper: SwiperType) => {
                      swiperRef.current = swiper;
                      setActiveIndex(swiper.realIndex);
                    }}
                    onSlideChange={(swiper: SwiperType) => {
                      setActiveIndex(swiper.realIndex);
                      updateCompletedBullets(swiper);
                    }}
                  >
                    {campusData.map((campus, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          width={1000}
                          height={1000}
                          src={campus.image}
                          alt={`Campus View ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Playful Green Face Graphic - Adjusted positioning so it doesn't vanish on mobile */}
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-20 z-20 w-24 h-24 md:w-36 md:h-36 drop-shadow-md">
                  <svg width="100%" height="100%" viewBox="0 0 219 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M88.7765 196.314C137.114 207.894 185.687 178.096 197.267 129.758C208.847 81.4199 179.049 32.8469 130.711 21.2672C82.3727 9.68738 33.7998 39.4858 22.22 87.8237C10.6402 136.162 40.4386 184.735 88.7765 196.314Z"
                      fill="#91E69A"
                    />
                    {/* ... (rest of your SVG paths) ... */}
                    <path
                      d="M70.0281 112.408C78.2993 114.389 86.981 107.745 89.4191 97.5671C91.8573 87.3893 87.1287 77.5323 78.8576 75.5508C70.5864 73.5694 61.9048 80.2139 59.4666 90.3917C57.0284 100.57 61.757 110.427 70.0281 112.408Z"
                      fill="#3F9C49"
                    />
                    <path
                      d="M138.53 128.818C146.801 130.8 155.483 124.155 157.921 113.977C160.359 103.799 155.631 93.9425 147.36 91.961C139.088 89.9796 130.407 96.6241 127.969 106.802C125.53 116.98 130.259 126.837 138.53 128.818Z"
                      fill="#3F9C49"
                    />
                    <path
                      d="M68.9942 102.216C73.6615 103.335 78.3514 100.457 79.4695 95.7901C80.5876 91.1228 77.7104 86.4328 73.0431 85.3147C68.3758 84.1966 63.6859 87.0738 62.5678 91.7411C61.4497 96.4084 64.3269 101.098 68.9942 102.216Z"
                      fill="white"
                    />
                    <path
                      d="M138.139 117.876C142.806 118.994 147.496 116.117 148.614 111.449C149.732 106.782 146.855 102.092 142.188 100.974C137.52 99.8557 132.83 102.733 131.712 107.4C130.594 112.068 133.471 116.758 138.139 117.876Z"
                      fill="white"
                    />
                    <path
                      d="M98.9488 156.344C97.1692 155.918 95.356 155.288 93.5306 154.409C84.1747 149.895 80.1754 141.307 78.8799 137.829C78.2145 136.014 79.1382 134.004 80.9434 133.337C82.7584 132.671 84.7685 133.595 85.4461 135.402C86.4378 138.087 89.5106 144.705 96.5708 148.114C105.271 152.316 113.793 148.764 116.207 147.574C117.945 146.715 120.035 147.432 120.896 149.16C121.755 150.898 121.038 152.988 119.31 153.849C116.675 155.151 108.401 158.609 98.9585 156.347L98.9488 156.344Z"
                      fill="#191919"
                    />
                    <path
                      d="M69.8577 123.894C52.6059 119.761 41.9346 102.367 46.0675 85.1149C50.2003 67.863 67.595 57.1918 84.8468 61.3246C102.099 65.4575 112.77 82.8521 108.637 100.104C104.504 117.356 87.1096 128.027 69.8577 123.894ZM83.2161 68.132C69.718 64.8984 56.1084 73.2476 52.8749 86.7457C49.6413 100.244 57.9904 113.853 71.4885 117.087C84.9866 120.32 98.5962 111.971 101.83 98.4733C105.063 84.9752 96.7142 71.3656 83.2161 68.132Z"
                      fill="#191919"
                    />
                    <path
                      d="M137.281 140.046C120.029 135.913 109.357 118.518 113.49 101.267C117.623 84.0146 135.018 73.3434 152.27 77.4762C169.522 81.6091 180.193 99.0037 176.06 116.256C171.927 133.507 154.532 144.179 137.281 140.046ZM150.639 84.2836C137.141 81.05 123.531 89.3992 120.298 102.897C117.064 116.395 125.413 130.005 138.911 133.239C152.409 136.472 166.019 128.123 169.253 114.625C172.486 101.127 164.137 87.5172 150.639 84.2836Z"
                      fill="#191919"
                    />
                    <path
                      d="M115.932 105.451L104.408 102.69C102.531 102.24 101.37 100.348 101.82 98.4708C102.27 96.5939 104.162 95.4329 106.039 95.8825L117.563 98.6432C119.44 99.0928 120.601 100.985 120.151 102.862C119.702 104.739 117.809 105.9 115.932 105.451Z"
                      fill="#191919"
                    />
                    <path
                      d="M172.953 119.264C171.699 118.964 170.651 117.973 170.347 116.625C169.926 114.734 171.113 112.87 172.993 112.446L196.66 107.144C198.55 106.722 200.414 107.91 200.838 109.79C201.259 111.68 200.072 113.545 198.192 113.968L174.525 119.271C173.983 119.388 173.449 119.383 172.944 119.262L172.953 119.264Z"
                      fill="#191919"
                    />
                    <path
                      d="M46.6082 88.9974C46.1025 88.8763 45.6248 88.6384 45.1944 88.2886L26.4995 72.8381C25.0054 71.6061 24.8041 69.3985 26.0338 67.9141C27.2658 66.42 29.4734 66.2188 30.9578 67.4485L49.6527 82.8989C51.1468 84.1309 51.3481 86.3385 50.1184 87.8229C49.2363 88.8866 47.8627 89.2979 46.5984 88.9951L46.6082 88.9974Z"
                      fill="#191919"
                    />
                    <path
                      d="M45.8263 132.559C52.3913 133.948 58.2932 132.331 59.0086 128.949C59.724 125.566 54.9819 121.699 48.4169 120.31C41.8518 118.922 35.9499 120.538 35.2345 123.921C34.5191 127.303 39.2612 131.171 45.8263 132.559Z"
                      fill="#3F9C49"
                    />
                    <path
                      d="M157.045 155.89C163.61 157.278 169.512 155.662 170.227 152.279C170.943 148.897 166.201 145.029 159.636 143.641C153.071 142.252 147.169 143.869 146.453 147.251C145.738 150.634 150.48 154.501 157.045 155.89Z"
                      fill="#3F9C49"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles for swiper pagination - Adjusted width for mobile */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .mySwiper .swiper-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .mySwiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(8px);
            border: none;
            opacity: 1;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .mySwiper .swiper-bullet-completed {
            background: #E31C22 !important;
            backdrop-filter: none;
          }

          .mySwiper .swiper-pagination-bullet-active {
            width: 60px; /* Shorter for mobile */
            height: 8px;
            border-radius: 999px;
            position: relative;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.2); 
            border: none;
          }
          
          @media (min-width: 768px) {
            .mySwiper .swiper-pagination-bullet-active {
              width: 100px; /* Original width for desktop */
            }
          }

          .mySwiper .swiper-pagination-bullet-active::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #E31C22 0%, #FFFFFF 100%); 
            border-radius: 999px;
            animation: fillProgress 3.5s linear forwards; 
          }

          @keyframes fillProgress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `,
        }}
      />

      <EnquiryModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
