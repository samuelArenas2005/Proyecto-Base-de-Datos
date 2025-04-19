import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import React from 'react';
import './App.css';
import diseno1 from './dise-o-1.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <span className="logo-black">U</span><span className="logo-purple">güee</span>
          </div>
          <ul className="nav-links">
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          <div className="nav-auth">
            <a href="#" className="login">Iniciar sesión</a>
            <a href="#" className="signup">Regístrate</a>
          </div>
        </nav>

        <header className="hero">
          <h1>Conectando Estudiantes<br />Universitarios</h1>
          <p>Ir a clase jamás había sido tan fácil</p>
          <img src={diseno1} alt="Ilustración" className="hero-image" />
        </header>
      </div>
    </div>
  );
}

export default App;




