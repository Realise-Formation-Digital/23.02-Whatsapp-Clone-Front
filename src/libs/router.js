import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue";

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  routes: routes,
  history: createWebHistory()
})

export default router
