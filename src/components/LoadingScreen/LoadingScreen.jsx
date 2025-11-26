import { memo, useEffect, useState } from 'react';
import MinecraftLoader from './MinecraftLoader';

// Tips de carga
const TIPS = [
  "TIP: Usa /spawn para volver al inicio",
  "TIP: Únete a nuestro Discord para novedades",
  "TIP: Puedes reclamar tierras con /claim",
  "TIP: Usa /tpa para teletransportarte a amigos",
  "TIP: El servidor soporta Java y Bedrock",
  "TIP: Visita /warp tienda para comprar items",
  "TIP: Reporta bugs con /report",
  "TIP: Usa /kit para obtener recursos iniciales"
];

// Pantalla de carga
const LoadingScreen = ({ isLoading }) => {
  const [currentTip, setCurrentTip] = useState(TIPS[0]);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * TIPS.length);
      setCurrentTip(TIPS[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
      <div className="loading-content">
        {/* Logo */}
        <div className="loading-logo">
          <img
            src="logo_fin_fondo.png"
            alt="Dextrality"
            className="w-full h-full object-contain logo-glow"
          />
        </div>

        {/* Loader de Minecraft */}
        <MinecraftLoader />

        {/* Texto de carga */}
        <div className="loading-text">
          <span className="loading-title">DEXTRALITY</span>
          <span className="loading-subtitle">Cargando mundo...</span>
        </div>

        {/* Barra de progreso */}
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>

        {/* Tips */}
        <div className="loading-tips">
          <span className="loading-tip">{currentTip}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(LoadingScreen);
