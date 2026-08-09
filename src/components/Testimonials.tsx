import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "The best coffee I've ever had! The flavor is incredible and the atmosphere is amazing.",
    name: "Sarah J."
  },
  {
    quote: "Every visit is a wonderful experience. Highly recommended!",
    name: "Michael T."
  },
  {
    quote: "Professional baristas and premium quality. Daisy Cafe & Eatery never disappoints.",
    name: "Emma R."
  }
];

export default function Testimonials() {
  return (
    <section className="px-8 lg:px-16 py-24 max-w-7xl mx-auto flex flex-col items-center relative">
      <h2 className="text-3xl md:text-4xl text-white font-serif mb-16">What Our Customers Say</h2>
      
      <button className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4a373] text-[#110d0a] p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg hidden md:flex items-center justify-center">
        <ChevronLeft size={24} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:px-10 lg:px-12">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#18130f]/70 rounded-3xl p-10 border border-white/5 flex flex-col items-start text-left hover:border-[#d4a373]/20 transition-all duration-300">
            <div className="text-[#d4a373] text-6xl font-serif leading-none h-10 mb-6 opacity-40">“</div>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed mb-10 flex-grow font-serif italic pr-4">
              {t.quote}
            </p>
            <div className="w-full flex items-center justify-between mt-auto">
              <p className="text-white font-semibold tracking-wide">— {t.name}</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#d4a373] text-[#d4a373]" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4a373] text-[#110d0a] p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg hidden md:flex items-center justify-center">
        <ChevronRight size={24} />
      </button>
      
      <div className="flex justify-center items-center space-x-3 mt-12">
        <div className="w-2.5 h-2.5 rounded-full bg-[#d4a373] cursor-pointer"></div>
        <div className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer"></div>
        <div className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer"></div>
        <div className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer"></div>
      </div>
    </section>
  );
}
