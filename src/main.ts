import { createApp } from 'vue'
import App from './App.vue'
import store, { toStoredData } from '@/store'
import { RANDOM_QUESTION, SHUFFLE } from '@/store/mutations'

createApp(App).use(store).mount('#app')

store.subscribe((mutation, state) => {
  if (mutation.type !== SHUFFLE && mutation.type !== RANDOM_QUESTION) {
    const storeData = toStoredData(state)
    localStorage.setItem('store', JSON.stringify(storeData))
    store.commit(SHUFFLE)
  }
})
