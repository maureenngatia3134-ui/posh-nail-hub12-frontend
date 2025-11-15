import poshimg from '../../assets/gul-fatima-wcY-Qdk2qZ0-unsplash.jpg';

function Posh() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Best Nails Experience <br />
            Always Glowing
          </h2>
          <p className="text-gray-700 text-xl md:text-2xl mb-6">
            At Posh Nail Hub, we are dedicated to give you the best nail and beauty experience with quality products.
          </p>
          <p className="text-gray-700 text-xl md:text-2xl">
            Our team of qualified nail technicians are dedicated to offering the best service for our clients.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={poshimg}
            alt="About Posh Nail Hub"
            className="w-full h-[443px] object-cover rounded-lg"
            width={554}
            height={443}
          />
        </div>
      </div>
    </section>
  );
}

export default Posh;
