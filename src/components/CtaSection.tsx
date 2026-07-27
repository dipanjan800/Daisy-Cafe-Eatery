import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="px-8 lg:px-16 py-16 max-w-7xl mx-auto">
      <div className="bg-[#18130f]/70 rounded-[40px] overflow-hidden border border-white/5 flex flex-col md:flex-row items-center relative">
        <div className="p-12 md:p-20 flex-1 space-y-8 z-10 w-full">
          <h2 className="text-4xl md:text-5xl text-white font-serif leading-tight">
            Ready for Your<br/>Perfect Coffee?
          </h2>
          <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
            Order now and enjoy premium coffee delivered to your door.
          </p>
          <button className="bg-[#d4a373] text-[#110d0a] px-8 py-4 rounded-full font-semibold flex items-center space-x-3 hover:bg-[#e6b981] transition-colors w-fit group">
            <span>Order Now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="flex-1 w-full h-[300px] md:h-full md:absolute md:inset-y-0 md:right-0 md:w-1/2 bg-gradient-to-l from-[#2a201a] via-[#1a1410] to-[#18130f] flex items-center justify-center border-l border-white/5">
            {/* Image Placeholder */}
            <span className="text-[#d4a373]/30 font-serif text-2xl tracking-widest uppercase">Latte Cup Visual</span>
        </div>
      </div>
    </section>
  );
}
