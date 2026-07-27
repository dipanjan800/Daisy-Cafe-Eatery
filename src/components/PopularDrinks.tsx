import { Plus, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const drinks = [
  {
    name: 'Cappuccino',
    rating: '4.9',
    desc: '20% espresso, 40% steamed milk, 40% milk foam',
    price: '$4.50',
  },
  {
    name: 'Latte',
    rating: '5.0',
    desc: '30% espresso, 70% steamed milk',
    price: '$4.90',
  },
  {
    name: 'Mocha',
    rating: '4.7',
    desc: '30% espresso, 60% dark chocolate, 10% steamed milk',
    price: '$4.90',
  }
];

export default function PopularDrinks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-8 lg:px-16 py-24 max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
      <h2 className={`text-3xl md:text-4xl text-white font-serif mb-16 text-center transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Our Popular Drinks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {drinks.map((drink, idx) => (
          <div key={idx} 
               style={{ transitionDelay: `${isVisible ? idx * 200 : 0}ms` }}
               className={`bg-[#18130f]/70 rounded-3xl p-8 border border-white/5 flex flex-col items-center text-center relative group hover:border-[#d4a373]/30 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 hover:-translate-y-2' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute top-6 right-6 bg-white text-[#110d0a] text-xs font-bold px-2.5 py-1 rounded flex items-center space-x-1 shadow-md">
              <span>{drink.rating}</span>
              <Star size={12} className="fill-[#d4a373] text-[#d4a373]" />
            </div>
            
            {/* Image Placeholder */}
            <div className="w-32 h-44 bg-gradient-to-b from-[#2a201a] to-transparent rounded-2xl mb-8 flex items-end justify-center pb-6 border border-white/5 relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#110d0a]/50 to-transparent rounded-b-2xl"></div>
                <span className="text-[#d4a373]/30 text-xs font-medium z-10 tracking-widest uppercase">Cup {idx+1}</span>
            </div>
            
            <h3 className="text-2xl text-white font-serif mb-3">{drink.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow max-w-[200px]">{drink.desc}</p>
            
            <div className="w-full flex items-center justify-between mt-auto">
              <span className="text-2xl text-white font-bold tracking-tight">{drink.price}</span>
              <button className="bg-[#d4a373] text-[#110d0a] p-3 rounded-full hover:bg-[#e6b981] transition-colors shadow-lg">
                <Plus size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
