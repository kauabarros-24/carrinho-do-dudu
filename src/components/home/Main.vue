<template>
  <div class="book-store">
    <h2 class="section-title">Best-sellers Místicos</h2>
    
    <div class="books-grid">
      <div 
        class="book-card"
        v-for="book in books"
        :key="book.id"
        :class="{ highlighted: book.highlighted }"
      >
        <div class="book-image-container">
          <img :src="book.image" :alt="book.title" class="book-cover">
        </div>
        <div class="book-header">
          <h3 class="book-title">{{ book.title }}</h3>
          <span class="book-author">{{ book.author }}</span>
        </div>
        
        <div :class="book.highlighted ? 'book-price-sale' : 'book-price'">
          <span v-if="book.highlighted" class="old-price">{{ book.oldPrice }}</span>
          {{ book.price }}
        </div>
        
        <button 
          class="add-to-cart"
          @click="animateAddToCart(book)"
        >
          <span class="btn-text">Adicionar ao Carrinho</span>
          <span class="check-mark">✓</span>
        </button>
        <div v-if="book.highlighted" class="sale-ribbon">Promoção</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const books = ref([
  {
    id: 1,
    title: 'Chair of Front Volume 2',
    author: 'Cassandra Clare',
    price: 'R$23,24',
    image: './images/theChair.png'
  },
  {
    id: 2,
    title: 'City of Fallen Angels',
    author: 'Cassandra Clare',
    price: 'R$13,94',
    oldPrice: 'R$26,92',
    image: './images/fallenAngels.png',
    highlighted: true
  },
  {
    id: 3,
    title: 'Nona the Ninth',
    author: 'Cassandra Clare',
    price: 'R$16,84',
    image: './images/nonaNinth.png'
  },
  {
    id: 4,
    title: 'Carrie Soto is Back',
    author: 'Taylor Jenkins',
    price: 'R$26,04',
    image: './images/sotoBack.png'
  },
  {
    id: 5,
    title: 'Book Lovers',
    author: 'Emily Henry',
    price: 'R$15,81',
    image: './images/bookLovers.png'
  },
  {
    id: 6,
    title: 'Two Old Women',
    author: 'Velma Wallis',
    price: 'R$13,95',
    image: './images/oldWomem.png'
  }
])

const animateAddToCart = (book) => {
  const cart = JSON.parse(localStorage.getItem('ifbooks_cart')) || []
  const existingItem = cart.find(item => item.id === book.id)
  
  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.push({
      ...book,
      quantity: 1,
      price: parseFloat(book.price.replace('R$', '').replace(',', '.'))
    })
  }
  
  localStorage.setItem('ifbooks_cart', JSON.stringify(cart))
  
  const event = new CustomEvent('cart-updated', { detail: cart })
  window.dispatchEvent(event)
  
  const buttons = document.querySelectorAll('.add-to-cart')
  buttons[books.value.indexOf(book)].classList.add('active')
  setTimeout(() => {
    buttons[books.value.indexOf(book)].classList.remove('active')
  }, 1000)
}
</script>

<style scoped>
.book-store {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  color: #2d3436;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, #2d7a4b 0%, #5cb85c 100%);
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.book-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(1, 1, 1, 0.25);
  border: 1px solid #e9ecef;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(45, 122, 75, 0.1);
}

.book-image-container {
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.book-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.book-card:hover .book-cover {
  transform: scale(1.05);
}

.book-header {
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 1rem;
}

.book-title {
  font-size: 1.2rem;
  color: #2d3436;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  font-weight: 600;
  min-height: 3.5em;
}

.book-author {
  font-size: 0.95rem;
  color: #636e72;
  display: block;
}

.book-price {
  font-size: 1.4rem;
  color: #2d7a4b;
  font-weight: 700;
  text-align: center;
  margin: 1rem 0;
}

.book-price-sale {
  font-size: 1.3rem;
  color: #e74c3c;
  font-weight: 700;
  text-align: center;
  margin: 1rem 0;
}

.old-price {
  display: block;
  font-size: 0.9rem;
  color: #95a5a6;
  text-decoration: line-through;
}

.sale-ribbon {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #e74c3c;
  color: white;
  padding: 8px 15px;
  border-radius: 24px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.add-to-cart {
  background: #2d7a4b;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.add-to-cart:hover {
  background: #27683f;
}

.add-to-cart .check-mark {
  position: absolute;
  right: -20px;
  transition: all 0.3s ease;
}

.add-to-cart.active .check-mark {
  right: 10px;
}

.add-to-cart .btn-text {
  transition: all 0.3s ease;
}

.add-to-cart.active .btn-text {
  opacity: 0;
  transform: translateX(-20px);
}

@media (max-width: 768px) {
  .books-grid {
    grid-template-columns: 1fr;
  }
  
  .book-image-container {
    height: 160px;
  }
}
</style>