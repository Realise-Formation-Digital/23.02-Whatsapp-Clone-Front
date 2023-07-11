import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Message from "../pages/Message.vue";
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/message', component: Message }

]

const router = createRouter({
  routes: routes,
  history: createWebHistory()
})

export default router
