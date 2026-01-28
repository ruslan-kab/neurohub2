
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_LINKS, SERVICE_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter uppercase">Neural<span className="text-indigo-500">Hub</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a 
            href={SERVICE_URL}
            className="px-6 py-2.5 bg-white text-black rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 text-sm"
          >
            Попробовать бесплатно
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-lg font-medium text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={SERVICE_URL} className="w-full py-4 gradient-bg text-center rounded-xl font-bold">
            Начать работу
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
