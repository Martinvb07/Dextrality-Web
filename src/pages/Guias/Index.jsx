import React from 'react';
import { Link } from 'react-router-dom';
import guides from './guides';

const GuiasIndex = () => {
    return (
        <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-cyan-300 mb-4">Guías</h1>
            <p className="text-slate-300 mb-8">Encuentra guías, tutoriales y documentación para jugadores.</p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {guides.map((g) => (
                <Link key={g.id} to={`/guias/${g.id}`} className="block bg-slate-900/60 border border-teal-500/10 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-700 rounded-md mb-4 flex items-center justify-center">
                    <img src={g.image} alt={g.title} className="max-h-28" />
                </div>
                <h3 className="text-lg font-semibold text-white">{g.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{g.excerpt}</p>
                </Link>
            ))}
            </div>
        </div>
        </section>
    );
};

export default GuiasIndex;
