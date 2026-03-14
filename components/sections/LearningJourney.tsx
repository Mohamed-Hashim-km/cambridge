"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const tabsData = [
  { id: "nursery", label: "Nursery", image: "/images/hero/1.png" },
  { id: "primary", label: "Primary School", image: "/images/hero/2.png" },
  { id: "middle", label: "Middle School", image: "/images/hero/3.png" },
  { id: "secondary", label: "Secondary School", image: "/images/hero/4.png" },
];

export default function LearningJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabsData.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background SVG Line */}
       <div className="absolute hidden   inset-0 w-[100vw] z-0 pointer-events-none md:flex items-end justify-center">
        <svg width="2052" height="424" viewBox="0 0 2052 424" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2048.01 167.629C1513.53 803.679 531.312 37.7412 0.253983 3.99202" stroke="url(#paint0_linear_86_2)" stroke-width="8" />
          <defs>
            <linearGradient id="paint0_linear_86_2" x1="1620.25" y1="-1802.6" x2="18.5241" y2="2161.81" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E31C22" />
              <stop offset="1" stop-color="#FB7824" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto pt-8 md:pt-24 px-4">
        <div className="border-b-[3px] border-[#DBDBDB] pb-10 md:pb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-12 max-w-xl leading-tight">
            A Journey Through Every Stage of Learning
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="w-full md:w-[55%] aspect-[4/3] md:aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                width={1000}
                height={1000}
                src={tabsData[activeIndex].image}
                alt={tabsData[activeIndex].label}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            <div className="w-full md:w-[40%] flex flex-col">
              {tabsData.map((tab, index) => {
                const isActive = index === activeIndex;
                const isLast = index === tabsData.length - 1;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveIndex(index)}
                    className={`text-left py-4 md:py-5 text-lg md:text-xl cursor-pointer transition-all duration-300 focus:outline-none ${
                      !isLast ? "border-b border-[#DBDBDB]" : ""
                    } ${isActive ? "text-[#E31C22] font-bold" : "text-primary font-semibold hover:text-primary/90"}`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}