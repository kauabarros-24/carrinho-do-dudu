<!-- <template>
  <div class="auth-container">
    <div class="auth-card">
      <h2 class="auth-title">📜 Criar Novo Grimório</h2>
      
      <form @submit.prevent="handleSubmit" class="auth-form">
        <div class="form-group">
          <label for="username">Nome de Alquimista</label>
          <input 
            type="text" 
            id="username" 
            v-model="form.username" 
            required
            class="auth-input"
          >
        </div>

        <div class="form-group">
          <label for="password">Senha Arcana</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            class="auth-input"
          >
        </div>

        <button type="submit" class="auth-btn" :disabled="authStore.loading">
          <span v-if="!authStore.loading">🔓 Ativar Proteções</span>
          <span v-else>⚡ Conjurando...</span>
        </button>

        <div v-if="authStore.error" class="error-message">
          ⚠️ {{ authStore.error }}
        </div>
      </form>

      <div class="auth-footer">
        <p>Já possui um grimório? <router-link to="/login">Acessar Portal</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { axios } from '@/plugins/axios'

const authStore = axios()
const router = useRouter()

const form = ref({
  username: '',
  password: ''
})

const handleSubmit = async () => {
  const { success } = await authStore.register(form.value)
  
  if(success) {
    router.push('/login')
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.auth-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 400px;
}

.auth-title {
  color: #2d7a4b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.auth-input {
  padding: 0.8rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.auth-input:focus {
  border-color: #2d7a4b;
  box-shadow: 0 0 0 3px rgba(45,122,75,0.1);
}

.auth-btn {
  background: linear-gradient(135deg, #2d7a4b, #184d31);
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.auth-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.auth-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.error-message {
  color: #e74c3c;
  padding: 0.8rem;
  background: #f8d7da;
  border-radius: 8px;
  text-align: center;
}

.auth-footer {
  margin-top: 1.5rem;
  text-align: center;
  color: #636e72;
}

.auth-footer a {
  color: #2d7a4b;
  text-decoration: none;
  font-weight: 500;
}

.auth-footer a:hover {
  text-decoration: underline;
}
</style> -->
<template>
  
</template>