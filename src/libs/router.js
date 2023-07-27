import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import Login from "../pages/Login.vue";
import Messages from "../pages/Messages.vue";
import {chatStore} from "../store/store.js"



const routes = [
  { path: '/login', component: Login },
  { path: '/messages', component: Messages },
]

const router = createRouter({
  routes: routes,
  history: createWebHistory()
})

export default router
