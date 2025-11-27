import React from 'react';

const Guia = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-cyan-300 mb-4">Guía</h1>
        <p className="text-slate-300">Bienvenido a la guía de Dextrality. Aquí podrás encontrar ayuda, tutoriales y documentación para jugadores.</p>
        <div className="mt-8 bg-slate-900/60 border border-teal-500/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Contenido</h2>
          <ul className="list-disc pl-5 text-slate-300">
            <li>Cómo conectarse al servidor</li>
            <li>Reglas básicas</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guia;
