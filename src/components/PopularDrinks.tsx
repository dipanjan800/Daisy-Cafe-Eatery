import { Plus, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const drinks = [
  {
    name: 'Cappuccino',
    rating: '4.9',
    desc: '20% espresso, 40% steamed milk, 40% milk foam',
    price: '₹350',
    image: '/images/cappuccino.png'
  },
  {
    name: 'Latte',
    rating: '5.0',
    desc: '30% espresso, 70% steamed milk',
    price: '₹380',
    image: '/images/latte.png'
  },
  {
    name: 'Mocha',
    rating: '4.7',
    desc: '30% espresso, 60% dark chocolate, 10% steamed milk',
    price: '₹380',
    image: '/images/mocha.png'
  }
];

export default function PopularDrinks() {
  const [isVisible, setIsVisible] = useState(false);
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});
  const sectionRef = useRef<HTMLElement>(null);

  const handleIncrement = (idx: number) => {
    setQuantities(prev => ({
      ...prev,
      [idx]: (prev[idx] || 0) + 1
    }));
  };

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
               className={`bg-[#FDFBF7]/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center relative group hover:shadow-2xl transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 hover:-translate-y-2' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute top-6 right-6 bg-[#110d0a] text-white text-xs font-bold px-2.5 py-1 rounded flex items-center space-x-1 shadow-md z-20">
              <span>{drink.rating}</span>
              <Star size={12} className="fill-[#d4a373] text-[#d4a373]" />
            </div>
            
            {/* Drink Image */}
            <div className="w-40 h-40 mb-8 relative rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" />
            </div>
            
            <h3 className="text-2xl text-[#110d0a] font-serif mb-3">{drink.name}</h3>
            <p className="text-[#5a4a42] text-sm leading-relaxed mb-8 flex-grow max-w-[200px]">{drink.desc}</p>
            
            <div className="w-full flex items-center justify-between mt-auto">
              <span className="text-2xl text-[#110d0a] font-bold tracking-tight">
                ₹{parseInt(drink.price.replace(/\D/g, ''), 10) * (quantities[idx] || 1)}
              </span>
              <button 
                onClick={() => handleIncrement(idx)}
                className="bg-[#d4a373] text-[#110d0a] w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#e6b981] transition-colors shadow-md text-lg font-bold"
              >
                {quantities[idx] ? quantities[idx] : <Plus size={20} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
