// stores/authStore.js
import { defineStore } from 'pinia'
import { api } from '@/plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    registeredUsers: [],
    loading: false,
    error: null
  }),

  actions: {
    async register(userData) {
      try {
        this.loading = true
        this.error = null
        
        const { data } = await api.post('/register', userData)
        
        this.registeredUsers.push(data)
        return data
        
      } catch (error) {
        this.error = error.response?.data?.detail || 'Erro no cadastro'
        throw error
      } finally {
        this.loading = false
      }
    }
  },

  getters: {
    lastRegisteredUser: (state) => {
      return state.registeredUsers.length > 0 
        ? state.registeredUsers[state.registeredUsers.length - 1]
        : null
    }
  }
})

