<template>
    <header class="navbar">
      <div class="logo-section">
        <span class="logo"><router-link  class="logoSpan" to="/">MacumbaBooks</router-link></span>
        <a href="#" class="link">Acerca e termos</a>
      </div>
  
      <div class="search-section">
        <input type="text" placeholder="Pesquisar" class="search-input" />
        <button class="search-button">🔍</button>
      </div>
  
      <nav class="nav-links">
        <a href="#">Termos</a>
        <a href="#">Equipe</a>
        <a href="#">Envio</a>
        <a href="#">Devoluções</a>
        <a href="#"><router-link to="/cart">🛒</router-link></a>
        <a href="#">💚</a>
        <a href="#">👤</a>
      </nav>
    </header>
  
    <div class="header-space"></div>
  </template>
  

  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background: white;
    border-bottom: 2px solid #e0e0e0;
    z-index: 1000;
    box-sizing: border-box;
  }
  
  .header-space {
    height: 70px; 
  }
  
  .logo-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }
.logoSpan {
  font-weight: bold;
    font-size: 20px;
    color: #333;
    text-decoration: none;
}
  
  .logo {
    font-weight: bold;
    font-size: 20px;
    color: #333;
    text-decoration: none;
  }
  
  .link {
    font-size: 12px;
    color: #27ae60;
    text-decoration: none;
  }
  
  .search-section {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 40px;
    max-width: 500px;
    position: relative;
  }
  
  .search-input {
    width: 100%;
    padding: 8px 40px 8px 15px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
  }
  
  .search-button {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #555;
    font-size: 14px;
  }
  
  .nav-links a:hover {
    color: #27ae60;
  }
  </style>
  