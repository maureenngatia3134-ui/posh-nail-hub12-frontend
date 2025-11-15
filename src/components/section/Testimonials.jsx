import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import testimonialImage from "../../assets/rune-enstad-cowLgyb63c4-unsplash.jpg"; 

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Samantha Lee",
      role: "Beauty Blogger",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      feedback:
        "Posh Nail Hub is my go-to place for self-care. Their nail artists are true professionals — every visit feels like a luxury retreat.",
    },
    {
      id: 2,
      name: "Chloe Martinez",
      role: "Model",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback:
        "I’ve never had such a flawless manicure! The team at Posh Nail Hub pays attention to every tiny detail — I always leave feeling confident and beautiful.",
    },
    {
      id: 3,
      name: "Grace Thompson",
      role: "Event Planner",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      feedback:
        "From the ambiance to the artistry, Posh Nail Hub delivers perfection every time. Their nail designs are pure sophistication!",
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const testimonial = testimonials[index];

  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* LEFT SIDE - Testimonial Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <div className="flex items-center gap-4 mt-6">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-pink-400"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed italic mt-4">
            “{testimonial.feedback}”
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-pink-100 transition"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-pink-500 rounded-full hover:bg-pink-600 transition"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Salon Image */}
        <div className="w-full h-[480px] md:w-[500px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={testimonialImage}
            alt="Posh Nail Hub Studio"
            className="w-full h-full object-cover"
            width={554}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
