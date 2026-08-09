import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl text-white font-serif mb-16">What Our Customers Say</h2>
      
      <div className="relative w-full px-4 md:px-16 group">
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4a373] text-[#110d0a] p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>

        <div 
          ref={scrollRef} 
          className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory py-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar {
              display: none;
            }
          `}} />
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="min-w-[90vw] md:min-w-[calc(33.333%-1rem)] snap-center bg-[#18130f]/70 rounded-3xl p-10 border border-white/5 flex flex-col items-start text-left hover:border-[#d4a373]/20 transition-all duration-300 shrink-0"
            >
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

        <button 
          onClick={() => scroll('right')} 
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4a373] text-[#110d0a] p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg opacity-0 group-hover:opacity-100 disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="flex justify-center items-center space-x-3 mt-12">
        <div className="w-2.5 h-2.5 rounded-full bg-[#d4a373] cursor-pointer"></div>
        <div className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer"></div>
        <div className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer"></div>
      </div>
    </section>
  );
}
