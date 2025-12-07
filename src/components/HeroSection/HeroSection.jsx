import { memo, useEffect, useRef } from 'react';
import { DiscordIcon } from '../Icons/index';
import StatCard from './StatCard';

// Estadísticas
const STATS = [
  { count: 1, label: 'Jugadores' },
  { count: 1, label: 'Online' },
  { count: 4, label: 'Modos' },
];

// Modos de juego
const FEATURES = ['Earth', '1910', 'Skyblock'];

// Sección Hero
const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroElement = heroRef.current;
      const contentElement = contentRef.current;

      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        if (scrolled <= heroHeight) {
          const heroBg = heroElement.querySelector('.hero-bg');
          if (heroBg) {
            heroBg.style.transform = `scale(${1 + scrolled * 0.0002}) translateY(${scrolled * 0.4}px)`;
            heroBg.style.opacity = Math.max(0.3, 1 - scrolled * 0.001);
          }
        }
      }

      if (contentElement) {
        contentElement.style.transform = `translateY(${scrolled * 0.15}px)`;
        contentElement.style.opacity = Math.max(0.2, 1 - scrolled * 0.0015);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900"></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16"
      >
        {/* Banner */}
        <div className="mb-8 animate-fade-in-up">
          <div className="banner-glow mx-auto" style={{ maxWidth: '700px' }}>
            <img
              src="Banner.png"
              alt="Dextrality Network - Java x Bedrock"
              className="banner-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="text-5xl md:text-7xl font-bold mb-4">
                    <span class="text-gradient">DEXTRALITY</span>
                  </div>
                  <p class="text-xl text-gray-300">Java & Bedrock</p>
                `;
              }}
            />
          </div>
        </div>

        {/* Slogan */}
        <p
          className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Nos quedamos sin dinero
        </p>

        {/* Feature Pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          {FEATURES.map(feature => (
            <span key={feature} className="feature-pill">{feature}</span>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className="flex justify-center animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="https://discord.gg/HCkGBkDrNB"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-btn"
          >
            <DiscordIcon className="w-6 h-6" />
            <span>DISCORD</span>
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-8 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          {STATS.map(stat => (
            <StatCard key={stat.label} count={stat.count} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
