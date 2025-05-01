import { defineStore } from 'pinia'
import axios from '@/plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  actions: {
    async register(userData) {
      try {
        this.loading = true
        this.error = null
        const response = await axios.post('/register', userData)
        this.user = response.data
        return response.data
      } catch (error) {
        this.error = error.response?.data?.detail || 'Erro no registro'
        throw error
      } finally {
        this.loading = false
      }
    }
  }
})