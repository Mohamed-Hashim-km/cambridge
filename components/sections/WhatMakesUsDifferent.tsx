"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Inquiry Based Learning",
    description: "Students learn through understanding, questioning \n and exploration.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0L29.2485 16.8182L45.0467 9.65406L34.5482 23.4628L50 31.3486L32.6573 31.748L36.1263 48.7442L25 35.4359L13.8736 48.7442L17.3427 31.748L0 31.3486L15.4494 23.4628L4.95092 9.65406L20.7491 16.8182L25 0Z" fill="#E31C22"/>
      </svg>
    ),
    image: "/images/whatMakes/2.webp"
  },
  {
    id: 2,
    title: "Robotics & Technology",
    description: "Dedicated robotics labs and technology integration in learning.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.843 0H12.157C10.617 0 9.19236 0.822321 8.4213 2.15726L0.578294 15.7415C-0.192765 17.0765 -0.192765 18.719 0.578294 20.0539L8.4213 33.6382C9.19236 34.9732 10.6149 35.7955 12.157 35.7955H27.843C29.383 35.7955 30.8076 34.9732 31.5787 33.6382L39.4217 20.0539C40.1928 18.719 40.1928 17.0765 39.4217 15.7415L31.5787 2.15726C30.8076 0.822321 29.3851 0 27.843 0Z" fill="#FB7824"/>
      </svg>
    ),
    image: "/images/whatMakes/3.webp"
  },
  {
    id: 3,
    title: "Sports Infrastructure",
    description: "Turf ground for football and cricket with multi-court \n sports facilities.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.4043 6.31892L30.0994 7.76263L31.4753 7.23183C36.2563 5.38908 40.0378 11.5385 36.2356 14.9736L35.1401 15.9618L36.5669 16.3421C41.5191 17.6615 40.9639 24.8594 35.8667 25.4033L34.3985 25.5596L35.3283 26.7059C38.5602 30.6831 33.879 36.1813 29.4368 33.6251L28.1569 32.8892L28.2359 34.363C28.5126 39.4809 21.4936 41.1768 19.4024 36.4975L18.8001 35.1498L17.9982 36.3883C15.2143 40.6912 8.53975 37.9374 9.59571 32.923L9.90064 31.4793L8.52469 32.0101C3.74371 33.8529 -0.0377918 27.7035 3.76441 24.2683L4.8599 23.2801L3.43313 22.8999C-1.51915 21.5804 -0.963874 14.3826 4.13334 13.8386L5.60152 13.6824L4.67167 12.5361C1.4398 8.55883 6.12102 3.0607 10.5632 5.61683L11.8432 6.3528L11.7641 4.87898C11.4874 -0.238935 18.5064 -1.93487 20.5976 2.74448L21.2 4.09219L22.0018 2.85365C24.7857 -1.44924 31.4603 1.30453 30.4043 6.31892Z" fill="#3F9C49"/>
      </svg>
    ),
    image: "/images/whatMakes/4.webp"
  },
  {
    id: 4,
    title: "Leadership Skills",
    description: "Monthly competitions and stage programs.",
    icon: (
      <svg width="28" height="30" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.08263 3.10245L0.0152446 36.1234C-0.227141 38.7404 2.45193 40.6381 4.84082 39.5396L34.9698 25.6861C37.3566 24.5886 37.6611 21.3166 35.5176 19.7991L8.45401 0.632638C6.30958 -0.886923 3.32501 0.485407 3.08263 3.10245Z" fill="#0095D6"/>
      </svg>
    ),
    image: "/images/whatMakes/5.webp"
  },
  {
    id: 5,
    title: "Balanced Development",
    description: "Academics, sports, skills and values combined.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#662C8A"/>
      </svg>
    ),
    image: "/images/whatMakes/6.webp"
  }
];

export default function WhatMakesUsDifferent() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="relative w-full pt-10 lg:pt-24 z-10 ">
      <div className="container mx-auto px-4 ">
         
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-24 ">
          
          {/* Left Side: Heading & Image */}
          <div className="flex flex-col w-full lg:w-[35%]">
            <h2 className="text-3xl md:text-4xl font-bold text-primary max-w-xl leading-tight mb-8 lg:mb-12">
              What Makes Cambridge<br className="hidden md:block" />
              International School<br className="hidden md:block" />
              Different
            </h2>

            {/* Image with Yellow Shape */}
            <div className="relative mt-4 max-w-md lg:max-w-none mx-auto lg:mx-0 w-full">
              {/* STATIC Image Container */}
              <div className="relative z-10 rounded-xl overflow-hidden aspect-[4/3] shadow-md bg-gray-200">
                <Image 
                  src="/images/whatMakes/1.webp" 
                  alt="Cambridge Different Feature"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Yellow SVG Shape overlay */}
              <div className="absolute -top-6 -right-6 lg:-top-12 lg:-right-12 z-20 w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36">
                <svg width="100%" height="100%" viewBox="0 0 152 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M61.1111 0.657681C99.7554 -4.62272 135.411 22.4671 140.69 61.1032L151.372 139.282L11.3398 158.416L0.657365 80.2375C-4.62304 41.5932 22.4668 5.93809 61.1029 0.658797L61.1111 0.657681Z" fill="#FFE04F"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="flex flex-col justify-start lg:pt-2 w-full max-w-2xl">
            {features.map((feature) => {
              const isActive = feature.id === activeId;
              
              return (
                <motion.div 
                  layout // Smooths out changes in height for sibling elements
                  key={feature.id} 
                  className="flex items-start justify-between border-b border-[#DBDBDB80] last:border-b-0 overflow-hidden py-4 cursor-pointer hover:bg-gray-50/50 transition-colors duration-300"
                  onMouseEnter={() => !isActive && setActiveId(feature.id)}
                >
                  <div className="flex-1 min-w-0">
                    {/* Title & Icon Row */}
                    <div className="flex items-center gap-3 lg:gap-5">
                      <div className="flex-shrink-0 w-8 lg:w-10 flex items-center justify-center scale-90 lg:scale-100">
                        {feature.icon}
                      </div>
                      <h3 className={`text-lg md:text-xl lg:text-[28px] font-semibold transition-colors duration-300 ${isActive ? 'text-[#1A1A1A]' : 'text-[#333333]'}`}>
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Framer Motion Expanded Text Content */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-11 lg:ml-[60px] pb-2 pt-2">
                            <p className="text-primary text-sm md:text-base whitespace-pre-line leading-relaxed flex-1 m-0">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Thumbnail Image - Fixed jumping logic */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, width: 0, height: 0, marginLeft: 0 }}
                        animate={{ 
                          opacity: 1, 
                          width: "auto", 
                          height: "auto", 
                          marginLeft: "1rem" 
                        }}
                        exit={{ opacity: 0, width: 0, height: 0, marginLeft: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hidden sm:block overflow-hidden origin-right flex-shrink-0"
                      >
                        {/* We put the actual image size on this inner wrapper, so the outer motion.div neatly unmasks it instead of popping it into existence */}
                        <div className="w-[100px] lg:w-[130px] h-[70px] lg:h-[110px] relative rounded-md overflow-hidden shadow-sm bg-gray-200">
                          <Image 
                            src={feature.image} 
                            alt={feature.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div> 
          
        </div>
       
      </div>
    </section>
  );
}