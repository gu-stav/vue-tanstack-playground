import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuth = defineStore('token', {
    state: () => {
      return { token: null }
    },
    actions: {
      update(token: string) {
        this.token = token;
      },
    },
  })
