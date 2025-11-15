import { Plus } from 'lucide-react';
import image1 from '../../assets/korie-cull-ggtdbP92hf8-unsplash.jpg';
import image2 from '../../assets/engin-akyurt-g-m8EDc4X6Q-unsplash.jpg';
import image3 from '../../assets/rune-enstad-qeuJczNo54w-unsplash.jpg';
import image4 from '../../assets/stefan-lehner-IYa5Dnj9qWE-unsplash.jpg';
import image5 from '../../assets/ozkan-guner-edq_-w2Sboc-unsplash.jpg';
import image6 from '../../assets/billie-5OXE3KjDEfI-unsplash.jpg';
import image7 from '../../assets/yulissa-tagle-AyqNM8D2aEI-unsplash.jpg';
import image8 from '../../assets/hayley-kim-studios-sRSRuxkOuzI-unsplash.jpg';

function Price() {
  const services = [
    { id: 1, name: "Tips And Gel", image: image1, price: 50.99, originalPrice: 69.99 },
    { id: 2, name: "Facial Scrub", image: image2, price: 20.99, originalPrice: 29.99 },
    { id: 3, name: "Pedicure", image: image3, price: 49.99, originalPrice: 59.99 },
    { id: 4, name: "Gel Application", image: image4, price: 36.99, originalPrice: 47.13 },
    { id: 5, name: "Full Beat Make-up", image: image5, price: 37.99, originalPrice: 79.99 },
    { id: 6, name: "Acrylic Pedicure", image: image6, price: 29.99, originalPrice: 39.99 },
    { id: 7, name: "Swedish Facial", image: image7, price: 30.99, originalPrice: 40.99 },
    { id: 8, name: "Lash Extension", image: image8, price: 39.99, originalPrice: 49.99 },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">All Services</h2>
          <p className="text-lg text-gray-600">
            Soft, classy, and oh-so-you. Book your nail glow up today, we offer only the best for our QUEEN'S.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-4 md:gap-8">
              {services.map((service) => (
                <div key={service.id} className="group relative w-[290px]">
                  <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md"
                      aria-label={`Book an appointment for ${service.name}`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Service Info */}
                  <div className="mt-4 h-[80px]">
                    <h3 className="font-medium text-xl">{service.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-semibold text-lg">
                        ${service.price.toFixed(2)}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        ${service.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
