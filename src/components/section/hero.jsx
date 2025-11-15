import { useState } from 'react';
import bgHero from '../../assets/theclan-nailsalon-t91cj5p3a-o-unsplash.jpg';
import Logo from '../common/Logo';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    time: ''
  });

  const services = [
    "Tips And Gel",
    "Facial Scrub",
    "Pedicure",
    "Gel Application",
    "Full Beat Make-up",
    "Acrylic Pedicure",
    "Swedish Facial",
    "Lash Extension"
  ];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    setIsModalOpen(false);
    setFormData({ name: '', service: '', time: '' });
    alert("Your appointment has been booked!");
  };

  return (
    <section
      className="relative h-[100dvh] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bgHero})`,
      }}
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-[100]">
        <Logo />
        <nav>
          <ul className="flex space-x-8">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Posh Nail Hub</h2>
        <p className="text-lg md:text-2xl mb-8">Your Ultimate Destination for Luxurious Nail Care</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Book an Appointment
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative text-black">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-black hover:text-gray-700 font-bold text-lg"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select Service</option>
                {services.map((s, idx) => (
                  <option key={idx} value={s}>{s}</option>
                ))}
              </select>
              <input
                type="datetime-local"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
