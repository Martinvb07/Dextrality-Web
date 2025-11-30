import { memo } from 'react';
import { DiscordIcon, TwitterIcon, YouTubeIcon } from '../Icons/index';

const Footer = () => {
  return (
    <footer className="border-t border-teal-500/20" style={{ backgroundColor: 'rgb(49, 49, 49)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img
                src="/logo_fin_fondo.png"
                alt="Dextrality Logo"
                className="w-13 h-13 object-contain logo-glow"
                style={{ width: '52px', height: '52px' }}
              />
              <span className="text-2xl font-bold text-gradient">DEXTRALITY</span>
            </div>
            <p className="text-gray-400 max-w-md">El mejor servidor de Minecraft. Java & Bedrock.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="social-link">
              <DiscordIcon className="w-5 h-5" />
            </a>
            <a href="#" className="social-link">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="#" className="social-link">
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://minotar.net/avatar/Martind07/48.png"
              alt="Martin avatar"
              className="w-10 h-10 rounded-md shadow"
            />
            <p className="text-gray-500 text-sm">2025 Dextrality Network. By Martin</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
