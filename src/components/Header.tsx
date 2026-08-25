import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Hammer, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hizmetlerimiz', href: '#hizmetlerimiz' },
    { name: 'Özel Ölçü', href: '#ozel-olcu' },
    { name: 'Projelerimiz', href: '#projelerimiz' },
    { name: 'Neden Biz', href: '#neden-biz' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'Hizmet Bölgeleri', href: '#bolgeler' },
    { name: 'SSS', href: '#sss' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-[#a67c52] ${
        isScrolled 
          ? 'bg-[#1c1c1c] shadow-xl py-3 text-white' 
          : 'bg-[#1c1c1c] py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#a67c52] flex items-center justify-center rounded-sm font-serif italic text-2xl font-bold text-white shadow-md group-hover:bg-[#8b5e3c] transition-colors">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-tight uppercase leading-none text-white group-hover:text-[#a67c52] transition-colors">
                KASTAMOBİLYA
              </span>
              <span className="text-[10px] text-[#a67c52] uppercase tracking-[0.2em] font-medium mt-0.5">
                Marangoz &amp; Mobilya
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium opacity-90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-200 hover:text-[#a67c52] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a67c52] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="hidden lg:block text-sm font-bold border-r border-white/20 pr-4 text-white hover:text-[#a67c52] transition-colors"
            >
              {BUSINESS_INFO.formattedPhone}
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 border border-[#a67c52]/40 transition-colors"
            >
              Hızlı Hesapla
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1eb956] text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>TEKLİF AL</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="p-2 rounded-lg bg-stone-800 text-[#F59E0B] border border-stone-700"
              aria-label="Telefon Et"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-stone-950"
              aria-label="WhatsApp'tan Yaz"
            >
              <MessageCircle className="w-5 h-5 fill-stone-950" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800 text-stone-200 border border-stone-700 ml-1"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1C1917] border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200">
          <div className="py-2 border-b border-stone-800 flex items-center justify-between text-xs text-amber-400 font-medium">
            <span>5.0 ★ Google Puanı (134+ Yorum)</span>
            <span>Arnavutköy / İstanbul</span>
          </div>

          <div className="grid grid-cols-2 gap-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-md bg-stone-900/60 hover:bg-stone-800 text-stone-300 text-sm font-medium border border-stone-800/80"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-stone-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-800/40 text-amber-300 font-semibold border border-amber-700/50 text-sm"
            >
              <span>Özel Ölçü Fiyatı Hesapla</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-stone-950 font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-stone-950" />
              <span>WhatsApp'tan Hemen Teklif Al</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
