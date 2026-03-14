"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import EnquiryModalWrapper from "./EnquiryModalWrapper";

const stepsData = [
  {
    id: 1,
    title: "Step 1",
    desc: "Submit Enquiry",
    icon: "/svgs/admission/1.svg",
  },
  {
    id: 2,
    title: "Step 2",
    desc: "Schedule\nCampus Visit",
    icon: "/svgs/admission/2.svg",
  },
  {
    id: 3,
    title: "Step 3",
    desc: "Interaction with\nAdmissions Team",
    icon: "/svgs/admission/3.svg",
  },
  {
    id: 4,
    title: "Step 4",
    desc: "Complete Admission\nFormalities",
    icon: "/svgs/admission/4.svg",
  },
];

export default function AdmissionSteps() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Play animation only once
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pt-10 pb-5 md:py-16">
      {/* Inline styles for the SVG filling animation */}
      <style>{`
        @keyframes fillLine {
          0% { clip-path: inset(0 100% 0 0); } 
          100% { clip-path: inset(0 0 0 0); }
        }
        .dash-line-unfilled {
          clip-path: inset(0 100% 0 0);
        }
        .animate-dash-fill {
          animation: fillLine 5s ease-in-out forwards; 
        }
      `}</style>

      <div className="w-full container mx-auto px-4 flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3 tracking-tight">
            Admit your Child in just <br className="md:hidden" />4 Steps
          </h2>
          <p className="text-base md:text-xl text-primary/70 font-bold">Visit the campus and explore the environment before making a decision.</p>
        </div>

        {/* Steps Grid/Flex */}
        <div className="flex flex-col md:flex-row justify-between w-full relative">
          {/* SVG LINE - HIDDEN ON MOBILE (hidden md:block) */}
          <div className="hidden md:block absolute top-[60px] left-[60px] right-[60px] z-0 -translate-y-1/2">
            {/* Base Grey Dashed Line */}
            <svg className="w-full" height="2" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="100%" y2="1" stroke="#6D6D6D50" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Animated Colored Dashed Line overlay */}
            <svg
              className={`absolute top-0 left-0 w-full h-full ${isInView ? "animate-dash-fill" : "dash-line-unfilled"}`}
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="100%" y2="1" stroke="#6D6D6D" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {stepsData.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center w-full md:w-[220px] mb-12 md:mb-0">
              {/* Icon Container */}
              <div className="relative z-10 bg-white w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center px-4 rounded-full">
                <Image src={step.icon} alt={step.title} width={120} height={120} className="w-full h-full object-contain" />
              </div>

              {/* Step Text Container */}
              <div className="mt-4 md:mt-6 text-center flex flex-col items-center px-2">
                <h3 className="text-lg md:text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-lg md:text-xl text-primary mt-2 whitespace-pre-line leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="mt- md:mt-14" onClick={() => setIsModalOpen(true)}>
          Book a Campus Visit
        </Button>

        {/* Bottom Horizontal Line */}
        <div className="w-full border-b-[3px] border-[#DBDBDB] mt-16 md:mt-20"></div>
      </div>
      <EnquiryModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
