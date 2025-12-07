import { memo, useEffect, useRef, useState } from 'react';
import { DiscordIcon, GitHubIcon, GlobeIcon } from '../Icons';

const TeamCard = memo(({ avatar, name, roles, role, roleClass, bio, onSelect }) => {
  const fallbackHead = 'https://mc-heads.net/avatar/Steve/128';
  return (
    <div className="team-card" tabIndex={0} onClick={onSelect} onKeyDown={(e) => { if (e.key === 'Enter') onSelect(); }}>
      <div className="team-avatar">
        <img
          src={avatar}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = fallbackHead + '?fb=1';
          }}
        />
      </div>
      <h4 className="team-name">{name}</h4>
      {roles && roles.length > 0 ? (
        <div className="team-roles">
          {roles.map((r, idx) => (
            <span key={idx} className={`team-role ${r.className}`}>{r.label}</span>
          ))}
        </div>
      ) : (
        <span className={`team-role ${roleClass}`}>{role}</span>
      )}
      <p className="team-bio">{bio}</p>
    </div>
  );
});
TeamCard.displayName = 'TeamCard';

const TeamSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const currentTranslateRef = useRef(0);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const resumeTimeoutRef = useRef(null);
  const animationIdRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: 'German Antonio',
      mcName: 'DextralityEarth',
      role: '👑 Owner',
      roleClass: 'owner',
      bio: 'Fundador de Dextrality.',
      bioLong: 'Desde la idea inicial hasta la visión actual del proyecto, lidera la estrategia, el equipo y las decisiones clave. Apasionado por crear una experiencia única y sostenible para la comunidad.',
      achievements: ['Fundación del proyecto', 'Dirección general', 'Expansión de la comunidad'],
      links: [ { label: 'Discord', url: 'https://discord.gg/dextrality' } ],
      favoriteMode: 'Survival',
      joinDate: '2024-01'
    },
    {
      id: 2,
      name: 'Himako',
      mcName: 'Himako',
      roles: [
        { label: '⚜️ High Admin', className: 'admin' },
        { label: '🏗️ Builder', className: 'builder' }
      ],
      bio: 'Alto administrador y constructor del servidor.',
      bioLong: 'Especialista en estructuración y soporte avanzado. Supervisa procesos internos y estándares de construcción, asegurando calidad y consistencia.',
      achievements: ['Optimización de builds', 'Mentoría de staff'],
      links: [ { label: 'Portafolio', url: '#' } ],
      favoriteMode: 'Creative',
      joinDate: '2024-02'
    },
    {
      id: 3,
      name: 'Martind07',
      mcName: 'Martind07',
      roles: [
        { label: '🛡️ Admin', className: 'admin' },
        { label: '💻 Developer', className: 'developer' }
      ],
      bio: 'Administrador y desarrollador del servidor.',
      bioLong: 'Enfocado en sistemas estables, escalabilidad y nuevas funcionalidades. Implementa integraciones y optimiza la experiencia técnica.',
      achievements: ['Sistema de eventos', 'Infraestructura técnica', 'Automatizaciones internas'],
      links: [ { label: 'GitHub', url: 'https://github.com/Martinvb07' } ],
      favoriteMode: 'Survival',
      joinDate: '2024-06'
    },
    {
      id: 4,
      name: 'Gallus',
      mcName: 'GallusReiniger_',
      roles: [
        { label: '📋 Manager', className: 'manager' },
        { label: '🎯 Coordinador', className: 'coordinator' },
        { label: '🏗️ Builder', className: 'builder' }
      ],
      bio: 'Manager, coordinador y constructor del equipo.',
      bioLong: 'Mantiene el flujo organizativo y coordina áreas para cumplir objetivos. Refuerza comunicación y planificación.',
      achievements: ['Gestión de proyectos', 'Estandarización de procesos'],
      links: [],
      favoriteMode: 'Adventure',
      joinDate: '2024-03'
    },
    {
      id: 5,
      name: 'Cardan',
      mcName: 'Cardan91',
      role: '⚙️ Config',
      roleClass: 'config',
      bio: 'Configurador del servidor.',
      bioLong: 'Apoya en ajustes finos y pruebas internas para nuevos módulos.',
      achievements: ['Soporte técnico interno'],
      links: [],
      favoriteMode: 'Survival',
      joinDate: '2024-04'
    },
    {
      id: 6,
      name: 'Dany',
      mcName: 'Danygch1',
      role: '🔨 Moderador',
      roleClass: 'moderator',
      bio: 'Moderador del servidor.',
      bioLong: 'Supervisa la comunidad y fomenta la convivencia, gestionando reportes y dudas.',
      achievements: ['Gestión de comunidad'],
      links: [],
      favoriteMode: 'Survival',
      joinDate: '2024-07'
    },
    {
      id: 7,
      name: 'Hatsky',
      mcName: 'Willyrex',
      role: '🌟 Trial',
      roleClass: 'trial',
      bio: 'Miembro en pruebas.',
      bioLong: 'En periodo de adaptación aportando apoyo básico y aprendiendo protocolos.',
      achievements: ['Integración al equipo'],
      links: [],
      favoriteMode: 'Survival',
      joinDate: '2024-08'
    },
    {
      id: 8,
      name: 'iCHAVO',
      mcName: 'iCHAVO',
      role: '🌟 Trial',
      roleClass: 'trial',
      bio: 'Miembro en pruebas.',
      bioLong: 'Participa en tareas iniciales y colabora en pequeñas mejoras.',
      achievements: ['Apoyo operativo'],
      links: [],
      favoriteMode: 'Survival',
      joinDate: '2024-08'
    }
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

  const handleClickCarousel = () => {
    if (isDragging) return;
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
      scheduleResume();
    }
  };

  const openMemberModal = (member) => {
    if (isDragging) return;
    setSelectedMember(member);
    setShowModal(true);
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMember(null);
    setIsPaused(false);
    scheduleResume();
  };

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

  useEffect(() => {
    const velocity = 0.5;
    const animate = () => {
      if (!isPaused && !isDragging && trackRef.current) {
        currentTranslateRef.current -= velocity;
        if (Math.abs(currentTranslateRef.current) >= originalSetWidth) {
          currentTranslateRef.current = 0;
        }
        trackRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
      }
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animationIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [isPaused, isDragging, originalSetWidth]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section id="equipo" className="relative py-24 bg-app overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title"><span className="text-gradient">Conoce al Equipo</span></h2>
          <p className="text-gray-400 mt-4">Las personas que hacen posible Dextrality</p>
        </div>
        <div className="team-carousel-wrapper">
          <div
            ref={carouselRef}
            className={`team-carousel ${isDragging ? 'dragging' : ''}`}
            onClick={(e) => { if (e.target === carouselRef.current) handleClickCarousel(); }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div ref={trackRef} className={`team-track ${isPaused ? 'paused' : ''}`}>
              {duplicatedMembers.map((member, index) => {
                const skinName = (member.mcName || member.name).trim();
                const avatarUrl = `https://mc-heads.net/avatar/${skinName}/128?cb=${encodeURIComponent(skinName)}`;
                return (
                  <TeamCard
                    key={`${member.id}-${index}`}
                    {...member}
                    avatar={avatarUrl}
                    onSelect={() => openMemberModal(member)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {showModal && selectedMember && (
          <div className="team-modal-overlay" role="dialog" aria-modal="true" onClick={closeModal}>
            <div className="team-modal" onClick={(e) => e.stopPropagation()}>
              <button className="team-modal-close" onClick={closeModal} aria-label="Cerrar">✕</button>
              <div className="team-modal-body">
                <div className="team-modal-skin">
                  <img
                    src={`https://mc-heads.net/body/${(selectedMember.mcName || selectedMember.name).trim()}/512?cb=${Date.now()}`}
                    alt={`Skin de ${selectedMember.name}`}
                    onError={(e) => { e.currentTarget.src = 'https://mc-heads.net/body/Steve/512?fb=1'; }}
                  />
                </div>
                <div className="team-modal-info">
                  <h3 className="team-modal-name">{selectedMember.name}</h3>
                  <div className="team-modal-roles">
                    {selectedMember.roles ? selectedMember.roles.map((r, i) => (
                      <span key={i} className={`team-role ${r.className}`}>{r.label}</span>
                    )) : (
                      <span className={`team-role ${selectedMember.roleClass}`}>{selectedMember.role}</span>
                    )}
                  </div>
                  <div className="team-modal-meta">
                    {selectedMember.favoriteMode && <span><strong>Modo favorito:</strong> {selectedMember.favoriteMode}</span>}
                    {selectedMember.joinDate && <span><strong>Ingreso:</strong> {selectedMember.joinDate}</span>}
                  </div>
                  <div className="team-modal-scroll">
                    <p className="team-modal-bio">{selectedMember.bio}</p>
                    {selectedMember.bioLong && <p className="team-modal-bio-long">{selectedMember.bioLong}</p>}
                  </div>
                  <div className="team-modal-achievements">
                    <h4 className="team-modal-subtitle">Logros</h4>
                    {selectedMember.achievements && selectedMember.achievements.length > 0 ? (
                      <ul>
                        {selectedMember.achievements.map((a, idx) => <li key={idx}>{a}</li>)}
                      </ul>
                    ) : <p className="team-modal-empty">Sin logros registrados todavía.</p>}
                  </div>
                  {selectedMember.links && selectedMember.links.length > 0 && (
                    <div className="team-modal-social">
                      {selectedMember.links.map(l => {
                        const lower = l.label.toLowerCase();
                        const domain = l.url.toLowerCase();
                        let Icon = GlobeIcon;
                        if (domain.includes('github') || lower.includes('github')) Icon = GitHubIcon;
                        else if (domain.includes('discord') || lower.includes('discord')) Icon = DiscordIcon;
                        else if (lower.includes('portafolio') || lower.includes('portfolio')) Icon = GlobeIcon;
                        return (
                          <a key={l.url} href={l.url} target="_blank" rel="noreferrer" aria-label={l.label} className="social-icon-btn">
                            <Icon className="w-6 h-6" />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(TeamSection);
