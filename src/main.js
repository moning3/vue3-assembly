import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/index'

import './assets/main.css'

createApp(App).use(components).mount('#app')