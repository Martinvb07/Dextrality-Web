import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import GameModesSection from './components/GameModesSection/GameModesSection';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import NewsSection from './components/NewsSection/NewsSection';
import TeamSection from './components/TeamSection/TeamSection';
import GuiasIndex from './pages/Guias/Index';
import guides from './pages/Guias/guides';
import { loadGuide } from './pages/Guias/loader.js';


function App() {
  return (
    <>
      {/* Main Content */}
      <div className="transition-opacity duration-500 opacity-100">
        <BrowserRouter>
          <Navbar />

          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={
                <main>
                  <HeroSection />
                  <NewsSection />
                  <GameModesSection />
                  <TeamSection />
                </main>
              }
            />

            {/* Redirección */}
            <Route path="/guia" element={<Navigate to="/guias" replace />} />

            {/* Índice de guías */}
            <Route path="/guias" element={<GuiasIndex />} />

            {/* GUÍAS DINÁMICAS */}
            {guides.map((g) => {
              const LazyComp = React.lazy(() => loadGuide(g.component));

              return (
                <Route
                  key={g.id}
                  path={`/guias/${g.id}`}
                  element={
                    <Suspense fallback={<div className="p-8 text-center">Cargando guía...</div>}>
                      <LazyComp />
                    </Suspense>
                  }
                />
              );
            })}
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
