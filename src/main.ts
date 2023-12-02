import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Quasar, Notify } from 'quasar'
import iconSet from 'quasar/icon-set/svg-eva-icons'
import { createPinia } from 'pinia'

// Import Quasar css
import 'quasar/src/css/index.sass'


const myApp = createApp(App)

const pinia = createPinia()

myApp.use(Quasar, {
  plugins: { Notify },
  iconSet
}).use(pinia)
  .mount('#app')
