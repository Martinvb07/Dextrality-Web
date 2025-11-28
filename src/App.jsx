import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import GameModesSection from './components/GameModesSection/GameModesSection';
import HeroSection from './components/HeroSection/HeroSection';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import NewsSection from './components/NewsSection/NewsSection';
import TeamSection from './components/TeamSection/TeamSection';
import GuiasIndex from './pages/Guias/Index';
import guides from './pages/Guias/guides';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time of 2 seconds for the loading animation
    const minLoadTime = 2000;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main Content with Router */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <BrowserRouter>
          <Navbar />

          <Routes>
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
            <Route path="/guia" element={<Navigate to="/guias" replace />} />
            <Route path="/guias" element={<GuiasIndex />} />
            {guides.map((g) => {
              const LazyComp = React.lazy(() => import(`./pages/Guias/${g.component}`));
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
