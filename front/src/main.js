import { createApp } from 'vue'
import Home from './Home.vue'
import router from './router/index.js'



import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import VueMask from 'v-mask'


createApp(Home).use(router).mount('#app');
