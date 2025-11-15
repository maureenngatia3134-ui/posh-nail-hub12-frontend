import React, { useState } from "react";
import bgInfo from "../../assets/tile-merchant-ireland-4hWaTsyoNaM-unsplash.jpg";

export default function Info() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBooking = () => {
    if (!name || !service || !time) {
      alert("Please fill in all fields before booking.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setBooked(true);
      setLoading(false);
    }, 1000);
  };

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
          Our professional nail artists blend creativity, care, and luxury to give you a flawless experience.
        </p>

        <p className="text-base sm:text-lg drop-shadow-md">
          Book your appointment today and let us pamper you with elegance, precision, and style.
        </p>

        <h4 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-semibold drop-shadow-lg">
          Make a Booking
        </h4>

        {!booked ? (
          <div className="mt-4 flex flex-col gap-3 sm:gap-4 items-center md:items-end">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-lg w-full sm:w-2/3 md:w-1/2 text-black"
            />

            <input
              type="text"
              placeholder="Service (e.g., Gel Manicure, Pedicure, Nail Art)"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="p-3 rounded-lg w-full sm:w-2/3 md:w-1/2 text-black"
            />

            <input
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="p-3 rounded-lg w-full sm:w-2/3 md:w-1/2 text-black"
            />

            <button
              onClick={handleBooking}
              disabled={loading}
              className={`p-3 rounded-lg w-full sm:w-auto text-white font-semibold transition-colors duration-300 ${
                loading
                  ? "bg-pink-400 cursor-wait"
                  : "bg-pink-500 hover:bg-pink-600"
              }`}
            >
              {loading ? "Booking..." : "Book Now"}
            </button>
          </div>
        ) : (
          <p className="mt-4 text-green-400 font-semibold drop-shadow-lg">
            Thank you, {name}! Your booking for <strong>{service}</strong> on{" "}
            <strong>{new Date(time).toLocaleString()}</strong> has been confirmed.
          </p>
        )}

        <p className="mt-4 text-xs sm:text-sm text-gray-300 drop-shadow-md">
          By booking, you agree to be contacted by Posh Nail Hub regarding your appointment.
          You can reschedule or cancel anytime.
        </p>
      </div>
    </section>
  );
}
