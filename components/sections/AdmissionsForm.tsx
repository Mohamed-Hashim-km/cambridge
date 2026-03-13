"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { useSearchParams } from "next/navigation";

const WEBHOOK_URL = "/api/enquiry";

const COUNTRY_CODES = [
  '+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+36',
  '+39', '+40', '+41', '+43', '+44', '+45', '+46', '+47', '+48', '+49',
  '+51', '+52', '+53', '+54', '+55', '+56', '+57', '+58', '+60', '+61',
  '+62', '+63', '+64', '+65', '+66', '+81', '+82', '+84', '+86', '+90',
  '+91', '+92', '+93', '+94', '+95', '+98', '+212', '+213', '+216',
  '+218', '+220', '+221', '+234', '+254', '+255', '+256', '+260', '+263',
  '+351', '+352', '+353', '+354', '+358', '+380', '+381', '+385', '+386',
  '+420', '+421', '+886', '+960', '+961', '+962', '+963', '+964', '+965',
  '+966', '+971', '+972', '+973', '+974', '+975', '+976', '+977',
];

export default function AdmissionsForm() {
  const [countryCode, setCountryCode] = useState('+91');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [grade, setGrade] = useState('');
  const [location, setLocation] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Extract UTM and Ad parameters
    const utm_source = searchParams.get('utm_source') || '';
    const utm_medium = searchParams.get('utm_medium') || '';
    const utm_campaign = searchParams.get('utm_campaign') || '';
    const campaign = searchParams.get('campaign') || '';
    const ad_group = searchParams.get('ad_group') || '';
    const ad_name = searchParams.get('ad_name') || '';
    const ad_id = searchParams.get('ad_id') || '';
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'admissions_form',
          parentName,
          phone: `${countryCode}${phone}`,
          childAge,
          grade,
          location,
          visitDate,
          premise: "campbridge",
          utm_source,
          utm_medium,
          utm_campaign,
          campaign,
          ad_group,
          ad_name,
          ad_id
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Webhook submission failed:', err);
    } finally {
      setSubmitting(false);
    }
  };
  
  // Restored your original coordinates and parameters
  const lat = 12.86649880088944;
  const lng = 74.9199334800994;
  const zoom = 18;

  // Restored your specific URL structure
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Use flex-col-reverse for mobile to put Map (bottom div) on top, then grid for desktop */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Form Section */}
          <div className="flex flex-col w-full py-3 max-w-lg mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-[34px] font-bold text-[#1A1A1A] mb-6 leading-snug">
              Admissions Open 2026-27
              <br />
              for Nursery to Grade 10
            </h2>

          
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Parent Name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
                  required
                />
              </div>

              <div className="flex items-center border-b border-primary/50 py-2 transition-colors focus-within:border-gray-800">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-transparent text-gray-500 font-medium text-base md:text-xl focus:outline-none cursor-pointer appearance-none"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <span className="mr-2 text-primary/50 font-medium">|</span>
                <input
                  type="tel"
                  placeholder="Parent Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    placeholder="Child's Age"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Located in"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Preferred Visit Date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)}
                  className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
                />
              </div>

              <div className="mt-2 flex justify-center md:justify-start">
                <Button type="submit" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
            
          </div>

          {/* Right Column: Map Section (Appears first on mobile due to flex-col-reverse) */}
          <div className="w-full h-[300px] md:h-[450px] lg:h-auto rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 relative">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full contrast-[95%]"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}