<template>
    <div>
      <section class="promo-container">
        <div class="promo-text">
          <span class="badge">Autor Inovador</span>
          <h1>Potássio Schimit</h1>
          <p>
            Potássio Schimit é um personagem lendário, nascido nas profundezas de um laboratório alquímico abandonado. Dotado de uma curiosidade incansável, ele viaja pelas terras em busca de elementos esquecidos e segredos perdidos. Com seu manto esvoaçante e olhos cintilantes como brasas, Schimit já decifrou mais de 30 fórmulas misteriosas e conquistou o título de Guardião dos Metais Raros. Suas aventuras inspiram jovens alquimistas ao redor do mundo, e sua reputação supera até mesmo as lendas mais antigas.
          </p>
          <button class="btn">Descubra suas aventuras</button>
        </div>
  
        <div class="promo-image">
          <img :src="imagem" alt="Retrato de Potássio Schimit" />
          <p class="note">*edição limitada</p>
        </div>
      </section>
  
      <section class="features">
        <div class="feature-item">
          <span>Experimentos Únicos</span>
        </div>
        <div class="feature-item">
          <span>Contos Encantados</span>
        </div>
        <div class="feature-item">
          <span>Best-sellers Místicos</span>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import tecnologiaImg from './images/tecnologia.png'
  
  const imagem = tecnologiaImg
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .promo-container {
    border: 2px solid #4a90e2;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    max-width: 1000px;
    margin: 0 auto 40px;
  }
  
  .promo-text {
    max-width: 60%;
  }
  
  .badge {
    display: inline-block;
    background-color: #e0f2e9;
    color: #2d7a4b;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .promo-text h1 {
    font-size: 2rem;
    margin: 10px 0;
  }
  
  .promo-text p {
    margin-bottom: 20px;
    color: #555;
  }
  
  .btn {
    background-color: #2d7a4b;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #27683f;
  }
  
  .promo-image img {
    max-width: 200px;
    height: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .note {
    font-size: 0.8rem;
    color: #888;
    margin-top: 8px;
    text-align: center;
  }
  
  .features {
    display: flex;
    justify-content: center;
    gap: 40px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .feature-item {
    text-align: center;
    font-size: 0.95rem;
  }
  </style>
  