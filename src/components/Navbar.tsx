import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 flex flex-col w-full">
      {/* Announcement Bar */}
      <div 
        className={`bg-gradient-to-r from-[#d4a373] to-[#e6b981] text-[#110d0a] text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,163,115,0.15)] relative z-10 transition-all duration-500 overflow-hidden ${
          isAtTop ? "py-2.5 px-4 max-h-20 opacity-100" : "py-0 px-4 max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-base leading-none">🎓</span>
        <span>Student Offer: Get a flat 10% discount when you show a valid student card!</span>
      </div>

      <nav className="w-full border-b border-white/5 bg-[#110d0a]/60 backdrop-blur-xl relative z-0">
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-all duration-300 hover:text-[#d4a373] ${
                link.name === "Home" ? "text-[#d4a373]" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-5">
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

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none transition-transform"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#110d0a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-[#d4a373] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <hr className="border-white/10 w-full max-w-[200px] mx-auto" />

          {/* Mobile Actions (Search, Cart, Order) */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-10">
              <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#d4a373] transition-colors">
                <Search size={24} />
                <span className="text-xs tracking-wider uppercase">Search</span>
              </button>
              <button className="relative flex flex-col items-center gap-2 text-gray-400 hover:text-[#d4a373] transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute right-0 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4a373] text-[10px] font-bold text-black">
                  2
                </span>
                <span className="text-xs tracking-wider uppercase">Cart</span>
              </button>
            </div>
            <button className="w-full max-w-[250px] rounded-full bg-[#d4a373] px-6 py-4 text-sm font-semibold text-[#110d0a] transition-all hover:bg-[#e6b981] mt-2">
              Order Now
            </button>
          </div>
        </div>
      )}
      </nav>
    </header>
  );
}