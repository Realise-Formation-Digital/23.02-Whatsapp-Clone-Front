import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Messages from "../pages/Messages.vue";
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/messages', component: Messages },
]
  
const router = createRouter({
  routes: routes,
  history: createWebHistory()
})

export default router
