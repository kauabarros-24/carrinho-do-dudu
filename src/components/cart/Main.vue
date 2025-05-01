<template>
  <div class="cart-container">
    <h2 class="cart-title">📦 Seu Grimório Mágico</h2>
    
    <div class="cart-content" v-if="cartItems.length > 0">
      <div class="cart-items">
        <div 
          class="cart-item"
          v-for="item in cartItems"
          :key="item.id"
        >
          <div class="item-image-container">
            <img :src="item.image" :alt="item.title" class="item-image">
          </div>
          <div class="item-details">
            <h3>{{ item.title }}</h3>
            <p class="item-author">{{ item.author }}</p>
            <div class="item-controls">
              <button 
                class="quantity-btn"
                @click="updateQuantity(item.id, -1)"
                :disabled="item.quantity <= 1"
              >−</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button 
                class="quantity-btn"
                @click="updateQuantity(item.id, 1)"
              >+</button>
            </div>
          </div>
          <div class="item-pricing">
            <button class="remove-btn" @click="removeItem(item.id)">×</button>
            <span class="total">{{ formatPrice(item.price * item.quantity) }}</span>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <div class="summary-card">
          <h3>📝 Resumo Alquímico</h3>
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>{{ formatPrice(subtotal) }}</span>
          </div>
          <div class="summary-row">
            <span>Encantamento Postal:</span>
            <span>Grátis</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-total">
            <span>Total Geral:</span>
            <span class="grand-total">{{ formatPrice(total) }}</span>
          </div>
          <button 
            class="checkout-btn"
            @click="toggleCheckout"
            :disabled="processing"
          >
            {{ processing ? 'Processando...' : 'Finalizar Alquimia' }}
          </button>
        </div>
      </div>

      <div class="checkout-overlay" v-if="showCheckout">
        <div class="checkout-modal">
          <h3>🔮 Finalizar Transação</h3>
          <form @submit.prevent="processPayment">
            <div class="form-group">
              <input 
                type="text" 
                v-model="paymentData.card"
                placeholder="Número do Cartão"
                required
              >
            </div>
            <button type="submit" class="confirm-btn">Confirmar Pagamento</button>
          </form>
        </div>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>🧙 Seu carrinho está vazio!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const CART_STORAGE_KEY = 'ifbooks_cart'
const cartItems = ref([])
const processing = ref(false)
const showCheckout = ref(false)
const paymentData = ref({ card: '' })

onMounted(() => {
  const savedCart = localStorage.getItem(CART_STORAGE_KEY)
  if (savedCart) cartItems.value = JSON.parse(savedCart)
  window.addEventListener('cart-updated', (e) => cartItems.value = e.detail)
})

watch(cartItems, (newCart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart))
}, { deep: true })

const subtotal = computed(() => 
  cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
)

const total = computed(() => subtotal.value)

const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const updateQuantity = (bookId, change) => {
  const itemIndex = cartItems.value.findIndex(item => item.id === bookId)
  if (itemIndex > -1) {
    const newQuantity = cartItems.value[itemIndex].quantity + change
    newQuantity > 0 
      ? cartItems.value[itemIndex].quantity = newQuantity
      : cartItems.value.splice(itemIndex, 1)
  }
}

const removeItem = (bookId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== bookId)
}

const toggleCheckout = () => {
  showCheckout.value = !showCheckout.value
}

const processPayment = async () => {
  try {
    processing.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    cartItems.value = []
    localStorage.removeItem(CART_STORAGE_KEY)
    showCheckout.value = false
    alert('✨ Transação concluída com sucesso!')
  } catch {
    alert('⚠️ Erro ao processar pagamento!')
  } finally {
    processing.value = false
  }
}
</script>

<style scoped>
.cart-container {
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 20px;
  min-height: 70vh;
}

.cart-title {
  color: #2d7a4b;
  border-bottom: 3px solid #e9ecef;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
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
  grid-template-columns: 100px 2fr auto;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.item-image-container {
  width: 100px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.quantity {
  min-width: 30px;
  text-align: center;
}

.summary-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  position: sticky;
  top: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
}

.summary-divider {
  border-top: 2px dashed #ddd;
  margin: 1rem 0;
}

.empty-cart {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  font-size: 1.5rem;
  color: #636e72;
  text-align: center;
}

.checkout-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.checkout-modal {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideIn 0.3s ease-out;
}

.form-group input {
  width: 93%;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;

}

.quantity-btn {
  background: #2d7a4b;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.checkout-btn {
  background: #2d7a4b;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.checkout-btn:hover {
  transform: scale(1.02);
}

.confirm-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.confirm-btn:hover {
  transform: scale(1.02);
}

.item-pricing {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cart-item {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1rem;
  }

  .item-image-container {
    width: 100%;
    height: auto;
    max-width: 200px;
    margin: 0 auto;
  }

  .item-pricing {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .item-controls {
    justify-content: center;
  }

  .checkout-modal {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .quantity-btn {
    width: 36px;
    height: 36px;
  }
  
  .checkout-btn {
    font-size: 1rem;
    padding: 0.8rem;
  }
}
</style>