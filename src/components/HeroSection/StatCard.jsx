import { memo, useEffect, useRef, useState } from 'react';

// Tarjeta de estadística con animación
const StatCard = ({ count, label }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [count]);

  const animateCount = () => {
    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(count * easeOut);

      setDisplayCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayCount(count);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div ref={cardRef} className="stat-card">
      <span className="stat-number">{displayCount.toLocaleString()}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default memo(StatCard);
