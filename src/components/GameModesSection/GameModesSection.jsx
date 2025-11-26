import { memo } from 'react';
import { IslandIcon, LeafIcon } from '../Icons/index';

const GameModeCard = memo(({ icon: Icon, image, title, description, iconBg }) => {
  return (
    <article className="gamemode-card flex flex-col items-center">
      {image ? (
        <div className="flex items-center justify-center w-48 h-48 mb-4">
          <img src={image} alt={title} className="w-48 h-48 object-contain" />
        </div>
      ) : (
        <div className={`gamemode-icon ${iconBg}`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
      )}
      <h3 className="gamemode-title">{title}</h3>
      <p className="gamemode-desc">{description}</p>
    </article>
  );
});

GameModeCard.displayName = 'GameModeCard';

const GameModesSection = () => {
  const gameModes = [
    {
      id: 1,
      image: 'earth.png',
      title: 'Earth',
      description: 'Explora un mapa a escala del planeta Tierra.',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      icon: LeafIcon,
      title: 'Vanilla',
      description: 'La experiencia clásica de Minecraft sin modificaciones.',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-700'
    },
    {
      id: 3,
      image: '1910.png',
      title: '1910',
      description: 'Vive la historia en una época de revoluciones.',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600'
    },
    {
      id: 4,
      icon: IslandIcon,
      title: 'Skyblock',
      description: 'Comienza en una isla flotante y expande tu imperio.',
      iconBg: 'bg-gradient-to-br from-purple-500 to-violet-700'
    }
  ];

  return (
    <section id="modos" className="relative py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">  Modalidades</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Explora diferentes formas de jugar
          </p>
        </div>

        {/* Game Modes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameModes.map((mode) => (
            <GameModeCard key={mode.id} {...mode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(GameModesSection);
