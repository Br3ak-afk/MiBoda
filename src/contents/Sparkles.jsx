import React, { useEffect, useState } from 'react';
import './styles.css';

const Sparkles = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      const sparkleArray = [];
      for (let i = 0; i < 50; i++) { // Número de brillitos
        sparkleArray.push({
          id: i,
          x: Math.random() * window.innerWidth, // Posición X aleatoria
          y: Math.random() * window.innerHeight, // Posición Y aleatoria
          delay: Math.random() * 3, // Retardo aleatorio para animaciones
        });
      }
      setSparkles(sparkleArray);
    };

    generateSparkles();
    window.addEventListener('resize', generateSparkles);

    return () => window.removeEventListener('resize', generateSparkles);
  }, []);

  return (
    <div className="sparkles">
      {sparkles.map((sparkle) => {
        return (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              animationDelay: `${sparkle.delay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );  
};

export default Sparkles;
