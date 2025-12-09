import { memo } from 'react';
import { DiscordIcon, TwitterIcon, YouTubeIcon } from '../Icons/index';

const Footer = () => {
  return (
    <footer className="" style={{ backgroundColor: 'rgb(49, 49, 49)' }}>
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
              <span className="text-2xl font-bold text-gradient">Dextrality</span>
            </div>
            <p className="text-gray-400 max-w-md">El mejor servidor de Minecraft. Java & Bedrock.</p>
            
            <p className="text-sm text-gray-300 font-semibold mt-1">
              Dextrality Network, un producto de contacto@dextrality.net
            </p>
            <p className="text-sm text-gray-400">
              No estamos afiliados ni somos respaldados por Mojang AB.
            </p>  
            </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] transition-all duration-300 hover:scale-110 text-white border border-transparent"
              aria-label="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-[#1DA1F2] hover:bg-[#1991DA] transition-all duration-300 hover:scale-110 text-white border border-transparent"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-[#FF0000] hover:bg-[#CC0000] transition-all duration-300 hover:scale-110 text-white border border-transparent"
              aria-label="YouTube"
            >
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center">
          <div className="flex items-center justify-center">
            <p className="text-gray-500 text-sm">Dextrality Network. By Martin</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
