import React from 'react';
import Intro from './Intro';
import Header from './Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particle from './Particle';

export default function Home() {

  AOS.init();
  return (
    <>
      <div className="container-home w-full"
        id='home'
        style={{ height: `calc(100vh + 63px)` }}>
        {/* Particles Js */}
        <Particle />

        {/* Greeting container */}
        <Intro />

        {/* Navigation */}
        <Header />
      </div>
    </>
  )
}
