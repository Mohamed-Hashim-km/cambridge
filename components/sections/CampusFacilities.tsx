"use client";

import React from "react";
import Image from "next/image";
// 1. Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const facilities = [
  "Spacious Green\nCampus",
  "Dedicated\nSports Areas",
  "Modern Learning\nFacilities",
  "Library and Labs",
  "Robotics and\nInnovation Activities",
  "Sports Training with\nExperienced Coaches",
  "Monthly\nCompetitions",
  "Cultural and Stage\nPrograms",
  "Saturday Club\nActivities",
];

// Mobile Card Component: Image background with text overlay at bottom (No flip)
const MobileFacilityCard = ({ text, idx }: { text: string; idx: number }) => (
  <div className="relative w-full h-[220px] sm:h-[260px] rounded-lg overflow-hidden border border-[#DBDBDB]">
    <Image src={`/images/cardImages/${idx + 1}.webp`} alt={text.replace("\n", " ")} fill className="object-cover" />
    {/* Dark gradient overlay to make text readable */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

    {/* Text positioned at the bottom */}
    <div className="absolute bottom-5 left-5 pr-4">
      <h3 className="text-white text-2xl font-semibold whitespace-pre-line text-left">{text}</h3>
    </div>
  </div>
);

// Desktop Card Component: Original 3D Flip effect
const DesktopFacilityCard = ({ text, idx }: { text: string; idx: number }) => (
  <div className="group h-[230px] w-full [perspective:1000px]">
    <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front face (Text) */}
      <div className="absolute inset-0 [backface-visibility:hidden] bg-white border-[3px] border-[#DBDBDB] rounded-lg p-8 flex items-center justify-center text-center">
        <h3 className="text-[#1A1A1A] text-2xl lg:text-[28px] font-semibold whitespace-pre-line">{text}</h3>
      </div>

      {/* Back face (Image) */}
      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg overflow-hidden border border-[#DBDBDB] bg-white">
        <Image src={`/image/cardImages/${idx + 1}.png`} alt={text.replace("\n", " ")} fill className="object-cover" />
      </div>
    </div>
  </div>
);

export default function CampusFacilities() {
  return (
    <section className="relative w-full py-10 md:py-24 ">
      <svg className="absolute bottom-0 md:hidden left-0 w-full lg:w-[1712px] xl:w-[2200px] z-0 pointer-events-none " width="512" height="311" viewBox="0 0 512 311" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.62305 1.16821C105.017 144.848 301.364 243.796 510.678 308.967" stroke="url(#paint0_linear_128_39)" stroke-width="4"/>
<defs>
<linearGradient id="paint0_linear_128_39" x1="236.185" y1="-1904.2" x2="706.607" y2="520.62" gradientUnits="userSpaceOnUse">
<stop stop-color="#E31C22"/>
<stop offset="1" stop-color="#FB7824"/>
</linearGradient>
</defs>
</svg>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 lg:mb-16 gap-4 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary max-w-xl leading-tight">Campus and Facilities</h2>
          <p className="text-primary text-base max-w-sm flex-1 leading-relaxed md:pt-2">
            Located in Adyar on the banks of the Netravathi River, the campus provides a peaceful environment where children can focus and grow.
          </p>
        </div>

        {/* 2. Mobile Swiper (Visible below 1024px) */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
            }}
          >
            {facilities.map((text, idx) => (
              <SwiperSlide key={idx}>
                <MobileFacilityCard text={text} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 3. Desktop Grid (Visible 1024px and up) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 relative z-10">
          {facilities.map((text, idx) => (
            <DesktopFacilityCard key={idx} text={text} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
