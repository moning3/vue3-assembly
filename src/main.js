import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@icon-park/vue-next/styles/index.css';

import './assets/main.css'

createApp(App).use(router).mount('#app')