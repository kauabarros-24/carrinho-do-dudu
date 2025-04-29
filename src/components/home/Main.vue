<template>
    <div class="book-store">
      <h2 class="section-title">Best-sellers Místicos</h2>
      
      <div class="books-grid">
        <div class="book-card">
          <div class="book-header">
            <h3 class="book-title">Chair of Front Volume 2</h3>
            <span class="book-author">Cassandra Clare</span>
          </div>
          <div class="book-price">R$23,24</div>
          <div class="hover-effect"></div>
        </div>
  
        <div class="book-card highlighted">
          <div class="book-header">
            <h3 class="book-title">City of Fallen Angels</h3>
            <span class="book-author">Cassandra Care</span>
          </div>
          <div class="book-price-sale">
            <span class="old-price">R$26,92</span>
            R$13,94
          </div>
          <div class="sale-ribbon">Promoção</div>
        </div>
  
        <div class="book-card">
          <div class="book-header">
            <h3 class="book-title">Nona the Ninth</h3>
            <span class="book-author">Cassandra Care</span>
          </div>
          <div class="book-price">R$16,84</div>
        </div>
  
        <div class="book-card">
          <div class="book-header">
            <h3 class="book-title">Carrie Soto is Back</h3>
            <span class="book-author">Taylor Jenkins</span>
          </div>
          <div class="book-price">R$26,04</div>
        </div>
  
        <div class="book-card">
          <div class="book-header">
            <h3 class="book-title">Book Lovers</h3>
            <span class="book-author">Emily Henry</span>
          </div>
          <div class="book-price">R$15,81</div>
        </div>
  
        <div class="book-card">
          <div class="book-header">
            <h3 class="book-title">Two Old Women</h3>
            <span class="book-author">Velma Wallis</span>
          </div>
          <div class="book-price">R$13,95</div>
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
  }
  
  .book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(45, 122, 75, 0.1);
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
    text-align: right;
  }
  
  /* Estilo de promoção */
  .highlighted {
    border: 2px solid #ffd700;
  }
  
  .book-price-sale {
    font-size: 1.3rem;
    color: #e74c3c;
    font-weight: 700;
    text-align: right;
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
  
  .hover-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(45, 122, 75, 0.05),
      transparent
    );
    transition: 0.4s;
  }
  
  .book-card:hover .hover-effect {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    .books-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>