import { memo, useEffect, useRef, useState } from 'react';

const TeamCard = memo(({ avatar, name, role, roleClass, bio }) => {
  return (
    <div className="team-card">
      <div className="team-avatar">
        <img src={avatar} alt={name} />
      </div>
      <h4 className="team-name">{name}</h4>
      <span className={`team-role ${roleClass}`}>{role}</span>
      <p className="team-bio">{bio}</p>
    </div>
  );
});

TeamCard.displayName = 'TeamCard';

const TeamSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const currentTranslateRef = useRef(0);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const resumeTimeoutRef = useRef(null);
  const animationIdRef = useRef(null);

  const teamMembers = [
    { id: 1, avatar: 'https://mc-heads.net/avatar/GermanAntonio/128', name: 'German Antonio', role: '👑 OWNER', roleClass: 'owner', bio: 'Fundador de Dextrality.' },
    { id: 2, avatar: 'https://mc-heads.net/avatar/Himako/128', name: 'Himako', role: '⚜️ HIGH ADMIN', roleClass: 'admin', bio: 'Alto administrador del servidor.' },
    { id: 3, avatar: 'https://mc-heads.net/avatar/Martind07/128', name: 'Martind07', role: '🛡️ ADMIN', roleClass: 'admin', bio: 'Administrador del servidor.' },
    { id: 4, avatar: 'https://mc-heads.net/avatar/Gallus/128', name: 'Gallus', role: '📋 MANAGER', roleClass: 'manager', bio: 'Manager del equipo.' },
    { id: 5, avatar: 'https://mc-heads.net/avatar/Gallus/128', name: 'Gallus', role: '🎯 COORDINADOR', roleClass: 'coordinator', bio: 'Coordinador del equipo.' },
    { id: 6, avatar: 'https://mc-heads.net/avatar/David/128', name: 'David', role: '⚙️ CONFIG', roleClass: 'config', bio: 'Configurador del servidor.' },
    { id: 7, avatar: 'https://mc-heads.net/avatar/Cardan/128', name: 'Cardan', role: '⚙️ CONFIG', roleClass: 'config', bio: 'Configurador del servidor.' },
    { id: 8, avatar: 'https://mc-heads.net/avatar/Dany/128', name: 'Dany', role: '🔨 MODERADOR', roleClass: 'moderator', bio: 'Moderador del servidor.' },
    { id: 9, avatar: 'https://mc-heads.net/avatar/Himako/128', name: 'Himako', role: '🏗️ BUILDER', roleClass: 'builder', bio: 'Constructor del servidor.' },
    { id: 10, avatar: 'https://mc-heads.net/avatar/Gallus/128', name: 'Gallus', role: '🏗️ BUILDER', roleClass: 'builder', bio: 'Constructor del servidor.' },
    { id: 11, avatar: 'https://mc-heads.net/avatar/Martind07/128', name: 'Martind07', role: '💻 DEVELOPER', roleClass: 'developer', bio: 'Desarrollador de plugins.' },
    { id: 12, avatar: 'https://mc-heads.net/avatar/Hatsky/128', name: 'Hatsky', role: '🌟 TRIAL', roleClass: 'trial', bio: 'Miembro en pruebas.' },
    { id: 13, avatar: 'https://mc-heads.net/avatar/iCHAVO/128', name: 'iCHAVO', role: '🌟 TRIAL', roleClass: 'trial', bio: 'Miembro en pruebas.' },
  ];

  // Triplicar miembros para el loop infinito
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  // Calcular ancho de tarjeta + gap
  const cardWidth = 220 + 24; // width + gap (1.5rem = 24px)
  const originalSetWidth = cardWidth * teamMembers.length;

  const scheduleResume = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      setIsDragging(false);
    }, 5000);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.pageX;
    scrollLeftRef.current = currentTranslateRef.current;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
    }
    e.preventDefault();
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (carouselRef.current) {
        carouselRef.current.style.cursor = 'grab';
      }
      scheduleResume();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (carouselRef.current) {
        carouselRef.current.style.cursor = 'grab';
      }
      scheduleResume();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX;
    const walk = x - startXRef.current;
    let newTranslate = scrollLeftRef.current + walk;

    // Mantener dentro de límites para loop infinito
    if (newTranslate > 0) {
      newTranslate = -originalSetWidth * 2 + newTranslate;
    } else if (Math.abs(newTranslate) >= originalSetWidth * 3) {
      newTranslate = newTranslate + originalSetWidth * 2;
    }

    currentTranslateRef.current = newTranslate;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const handleClick = () => {
    if (isDragging) return;

    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
      scheduleResume();
    }
  };

  // Touch events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.touches[0].pageX;
    scrollLeftRef.current = currentTranslateRef.current;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX;
    const walk = x - startXRef.current;
    let newTranslate = scrollLeftRef.current + walk;

    if (newTranslate > 0) {
      newTranslate = -originalSetWidth * 2 + newTranslate;
    } else if (Math.abs(newTranslate) >= originalSetWidth * 3) {
      newTranslate = newTranslate + originalSetWidth * 2;
    }

    currentTranslateRef.current = newTranslate;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    scheduleResume();
  };

  // Animación continua
  useEffect(() => {
    const velocity = 0.5;

    const animate = () => {
      if (!isPaused && !isDragging && trackRef.current) {
        currentTranslateRef.current -= velocity;

        // Reset cuando llegamos al primer set duplicado
        if (Math.abs(currentTranslateRef.current) >= originalSetWidth) {
          currentTranslateRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
      }
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPaused, isDragging, originalSetWidth]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="equipo" className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Conoce al Equipo</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Las personas que hacen posible Dextrality
          </p>
        </div>

        {/* Team Carousel */}
        <div className="team-carousel-wrapper">
          <div
            ref={carouselRef}
            className={`team-carousel ${isDragging ? 'dragging' : ''}`}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div ref={trackRef} className={`team-track ${isPaused ? 'paused' : ''}`}>
              {duplicatedMembers.map((member, index) => (
                <TeamCard key={`${member.id}-${index}`} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TeamSection);
