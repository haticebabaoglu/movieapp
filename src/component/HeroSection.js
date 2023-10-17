
import React from 'react';


function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hoş Geldiniz.</h1>
      <p>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</p>
      <div className="search-bar">
        <input type="text" placeholder="Film, Dizi, Kisi Ara..." />
        <button>Ara</button>
      </div>
    </div>
  );
}

export default HeroSection;
