// card.jsx
export function ProductCard({ image, title }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-56 lg:h-64 object-cover"
      />

      {/* Title with larger font and soft white shadow */}
      <div className="absolute left-4 bottom-4 text-black text-2xl md:text-3xl font-bold drop-shadow-[0_0_5px_white]">
        {title}
      </div>
    </div>
  );
}
