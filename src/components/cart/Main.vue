<!-- CartComponent.vue -->
<template>
  <div class="cart-container">
    <h2 class="cart-title">🧙 Seu Grimório Mágico</h2>
    
    <div class="cart-content" v-if="cartItems.length > 0">
      <div class="cart-items">
        <div 
          class="cart-item"
          v-for="item in cartItems"
          :key="item.id"
        >
          <img :src="item.image" :alt="item.title" class="item-image">
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
            <span class="total">{{ formatPrice(item.price * item.quantity) }}</span>
          </div>
          <button class="remove-btn" @click="removeItem(item.id)">×</button>
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
          <h3>🔮 Finalizar Transação Mágica</h3>
          <form @submit.prevent="processPayment">
            <div class="form-group">
              <label>Pergaminho do Cartão</label>
              <input 
                type="text" 
                v-model="paymentData.card"
                placeholder="4242 4242 4242 4242"
                required
              >
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Validade do Feitiço</label>
                <input 
                  type="text" 
                  v-model="paymentData.expiry"
                  placeholder="MM/AA"
                  required
                >
              </div>
              
              <div class="form-group">
                <label>Código Rúnico</label>
                <input 
                  type="text" 
                  v-model="paymentData.cvc"
                  placeholder="123"
                  required
                >
              </div>
            </div>

            <div class="form-actions">
              <button 
                type="button" 
                class="btn-cancel"
                @click="showCheckout = false"
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                class="btn-confirm"
                :disabled="processing"
              >
                {{ processing ? 'Conjurando...' : 'Confirmar Transação' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>📖 Seu carrinho está vazio!</p>
      <router-link to="/" class="btn-shopping">Continuar Explorando</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const CART_STORAGE_KEY = 'ifbooks_cart'
const cartItems = ref([])
const processing = ref(false)
const showCheckout = ref(false)
const paymentData = ref({
  card: '',
  expiry: '',
  cvc: ''
})

// Carregar carrinho
onMounted(() => {
  const savedCart = localStorage.getItem(CART_STORAGE_KEY)
  if (savedCart) cartItems.value = JSON.parse(savedCart)
  
  window.addEventListener('cart-updated', (e) => {
    cartItems.value = e.detail
  })
})

// Atualizar localStorage
watch(cartItems, (newCart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart))
}, { deep: true })

// Cálculos
const subtotal = computed(() => 
  cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
)

const total = computed(() => subtotal.value)

// Formatar preço
const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

// Atualizar quantidade
const updateQuantity = (bookId, change) => {
  const itemIndex = cartItems.value.findIndex(item => item.id === bookId)
  if (itemIndex > -1) {
    const newQuantity = cartItems.value[itemIndex].quantity + change
    if (newQuantity > 0) {
      cartItems.value[itemIndex].quantity = newQuantity
    } else {
      cartItems.value.splice(itemIndex, 1)
    }
  }
}

// Remover item
const removeItem = (bookId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== bookId)
}

// Checkout
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
    alert('✨ Transação concluída! Seus livros estão a caminho.')
  } catch {
    alert('⚠️ A magia falhou! Tente novamente.')
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
  grid-template-columns: 120px 2fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  position: relative;
}

.item-image {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.item-details h3 {
  color: #2d3436;
  margin-bottom: 0.5rem;
}

.item-author {
  color: #636e72;
  font-size: 0.95rem;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: 2px solid #2d7a4b;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.quantity-btn:hover:not(:disabled) {
  background: #2d7a4b;
  color: white;
}

.item-pricing {
  text-align: right;
}

.total {
  color: #2d7a4b;
  font-weight: 700;
  font-size: 1.1rem;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.remove-btn:hover {
  transform: scale(1.2);
}

.checkout-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.checkout-modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  animation: modalIn 0.3s ease;
}

@keyframes modalIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2d3436;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e9ecef;
  border-radius: 6px;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn-cancel {
  background: #e9ecef;
  color: #2d3436;
}

.btn-confirm {
  background: #2d7a4b;
  color: white;
}

.empty-cart {
  text-align: center;
  padding: 4rem;
}

.btn-shopping {
  background: #2d7a4b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
  
  .cart-item {
    grid-template-columns: 1fr;
  }
  
  .checkout-modal {
    margin: 1rem;
  }
}
</style>