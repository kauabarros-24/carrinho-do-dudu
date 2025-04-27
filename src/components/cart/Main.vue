<template>
    <main class="cart-container">
      <h2 class="cart-title">📦 Seu Grimório Mágico</h2>
  
      <div class="cart-content">
        <div class="cart-items">
          <div class="cart-item">
            <img src="" alt="Livro" class="item-image" />
            <div class="item-details">
              <h3>City of Fallen Angels</h3>
              <p class="item-author">Cassandra Clare</p>
              <div class="item-controls">
                <button class="quantity-btn">−</button>
                <span class="quantity">2</span>
                <button class="quantity-btn">+</button>
              </div>
            </div>
            <div class="item-pricing">
              <span class="price">R$27,90</span>
              <span class="total">R$55,80</span>
            </div>
          </div>
        </div>
  
        <div class="cart-summary">
          <div class="summary-card">
            <h3>📝 Resumo Alquímico</h3>
            <div class="summary-row">
              <span>Subtotal:</span>
              <span>R$127,80</span>
            </div>
            <div class="summary-row">
              <span>Encantamento Postal:</span>
              <span>Grátis</span>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-total">
              <span>Total Geral:</span>
              <span class="grand-total">R$127,80</span>
            </div>
            <button class="checkout-btn">Finalizar Alquimia</button>
  
            <div class="coupon-section">
              <input type="text" placeholder="Código Rúnico" class="coupon-input" />
              <button class="coupon-btn">Aplicar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  
    <section class="flash-offer">
      <div class="offer-content">
        <div class="offer-text">
          <span class="offer-badge">⚡ Oferta Crepuscular</span>
          <h2>Coleção Completa de Schimit</h2>
          <p>Todos os 7 grimórios por apenas R$199,90</p>
        </div>
        <div class="offer-timer">
          <div class="timer-item">
            <span>02</span>
            <small>Horas</small>
          </div>
          <div class="timer-item">
            <span>45</span>
            <small>Minutos</small>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .cart-container {
    max-width: 1400px;
    margin: 2rem auto;
    padding: 0 20px;
  }
  
  .cart-title {
    color: #2d7a4b;
    border-bottom: 3px solid #e9ecef;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
  
  .cart-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }
  
  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .cart-item {
    display: grid;
    grid-template-columns: 120px 2fr 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
  
  .item-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .item-details h3 {
    margin: 0;
  }
  
  .item-author {
    color: #666;
    font-size: 0.9rem;
  }
  
  .item-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 1rem;
  }
  
  .quantity-btn {
    background-color: #d1e7dd;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .quantity {
    font-size: 1rem;
  }
  
  .item-pricing {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .price, .total {
    font-weight: bold;
    font-size: 1rem;
  }
  
  .cart-summary {
    position: sticky;
    top: 2rem;
  }
  
  .summary-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
  
  .summary-card h3 {
    margin-bottom: 1.5rem;
  }
  
  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .summary-divider {
    border-top: 2px solid #e9ecef;
    margin: 1rem 0;
  }
  
  .summary-total {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  
  .checkout-btn {
    width: 100%;
    padding: 1rem;
    background-color: #2d7a4b;
    color: white;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .checkout-btn:hover {
    background-color: #27663d;
  }
  
  .coupon-section {
    margin-top: 2rem;
    display: flex;
    gap: 10px;
  }
  
  .coupon-input {
    flex: 1;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  
  .coupon-btn {
    padding: 0.75rem 1.5rem;
    background-color: #2d7a4b;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .flash-offer {
    margin-top: 4rem;
    padding: 2rem;
    background: #d1e7dd;
    border-radius: 12px;
  }
  
  .offer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .offer-text {
    display: flex;
    flex-direction: column;
  }
  
  .offer-badge {
    background-color: #2d7a4b;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .offer-timer {
    display: flex;
    gap: 20px;
  }
  
  .timer-item {
    background: white;
    padding: 10px 20px;
    border-radius: 8px;
    text-align: center;
  }
  
  .timer-item span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .timer-item small {
    display: block;
    font-size: 0.8rem;
    color: #666;
  }
  </style>
  