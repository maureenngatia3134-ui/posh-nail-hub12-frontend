// Features.jsx
import { ArrowRight } from "lucide-react";
import { ProductCard } from "../common/card";
import Image1 from '../../assets/korie-cull-ggtdbP92hf8-unsplash.jpg';
import Image2 from '../../assets/anna-kumpan-3J5K-Jb6GRM-unsplash.jpg';
import Image3 from '../../assets/alazar-kassahun-GV9_jUGReBo-unsplash.jpg';
import Image4 from '../../assets/hayley-kim-studios-sRSRuxkOuzI-unsplash.jpg';

const defaultServices = [
  { title: "Manicure", image: Image1 },
  { title: "Pedicure", image: Image2 },
  { title: "Nail Art", image: Image3 },
  { title: "Lashes", image: Image4 },
];

function Features({ services = defaultServices }) {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">

          {/* Left side - Heading and description */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Services
            </h2>
            <p className="mt-6 text-black text-lg md:text-xl max-w-sm">
              Enjoy the services provided in our shop
            </p>
            <button className="mt-6 px-8 py-3 bg-pink-500 text-white text-lg md:text-xl rounded-lg hover:bg-pink-600 transition duration-300 flex items-center">
              View all services
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </div>

          {/* Right side - Service cards */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ProductCard
                  key={service.title + index}
                  image={service.image}
                  title={service.title}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
