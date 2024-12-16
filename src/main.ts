import { createApp } from 'vue'
import App from './App.vue'
import store, { toStoredData } from '@/store'
import { SHUFFLE } from '@/store/mutations'

createApp(App).use(store).mount('#app')

store.subscribe((mutation, state) => {
  if (mutation.type !== SHUFFLE) {
    const store = toStoredData(state)
    localStorage.setItem('store', JSON.stringify(store))
  }
})
