import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from "./libs/router.js";
import vuetify from "./libs/vuetify.js";
import dayjs from 'dayjs';
import utcPlugin from 'dayjs-plugin-utc';
import VueToyFace from 'vue-toy-face'
dayjs.extend(utcPlugin);

createApp(App).use(router).use(vuetify).use(VueToyFace).mount('#app')
