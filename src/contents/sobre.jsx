import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import WeddingInvitation from './InvitacionPage.jsx';
import sobre from './img/sobre.svg';
import flores from './img/Flores_01.svg';
import Sparkles from './Sparkles.jsx';
import './styles.css';

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const numImages = 2; // Número de imágenes de fondo

  const handleEnvelopeClick = () => {
    setIsOpen(true); // Marca como abierto
    document.body.style.overflow = 'auto'; // Habilita el scroll al abrir el sobre
  };

  useEffect(() => {
    // Configuración de ScrollReveal
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 100,
      reset: true,
    });
    sr.reveal('.animate', { interval: 200 });

    // Desactiva el scroll inicialmente
    document.body.style.overflow = 'hidden';

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const generateRandomStyles = () => ({
    top: `${Math.floor(Math.random() * 90)}%`,
    left: `${Math.floor(Math.random() * 90)}%`,
    transform: `rotate(${Math.random() * 360}deg)`,
    maxWidth: '100%', // Ajusta el tamaño máximo de las imágenes
    maxHeight: '100%',
    position: 'absolute',
    zIndex: -1,
  });

  return (
    <div className="envelope-container container">
      {!isOpen ? (
        <div className="envelope animate" onClick={handleEnvelopeClick}>
          <div className="envelope-flap"></div>
          <div className="envelope-body">
            <p className="envelope-text">Haz clic para abrir</p>
            <img src={sobre} alt="Sobre" className="envelope-image" />
          </div>
        </div>
      ) : (
        <WeddingInvitation />
      )}
      <Sparkles />
      {/* Muestra imágenes de fondo solo si el sobre no está abierto */}
      {!isOpen &&
        Array.from({ length: numImages }).map((_, index) => (
          <img
            key={index}
            src={flores}
            alt={`Imagen de fondo aleatoria ${index + 1}`}
            className="imagen-fondo"
            style={generateRandomStyles()}
          />
        ))}
    </div>
  );
};

export default Envelope;
