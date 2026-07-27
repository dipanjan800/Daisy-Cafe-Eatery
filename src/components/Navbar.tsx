import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#110d0a]/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="text-2xl">☕</span>

          <span className="font-serif text-2xl font-semibold tracking-tight text-white lg:text-3xl">
            Daisy Cafe & Eatery
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-300 lg:flex">
          <a
            href="#"
            className="text-[#d4a373] transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-[#d4a373]"
          >
            Menu
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-[#d4a373]"
          >
            About
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-[#d4a373]"
          >
            Services
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-[#d4a373]"
          >
            Reviews
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-[#d4a373]"
          >
            Blog
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-[#d4a373]"
          >
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="text-gray-400 transition-all duration-300 hover:text-[#d4a373]">
            <Search size={22} />
          </button>

          <button className="relative text-gray-400 transition-all duration-300 hover:text-[#d4a373]">
            <ShoppingCart size={22} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4a373] text-[10px] font-bold text-black">
              2
            </span>
          </button>

          <button className="rounded-full bg-[#d4a373] px-6 py-3 text-sm font-semibold text-[#110d0a] transition-all duration-300 hover:scale-105 hover:bg-[#e6b981] hover:shadow-[0_10px_30px_rgba(212,163,115,0.35)]">
            Order Now
          </button>

        </div>
      </div>
    </nav>
  );
}