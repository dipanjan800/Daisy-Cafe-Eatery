import { Facebook, Instagram, Twitter, Pin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-8 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto border-t border-white/5 mt-16 relative">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
        
        {/* Brand */}
        <div className="lg:col-span-2 space-y-8 pr-8">
          <span className="text-3xl font-bold font-serif text-white flex items-center">
            Daisy Cafe & Eatery
          </span>
          <p className="text-white text-sm max-w-xs leading-relaxed">
            Premium coffee crafted with passion and quality for true coffee lovers.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/daisycafeneateryFb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-white hover:border-[#d4a373] hover:bg-[#d4a373]/10 transition-all" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/daisycafeneatery/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-white hover:border-[#d4a373] hover:bg-[#d4a373]/10 transition-all" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold text-lg tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-semibold text-lg tracking-wide">Menu</h4>
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Hot Coffee</a></li>
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Iced Coffee</a></li>
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Desserts</a></li>
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Merchandise</a></li>
            <li><a href="#" className="hover:text-[#d4a373] transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-semibold text-lg tracking-wide">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white">
            <li className="flex flex-col gap-1">
              <span className="text-[#d4a373] text-xs uppercase tracking-wider">Phone</span>
              <a href="tel:+919242262036" className="hover:text-[#e6b981] transition-colors text-base font-medium">+91 92422 62036</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#d4a373] text-xs uppercase tracking-wider">Email</span>
              <a href="mailto:hello@daisycafeneatery.com" className="hover:text-[#e6b981] transition-colors text-base font-medium">hello@daisycafeneatery.com</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#d4a373] text-xs uppercase tracking-wider">Location</span>
              <span className="text-gray-300">Debra, West Bengal</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1 space-y-6">
          <h4 className="text-white font-semibold text-lg tracking-wide">Newsletter</h4>
          <p className="text-white text-sm leading-relaxed max-w-[200px]">
            Subscribe to get special offers, new products and updates.
          </p>
          <div className="flex bg-[#18130f]/70 rounded-full p-1.5 border border-white/10 w-full">
            <input type="email" placeholder="Enter your email" className="bg-transparent border-none outline-none text-white px-4 py-2 w-full text-sm placeholder:text-white" />
            <button className="bg-[#d4a373] text-[#110d0a] p-2.5 rounded-full hover:bg-[#e6b981] transition-colors flex-shrink-0">
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>

      <div className="text-center pt-8 border-t border-white/5 text-white text-sm">
        © 2024 Daisy Cafe & Eatery. All Rights Reserved.
      </div>
    </footer>
  );
}
