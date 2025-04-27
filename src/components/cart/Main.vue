<script setup>
import { ref } from 'vue';

// Estado dos produtos no carrinho
const cart1 = ref(1);
const cart2 = ref(1);

// Funções para atualizar as quantidades
function addToCart1() {
  cart1.value++;
}
function removeFromCart1() {
  if (cart1.value > 1) cart1.value--;
}
function addToCart2() {
  if  (cart1.value )cart2.value++;
}
function removeFromCart2() {
  if (cart2.value > 1) cart2.value--;
}
</script>

<template>
  <main class="cart-container">
    <h2 class="cart-title">📦 Seu Grimório Mágico</h2>

    <div class="cart-content">
      <div class="cart-items">
        <!-- Livro 1 -->
        <div class="cart-item">
          <img src="" alt="Livro" class="item-image" />
          <div class="item-details">
            <h3>City of Fallen Angels</h3>
            <p class="item-author">Cassandra Clare</p>
            <div class="item-controls">
              <button class="quantity-btn" @click="removeFromCart1">−</button>
              <span class="quantity">{{ cart1 }}</span>
              <button class="quantity-btn" @click="addToCart1">+</button>
            </div>
          </div>
          <div class="item-pricing">
            <span class="price">R$ 27,90</span>
            <span class="total">R$ {{ (cart1 * 27.9).toFixed(2) }}</span>
          </div>
        </div>

        <!-- Livro 2 -->
        <div class="cart-item">
          <img src="" alt="Livro" class="item-image" />
          <div class="item-details">
            <h3>The Infernal Devices</h3>
            <p class="item-author">Cassandra Clare</p>
            <div class="item-controls">
              <button class="quantity-btn" @click="removeFromCart2">−</button>
              <span class="quantity">{{ cart2 }}</span>
              <button class="quantity-btn" @click="addToCart2">+</button>
            </div>
          </div>
          <div class="item-pricing">
            <span class="price">R$ 34,50</span>
            <span class="total">R$ {{ (cart2 * 34.5).toFixed(2) }}</span>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <div class="summary-card">
          <h3>📝 Resumo Alquímico</h3>
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>R$ {{ (cart1 * 27.9 + cart2 * 34.5).toFixed(2) }}</span>
          </div>
          <div class="summary-row">
            <span>Encantamento Postal:</span>
            <span>Grátis</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-total">
            <span>Total Geral:</span>
            <span class="grand-total">R$ {{ (cart1 * 27.9 + cart2 * 34.5).toFixed(2) }}</span>
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
</style>
