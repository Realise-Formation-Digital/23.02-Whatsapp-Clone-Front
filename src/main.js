import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from "./libs/router.js";
import vuetify from "./libs/vuetify.js";


createApp(App).use(router).use(vuetify).mount('#app')
