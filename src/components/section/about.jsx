import { Check } from "lucide-react";
import aboutImage from '../../assets/alazar-kassahun-GV9_jUGReBo-unsplash.jpg';

function About() {
  return (
    <section className="about-section py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start">
        
        {/* IMAGE */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:mr-10">
          <img
            src={aboutImage}
            alt="About Posh Nail Hub"
            className="rounded-lg shadow-xl w-full h-72 md:h-[480px] object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Posh Nail Hub
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            At Posh Nail Hub, we provide luxurious nail care in a relaxing atmosphere. 
            Our talented nail technicians are committed to delivering exceptional results 
            while maintaining the highest hygiene and safety standards.
          </p>

          <ul className="list-none space-y-6">
            <li className="flex items-start">
              <Check className="w-7 h-7 text-pink-500 mr-3 mt-1" />
              <span className="text-xl text-gray-700">
                Experienced and certified nail technicians.
              </span>
            </li>

            <li className="flex items-start">
              <Check className="w-7 h-7 text-pink-500 mr-3 mt-1" />
              <span className="text-xl text-gray-700">
                Wide range of services including manicures, pedicures, and nail art.
              </span>
            </li>

            <li className="flex items-start">
              <Check className="w-7 h-7 text-pink-500 mr-3 mt-1" />
              <span className="text-xl text-gray-700">
                High-quality, non-toxic nail products.
              </span>
            </li>

            <li className="flex items-start">
              <Check className="w-7 h-7 text-pink-500 mr-3 mt-1" />
              <span className="text-xl text-gray-700">
                A relaxing and hygienic salon environment.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
