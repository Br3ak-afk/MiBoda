import React, { useState, useEffect } from 'react';
import miImagen from './img/boda_001.jpg';
import miImagen2 from './img/boda_002.jpg';
import miImagen3 from './img/boda_003.jpg';
import flores from './img/Flores_01.svg';
import flores2 from './img/Flores_02.svg';
import ScrollReveal from 'scrollreveal';
import Sparkles from './Sparkles.jsx';
import { Calendar, MapPin, CheckCircle, Heart, Clock, Menu } from 'lucide-react';

const WeddingInvitation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Configurar efecto de scroll para el navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Configurar animaciones con ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 100,
      reset: true,
    });
    sr.reveal('.animate', { interval: 200 });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '60px',
      duration: 2000,
      delay: 100,
      reset: true,
    });
    sr.reveal('.animate2', { interval: 200 });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'right',
      distance: '60px',
      duration: 2000,
      delay: 100,
      reset: true,
    });
    sr.reveal('.animate3', { interval: 200 });
  }, []);

  // Contador regresivo
  useEffect(() => {
    const weddingDate = new Date('2024-12-15T16:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeRemaining('¡Es el día de la boda!');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-100 text-gray-800 font-nunito overflow-x-hidden relative x">
      <Sparkles></Sparkles>
      {/* Esquinas decorativas */}

      {/* Navegación */}
      <nav
        className={`fixed top-0 w-full z-50 px-4 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md border-b-4 border-rose-200'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className={`${scrolled ? 'text-rose-800' : 'text-rose-800'}`} size={20} />
          </button>
          <div
            className={`absolute top-10 left-0 w-full bg-white shadow-lg rounded-b-lg md:static md:bg-transparent md:shadow-none md:flex ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            {['Inicio', 'Fotos', 'Itinerario', 'Ubicacion', 'Regalos', 'Confirmación'].map(
              (item, index) => (
                <button
                  key={index}
                  className={`block w-full md:w-auto px-4 py-3 text-left md:text-center rounded-none md:rounded-full transition-all duration-300 hover:bg-rose-100 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-rose-200 font-bold'
                      : scrolled
                      ? 'text-rose-800'
                      : 'text-rose-800'
                  }`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Sección Principal */}
      <section className="flex items-center justify-center text-center secPrin" id='inicio'>
        <div className="w-3/4 max-w-3xl p-12 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border-1 border-rose-200">
        <img src={flores} alt="" className='Flores animate'/>
          <h1 className="text-6xl font-great-vibes text-rose-800  lobster-regular animate2">Andrea</h1>
          <h1 className="text-6xl font-great-vibes text-rose-800 mb-4 lobster-regular animate3">& Juan</h1>
          <p className="text-2xl text-rose-600 mb-4 playwrite-gb-j-guides-regular-italic">¡Nos Casamos!</p>
          <div>
            <h4>Tenemos el honor de invitarles a celebrar nuestra boda.</h4>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-2">
              <Calendar className="text-rose-600" />
              <span>15 Septiembre 2024</span>
            </div>
          </div>
          <img src={flores2} alt="" className='Flores2 animate'/>
        </div>
      </section>
      <section>
        <h3 className='playwrite-gb-j-guides-regular text-5xl text-rose-800'>Tiempo Restante</h3>
        <div className="text-xl text-gray-700 mt-10 mb-20 flex items-center justify-center">
          <Clock className="mr-2 text-rose-600" />
          {timeRemaining}
        </div>
      </section>
      
      {/* Sección de Fotos */}
      <section className="relative" id="fotos">
        <div className="max-w-7xl mx-auto">
          <img src={miImagen} alt=""/>
        </div>
      </section>

      {/* Sección de Itinerario */}
      <section className="bg-gradient-to-br from-white to-pink-100 py-20 px-4" id="itinerario">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-rose-800 mb-6 playwrite-gb-j-guides-regular-italic">Itinerario</h2>
          <ul className="space-y-4 text-gray-700 border-l-4 border-rose-300 pl-4">
            <li><strong>16:00</strong> - Ceremonia</li>
            <li><strong>18:00</strong> - Recepción</li>
            <li><strong>20:00</strong> - Cena</li>
            <li><strong>22:00</strong> - Baile</li>
          </ul>
        </div>
      </section>
      {/* Sección de Fotos */}
      <section className="relative" id="fotos">
        <div className="max-w-7xl mx-auto">
          <img src={miImagen2} alt=""/>
        </div>
      </section>
      {/* Sección de Ubicación */}
      <section className="bg-white py-20 px-4" id="ubicacion">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-rose-800 mb-6 playwrite-gb-j-guides-regular-italic">Ubicación</h2>
          <iframe 
            title="Ubicación de la Boda" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090837!2d-122.08185138468124!3d37.38605197982744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2a83c5db%3A0x7899a2d85cbb21b3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633613179332!5m2!1sen!2sus" 
            className="w-full h-64 rounded-xl border-0 shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Sección de Regalos */}
      <section className="bg-gradient-to-br from-pink-100 to-white py-20 px-4" id="regalos">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-rose-800 mb-6 playwrite-gb-j-guides-regular-italic">Regalos</h2>
          <p className="text-gray-700 m-6">Tu presencia es nuestro mejor regalo. Si deseas contribuir con un obsequio monetario, aquí tienes nuestra tarjeta:</p>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-800 font-bold">Número de Tarjeta:</p>
            <p className="text-rose-600 text-xl">1234 5678 9012 3456</p>
          </div>
        </div>
      </section>

      {/* Sección de Fotos */}
      <section className="relative" id="fotos">
        <div className="max-w-7xl mx-auto">
          <img src={miImagen3} alt=""/>
        </div>
      </section>

      {/* Sección de Confirmación */}
      <section className="bg-white flex items-center justify-center px-4 py-20" id='confirmación'>
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8 border-4 border-rose-200">
          {!isConfirmed ? (
            <form onSubmit={handleConfirmation} className="space-y-6">
              <h2 className="text-3xl text-rose-800 text-center mb-6 playwrite-gb-j-guides-regular-italic">Confirma tu Asistencia</h2>
              <input type="text" placeholder="Nombre Completo" required className="w-full p-3 border-2 border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition" />
              <input type="email" placeholder="Correo Electrónico" required className="w-full p-3 border-2 border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 transition" />
              <textarea placeholder="Mensaje para los novios" className="w-full p-3 border-2 border-rose-200 rounded-xl h-24 focus:outline-none focus:border-rose-500"></textarea>
              <button type="submit" className="w-full bg-rose-600 text-white py-3 rounded-xl hover:bg-rose-700 transition duration-300">Confirmar Asistencia</button>
            </form>
          ) : (
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-500 mb-6" size={80} />
              <h2 className="text-3xl text-rose-800 mb-4">¡Confirmación Exitosa!</h2>
              <p className="text-gray-600">Gracias por ser parte de nuestro día especial.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WeddingInvitation;

