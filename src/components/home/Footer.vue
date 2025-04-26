<template>
    <footer class="modern-footer">
      <div class="footer-container">
        <div class="footer-main">
          <div class="brand-section">
            <img src="" alt="iFbooks Logo" class="footer-logo">
            <p class="brand-text">Descubra universos literários desde 2024</p>
            <div class="payment-methods">
              <span>🛡️ Pagamentos Seguros</span>
              <div class="payment-icons">
                <span>💳</span>
                <span>📱</span>
                <span>₿</span>
              </div>
            </div>
          </div>
  
          <div class="footer-column">
            <h4 class="footer-heading">Navegação</h4>
            <ul class="footer-nav">
              <li><a href="#" class="nav-link">Autores Emergentes</a></li>
              <li><a href="#" class="nav-link">Lançamentos Místicos</a></li>
              <li><a href="#" class="nav-link">Coleções Alquímicas</a></li>
              <li><a href="#" class="nav-link">Edições Especiais</a></li>
            </ul>
          </div>
  
          <!-- Contato -->
          <div class="footer-column">
            <h4 class="footer-heading">Alquimistas</h4>
            <div class="contact-info">
              <div class="contact-item">
                🔮<span>suporte@ifbooks.com</span>
              </div>
              <div class="contact-item">
                📜<span>Atendimento: 10h-18h</span>
              </div>
              <div class="contact-item">
                🏰<span>Torre dos Livros, 456</span>
              </div>
            </div>
          </div>
  
          <!-- Newsletter -->
          <div class="footer-column">
            <h4 class="footer-heading">Pergaminho Mágico</h4>
            <form class="newsletter-form">
              <input type="email" placeholder="Seu feitiço eletrônico" class="newsletter-input">
              <button type="submit" class="newsletter-btn">Assinar Encantamento</button>
            </form>
          </div>
        </div>
  
        <!-- Divisor -->
        <div class="footer-divider"></div>
  
        <!-- Rodapé Inferior -->
        <div class="footer-bottom">
          <div class="social-section">
            <div class="social-links">
              <a href="#" class="social-icon">📘 Facegrimoire</a>
              <a href="#" class="social-icon">📸 Alchinsta</a>
              <a href="#" class="social-icon">🐦 Twittália</a>
            </div>
          </div>
          
          <div class="legal-links">
            <a href="#" class="legal-item">Poções de Privacidade</a>
            <a href="#" class="legal-item">Termos Arcanos</a>
            <span class="copyright">© 2024 iFbooks - Todos os feitiços reservados</span>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .modern-footer {
    background: #1a1e1f;
    color: #e9ecef;
    padding: 4rem 0;
    border-top: 3px solid;
    border-image: linear-gradient(90deg, #2d7a4b 0%, #184d31 100%) 1;
  }
  
  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .footer-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    padding-bottom: 3rem;
  }
  
  .brand-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .footer-logo {
    width: 120px;
    filter: drop-shadow(0 2px 4px rgba(45,122,75,0.3));
  }
  
  .brand-text {
    font-size: 0.95rem;
    color: #95a5a6;
    max-width: 240px;
  }
  
  .payment-methods {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .payment-icons {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
  }
  
  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  
  .footer-heading {
    font-size: 1.2rem;
    color: #2d7a4b;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #2d7a4b;
    margin-bottom: 1rem;
  }
  
  .footer-nav {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .nav-link {
    color: #adb5bd;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .nav-link:hover {
    color: #5cb85c;
    transform: translateX(5px);
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #95a5a6;
  }
  
  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .newsletter-input {
    padding: 0.8rem;
    border: 1px solid #2d7a4b;
    border-radius: 4px;
    background: #2d3436;
    color: #fff;
  }
  
  .newsletter-btn {
    background: linear-gradient(135deg, #2d7a4b 0%, #184d31 100%);
    color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .newsletter-btn:hover {
    transform: translateY(-2px);
  }
  
  .footer-divider {
    height: 1px;
    background: #373c3e;
    margin: 2rem 0;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .social-links {
    display: flex;
    gap: 2rem;
  }
  
  .social-icon {
    color: #adb5bd;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
  }
  
  .social-icon:hover {
    color: #5cb85c;
  }
  
  .legal-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  
  .legal-item {
    color: #95a5a6;
    text-decoration: none;
    font-size: 0.9rem;
  }
  
  .copyright {
    color: #636e72;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    .footer-main {
      grid-template-columns: 1fr;
    }
    
    .footer-bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .legal-links {
      flex-direction: column;
    }
  }
  </style>