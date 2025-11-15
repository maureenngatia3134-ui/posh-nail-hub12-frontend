import React from 'react';

function Statistics() {
  return (
    <section className="relative -mt-20 mb-16 z-10 px-4">
      <div className="container mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
        
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/40 text-center justify-items-center py-12 px-6 md:px-12">
          
          <div className="statistic-item px-4">
            <h3 className="text-5xl font-black text-white mb-2">500+</h3>
            <p className="text-lg font-medium text-white opacity-90">Happy Clients</p>
          </div>

          <div className="statistic-item px-4">
            <h3 className="text-5xl font-black text-white mb-2">15+</h3>
            <p className="text-lg font-medium text-white opacity-90">Awards Won</p>
          </div>

          <div className="statistic-item px-4">
            <h3 className="text-5xl font-black text-white mb-2">1200+</h3>
            <p className="text-lg font-medium text-white opacity-90">Nail Designs</p>
          </div>

          <div className="statistic-item px-4">
            <h3 className="text-5xl font-black text-white mb-2">10+</h3>
            <p className="text-lg font-medium text-white opacity-90">Years of Experience</p>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Statistics;
