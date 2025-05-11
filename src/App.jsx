import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Componentes
import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Noticias from './components/Noticias';
import Tramites from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Noticias />
      <Tramites />
      <Contacto />
      <Footer />
    </div>
  );
}