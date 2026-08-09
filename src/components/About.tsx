import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="px-8 lg:px-16 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden bg-[#18130f]/70 border border-white/5 flex items-center justify-center group shadow-2xl">
         <div className="absolute inset-0 bg-gradient-to-tr from-[#110d0a]/80 to-transparent z-10 pointer-events-none"></div>
         <img src="/images/barista.png" alt="Barista pouring latte art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      
      <div className="space-y-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl text-white font-serif">About Daisy Cafe & Eatery</h2>
          <p className="text-white text-lg leading-relaxed max-w-lg">
            Daisy Cafe & Eatery was born from a passion for coffee and a desire to deliver the perfect experience. From bean to cup, we control every detail to bring you unmatched flavor and quality.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
          <div>
            <h4 className="text-4xl text-white font-serif mb-2">10+</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">Years<br/>Experience</p>
          </div>
          <div>
            <h4 className="text-4xl text-white font-serif mb-2">25+</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">Coffee<br/>Varieties</p>
          </div>
          <div>
            <h4 className="text-4xl text-white font-serif mb-2">50K+</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">Happy<br/>Customers</p>
          </div>
          <div>
            <h4 className="text-4xl text-white font-serif mb-2">4.9</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">Customer<br/>Rating</p>
          </div>
        </div>
        
        <button className="bg-[#d4a373] text-[#110d0a] px-8 py-4 rounded-full font-semibold flex items-center space-x-3 hover:bg-[#e6b981] transition-colors w-fit group">
          <span>Learn More About Us</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
