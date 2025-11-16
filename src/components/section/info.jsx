import React, { useState } from "react";
import bgInfo from "../../assets/alex-meza-lfM-AerA0wU-unsplash.jpg";

export default function Info() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center md:justify-end bg-cover bg-bottom overflow-hidden px-4 sm:px-6 md:pr-8"
      style={{
        backgroundImage: `url(${bgInfo})`,
        backgroundPosition: "center bottom 35%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg text-center md:text-right text-white sm:mr-4 md:mr-16 lg:mr-24 xl:mr-32">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
          Indulge in Luxury at Posh Nail Hub
        </h2>

        <p className="text-base sm:text-lg mb-3 sm:mb-4 drop-shadow-md">
          At Posh Nail Hub, we believe that beauty begins at your fingertips. 
        </p>

        <p className="text-base sm:text-lg drop-shadow-md">
          Book your appointment today and let us pamper you with elegance, precision, and style.
        </p>
        <p className="mt-4 text-xs sm:text-sm text-gray-300 drop-shadow-md">
          By booking, you agree to be contacted by Posh Nail Hub regarding your appointment.
          You can reschedule or cancel anytime.
        </p>
      </div>
    </section>
  );
}
