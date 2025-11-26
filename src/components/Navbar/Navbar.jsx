import { memo, useEffect, useState } from 'react';
import { CloseIcon, DiscordIcon, MenuIcon } from '../Icons/index';

// Enlaces de navegación
const NAV_LINKS = [
  { href: '#inicio', label: 'INICIO' },
  { href: '#noticias', label: 'NOTICIAS' },
  { href: '#modos', label: 'MODOS' },
  { href: '#equipo', label: 'EQUIPO' },
];

// Navegación principal
const Navbar = ({ onCopyIP }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsScrolled(currentScroll > 100);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-teal-500/30 transition-all duration-300 bg-slate-900
        ${isScrolled ? 'shadow-[0_4px_30px_rgba(109,204,193,0.15)]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img
              src="logo_fin_fondo.png"
              alt="Dextrality Logo"
              className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-300 logo-glow"
            />
            <span className="text-xl font-bold text-gradient">DEXTRALITY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://discord.gg/HCkGBkDrNB"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 p-2 bg-[#5865F2] rounded-lg hover:bg-[#4752C4] transition-all duration-300 hover:scale-110"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Server IP Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <button onClick={onCopyIP} className="server-ip-btn group">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-mono text-sm">PLAY.DEXTRALITY.NET</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/40 transition-colors"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-slate-800/98 border-t border-teal-500/30`}>
        <div className="px-4 py-4 space-y-2">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 px-4 rounded-lg hover:bg-teal-500/20 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onCopyIP}
            className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-lg font-mono text-sm"
          >
            PLAY.DEXTRALITY.NET
          </button>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
