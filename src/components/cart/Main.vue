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
              <span class="total">{{ formatPrice(item.price * item.quantity) }}</span>
              <button class="remove-btn" @click="removeItem(item.id)">×</button>
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

  .cart-item {
    display: grid;
    grid-template-columns: 100px 2fr auto;
    gap: 1.5rem;
    padding: 1rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .item-image-container {
    width: 100px;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
  }

  .item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .quantity-btn {
    width: 32px;
    height: 32px;
    border: 2px solid #2d7a4b;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .quantity-btn:hover:not(:disabled) {
    background: #2d7a4b;
    color: white;
  }

  .remove-btn {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.2s ease;
  }

  .remove-btn:hover {
    transform: scale(1.1);
  }

  .summary-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .checkout-btn {
    background: #2d7a4b;
    color: white;
    padding: 1rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .checkout-btn:hover {
    opacity: 0.9;
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
  }

  .checkout-modal {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 400px;
  }

  .confirm-btn {
    background: #2d7a4b;
    color: white;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 1rem;
  }

  .empty-cart {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #636e72;
    text-align: center;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .cart-content {
      grid-template-columns: 1fr;
    }
    
    .cart-item {
      grid-template-columns: 1fr;
    }
  }
  </style>