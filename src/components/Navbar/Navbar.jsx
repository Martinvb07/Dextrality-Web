import { memo, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CloseIcon, DiscordIcon, MenuIcon } from '../Icons/index';

// Enlaces de navegación
const NAV_LINKS = [
  { href: '#inicio', label: 'INICIO' },
  { href: '#noticias', label: 'NOTICIAS' },
  { href: '#modos', label: 'MODOS' },
  { href: '#equipo', label: 'EQUIPO' },
  { href: '/guias', label: 'GUIAS' }
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

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    // anchors (starting with '#') -> scroll to section, possibly after navigating to '/'
    if (href.startsWith('#')) {
      e.preventDefault();
      const tryScroll = () => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      if (location.pathname !== '/') {
        // navigate to home first, then scroll shortly after
        navigate('/');
        setTimeout(tryScroll, 60);
      } else {
        tryScroll();
      }

      setIsMobileMenuOpen(false);
      return;
    }

    // other hrefs handled elsewhere (e.g., routes)
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'shadow-[0_4px_30px_rgba(109,204,193,0.15)]' : ''}`}
      style={{ backgroundColor: 'rgb(49, 49, 49)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer py-1">
            <img
              src="/logo_fin_fondo.png"
              alt="Dextrality Logo"
              className="w-20 h-20 object-contain group-hover:scale-105 transition-transform duration-300 logo-glow"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map(link => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${location.pathname === '/' && activeSection === link.href.slice(1) ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                )
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
            <button
              onClick={onCopyIP}
              className="server-ip-btn group"
              title="Click para copiar IP"
            >
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-mono tracking-wide text-sm">PLAY.DEXTRALITY.NET</span>
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
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} style={{ backgroundColor: 'rgb(49, 49, 49)' }}>
        <div className="px-4 py-4 space-y-2">
          {NAV_LINKS.map(link => (
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 px-4 rounded-lg hover:bg-teal-500/20 transition-colors ${location.pathname === link.href ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 px-4 rounded-lg hover:bg-teal-500/20 transition-colors"
              >
                {link.label}
              </a>
            )
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
