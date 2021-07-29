import { createApp } from 'vue'
import Home from './Home.vue'
import router from './router/index.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(Home).use(router).mount('#app');
