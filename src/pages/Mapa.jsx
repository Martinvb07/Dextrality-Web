import React from 'react';

const Mapa = () => {
  return (
    <main className="pt-20 bg-[#05060a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <h1 className="text-3xl font-bold text-slate-100 tracking-wide mb-4">
          MAPA DEL SERVIDOR
        </h1>
        <p className="text-slate-400 mb-4 text-sm">
          Vista interactiva del mundo de Dextrality. Puedes moverte y hacer zoom directamente desde aqui.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <iframe
            src="https://earth.dextrality.net/"
            title="Mapa Dextrality"
            className="w-full h-[75vh]"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
};

export default Mapa;
