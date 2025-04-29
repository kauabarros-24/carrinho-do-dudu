<!-- LoginForm.vue -->
<template>
    <div class="auth-container">
      <div class="auth-card">
        <h2 class="auth-title">🔑 Acessar Grimório</h2>
        
        <form @submit.prevent="handleLogin" class="auth-form">
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
  
          <button type="submit" class="auth-btn" :disabled="loading">
            <span v-if="!loading">🔓 Desbloquear Conhecimento</span>
            <span v-else>⚡ Validando...</span>
          </button>
  
          <div v-if="error" class="error-message">
            ⚠️ {{ error }}
          </div>
        </form>
  
        <div class="auth-footer">
          <p>Novo aqui? <router-link to="/register">Criar Grimório</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import api from '../api'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const form = ref({
    username: '',
    password: ''
  })
  const loading = ref(false)
  const error = ref('')
  
  const handleLogin = async () => {
    try {
      loading.value = true
      error.value = ''
      
      const response = await api.post('/token', new URLSearchParams({
        username: form.value.username,
        password: form.value.password,
        grant_type: 'password'
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
  
      localStorage.setItem('access_token', response.data.access_token)
      router.push('/dashboard')
    } catch (err) {
      error.value = err.response?.data?.detail || 'Credenciais inválidas!'
    } finally {
      loading.value = false
    }
  }
  </script>