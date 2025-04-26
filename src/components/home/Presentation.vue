<template>
  <div>
    <section class="promo-container">
      <div class="promo-text">
        <span class="badge">Autor Inovador</span>
        <h1>Potássio Schimit</h1>
        <p class="description">
          Potássio Schimit é um personagem lendário, nascido nas profundezas de um laboratório alquímico abandonado.
          Dotado de uma curiosidade incansável, ele viaja pelas terras em busca de elementos esquecidos e segredos
          perdidos. Com seu manto esvoaçante e olhos cintilantes como brasas, Schimit já decifrou mais de 30 fórmulas
          misteriosas e conquistou o título de Guardião dos Metais Raros. Suas aventuras inspiram jovens alquimistas ao
          redor do mundo, e sua reputação supera até mesmo as lendas mais antigas.
        </p>
        <button class="btn">
          <span class="btn-content">Descubra suas aventuras</span>
          <div class="hover-effect"></div>
        </button>
      </div>

      <div class="promo-image">
        <div class="image-wrapper">
          <img src="./images/fire.png"> </img>
        </div>
        <p class="note">*edição limitada</p>
      </div>
    </section>

    <section class="features">
      <div class="feature-item">
        <div class="feature-icon">⚗️</div>
        <span>Experimentos Únicos</span>
      </div>
      <div class="feature-item">
        <div class="feature-icon">📖</div>
        <span>Contos Encantados</span>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔮</div>
        <span>Best-sellers Místicos</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

.promo-container {
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  max-width: 1200px;
  margin: 40px auto;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.promo-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #2d7a4b 0%, #5cb85c 100%);
}

.promo-text {
  max-width: 55%;
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-block;
  background: #2d7a4b;
  color: #fff;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

h1 {
  font-size: 2.5rem;
  margin: 20px 0;
  color: #2d3436;
  line-height: 1.2;
  font-weight: 700;
}

.description {
  color: #636e72;
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.btn {
  position: relative;
  background: #2d7a4b;
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
  font-weight: 600;
}

.hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: 0.5s;
}

.btn:hover .hover-effect {
  left: 100%;
}

.btn:hover {
  transform: translateY(-2px);
}

.promo-image {
  position: relative;
  padding: 20px;
}

.image-wrapper {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-5px);
}

.promo-image img {
  width: 280px;
  height: auto;
  display: block;
}

.note {
  font-size: 0.85rem;
  color: #95a5a6;
  margin-top: 15px;
  text-align: center;
  font-style: italic;
}

.features {
  display: flex;
  justify-content: center;
  gap: 60px;
  max-width: 1000px;
  margin: 50px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.feature-item {
  text-align: center;
  font-size: 1rem;
  color: #2d3436;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: #f8f9fa;
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 15px;
  opacity: 0.8;
}
</style>