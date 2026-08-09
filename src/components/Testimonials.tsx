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

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function Testimonials() {
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;
  const realIndex = currentIndex % testimonials.length;

  // Maximum index you can slide to on desktop is (total - 3) so we don't show empty space.
  // On mobile, it's (total - 1). We'll simplify and just limit the dots.
  const maxDesktopIndex = testimonials.length - 3;

  const nextSlide = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length * 2) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - testimonials.length);
      setTimeout(() => setTransitionEnabled(true), 50);
    } else if (currentIndex < testimonials.length) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + testimonials.length);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setTouchEnd(null);
    setTouchStart(e.clientX);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch(err) {}
    
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
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
        className="absolute -left-3 md:left-0 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4a373] text-[#110d0a] p-2 md:p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div 
        className="w-full md:px-10 lg:px-12 overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div 
          className={`testimonial-track flex gap-8 w-full ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(calc(-${currentIndex} * (var(--card-width) + var(--gap))))` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTestimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card shrink-0 bg-[#18130f]/70 rounded-3xl p-8 border border-white/5 flex flex-col items-start text-left hover:border-[#d4a373]/20 transition-all duration-300">
              
              <div className="flex items-center justify-between w-full mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a373] to-[#8c6742] flex items-center justify-center text-white font-bold font-sans text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold tracking-wide text-sm">{t.name}</span>
                    <span className="text-gray-400 text-xs">Local Guide</span>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>

              <p className="text-gray-300 text-[1.05rem] leading-relaxed mb-6 flex-grow font-sans pr-4">
                {t.quote}
              </p>
              
              <div className="w-full flex items-center justify-start mt-auto">
                <span className="text-gray-500 text-xs font-medium">Posted on Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={nextSlide}
        className="absolute -right-3 md:right-0 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4a373] text-[#110d0a] p-2 md:p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <div className="flex justify-center items-center space-x-3 mt-12">
        {testimonials.map((_, i) => (
          <div 
            key={i}
            onClick={() => {
              setTransitionEnabled(true);
              setCurrentIndex(i + testimonials.length);
            }}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === realIndex ? 'bg-[#d4a373] w-3 h-3' : 'bg-gray-700 hover:bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
