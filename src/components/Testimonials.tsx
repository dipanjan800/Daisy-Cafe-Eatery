import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
  },
  {
    quote: "A hidden gem! Their pastries are to die for and the latte art is top notch.",
    name: "David L."
  },
  {
    quote: "Perfect place to work remotely. Great wifi, amazing coffee, and super friendly staff.",
    name: "Jessica M."
  },
  {
    quote: "I start every morning with their signature mocha. Unbeatable taste and quality.",
    name: "Robert W."
  },
  {
    quote: "The aesthetic is beautiful and the food is just as good as it looks. 10/10.",
    name: "Chloe K."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum index you can slide to on desktop is (total - 3) so we don't show empty space.
  // On mobile, it's (total - 1). We'll simplify and just limit the dots.
  const maxDesktopIndex = testimonials.length - 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="px-8 lg:px-16 py-24 max-w-7xl mx-auto flex flex-col items-center relative overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .testimonial-track {
          --card-width: 100%;
          --gap: 2rem;
        }
        @media (min-width: 768px) {
          .testimonial-track {
            --card-width: calc(33.333333% - 1.333333rem);
          }
        }
        .testimonial-card {
          width: var(--card-width);
        }
      `}} />

      <h2 className="text-3xl md:text-4xl text-white font-serif mb-16">What Our Customers Say</h2>
      
      <button 
        onClick={prevSlide}
        className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4a373] text-[#110d0a] p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg flex items-center justify-center"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="w-full md:px-10 lg:px-12 overflow-hidden">
        <div 
          className="testimonial-track flex gap-8 transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(calc(-${currentIndex} * (var(--card-width) + var(--gap))))` }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card shrink-0 bg-[#18130f]/70 rounded-3xl p-10 border border-white/5 flex flex-col items-start text-left hover:border-[#d4a373]/20 transition-all duration-300">
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
      </div>

      <button 
        onClick={nextSlide}
        className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4a373] text-[#110d0a] p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg flex items-center justify-center"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="flex justify-center items-center space-x-3 mt-12">
        {testimonials.map((_, i) => (
          <div 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === currentIndex ? 'bg-[#d4a373] w-3 h-3' : 'bg-gray-700 hover:bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
