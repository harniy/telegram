import { createApp } from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'
import { Quasar, Notify, Dark } from 'quasar'
import iconSet from 'quasar/icon-set/svg-eva-icons'
import { createPinia } from 'pinia'

// Import Quasar css
import 'quasar/src/css/index.sass'


const myApp = createApp(App)

const pinia = createPinia()

myApp.use(Quasar, {
  plugins: { Notify, Dark },
  iconSet
}).use(pinia)
  .mount('#app')
