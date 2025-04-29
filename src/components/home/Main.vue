<template>
  <div class="book-store">
    <h2 class="section-title">Best-sellers Místicos</h2>

    <div class="books-grid">
      <div class="book-card">
        <div class="book-header">
          <div class="book-image-container">
            <img src="./images/theChair.png" alt="Chair of Front Volume 2 cover" class="book-cover" />
          </div>
          <h3 class="book-title">Chair of Front Volume 2</h3>
          <span class="book-author">Cassandra Clare</span>
        </div>
        <div class="book-price">R$23,24</div>
        <button class="add-to-cart">Adicionar ao Carrinho</button>
      </div>

      <div class="book-card highlighted">
        <div class="book-header">
          <div class="book-image-container">
            <img src="./images/fallenAngels.png" alt="City of Fallen Angels cover" class="book-cover" />
          </div>
          <h3 class="book-title">City of Fallen Angels</h3>
          <span class="book-author">Cassandra Clare</span>
        </div>
        <div class="book-price-sale">
          <span class="old-price">R$26,92</span>
          <span class="new-price">R$13,94</span>
        </div>
        <button class="add-to-cart">Adicionar ao Carrinho</button>
        <div class="sale-ribbon">Promoção</div>
      </div>

      <div class="book-card">
        <div class="book-header">
          <div class="book-image-container">
            <img src="./images/nonaNinth.png" alt="Nona the Ninth cover" class="book-cover" />
          </div>
          <h3 class="book-title">Nona the Ninth</h3>
          <span class="book-author">Cassandra Clare</span>
        </div>
        <div class="book-price">R$16,84</div>
        <button class="add-to-cart">Adicionar ao Carrinho</button>
      </div>

      <div class="book-card">
        <div class="book-header">
          <div class="book-image-container">
            <img src="./images/sotoBack.png" alt="Carrie Soto is Back cover" class="book-cover" />
          </div>
          <h3 class="book-title">Carrie Soto is Back</h3>
          <span class="book-author">Taylor Jenkins</span>
        </div>
        <div class="book-price">R$26,04</div>
        <button class="add-to-cart">Adicionar ao Carrinho</button>
      </div>

      <div class="book-card">
        <div class="book-header">
          <div class="book-image-container">
            <img src="./images/bookLovers.png" alt="Book Lovers cover" class="book-cover" />
          </div>
          <h3 class="book-title">Book Lovers</h3>
          <span class="book-author">Emily Henry</span>
        </div>
        <div class="book-price">R$15,81</div>
        <button class="add-to-cart">Adicionar ao Carrinho</button>
      </div>

      <div class="book-card">
        <div class="book-header">
          <div class="book-image-container">
            <img src="./images/oldWomem.png" alt="Two Old Women cover" class="book-cover" />
          </div>
          <h3 class="book-title">Two Old Women</h3>
          <span class="book-author">Velma Wallis</span>
        </div>
        <div class="book-price">R$13,95</div>
        <button class="add-to-cart">Adicionar ao Carrinho</button>
      </div>

    </div>
  </div>
</template>

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
  display: flex;
  flex-direction: column;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(45, 122, 75, 0.1);
}

.book-card.highlighted:hover {
  box-shadow: 0 4px 8px rgba(255, 215, 0, 0.7);
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
  flex-grow: 1;
  text-align: center;
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

.book-price, .book-price-sale {
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  margin: 1rem 0;
}

.book-price {
  color: #2d7a4b;
}

.book-price-sale {
  color: #e74c3c;
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
}

.add-to-cart:hover {
  background: #27683f;
  transform: translateY(-2px);
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
