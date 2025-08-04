import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes'
import store from './store/store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/styles/main.css'

createApp(App)
.use(Router)
.use(store)
.mount('#app')
