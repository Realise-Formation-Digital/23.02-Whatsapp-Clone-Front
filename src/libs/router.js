import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Messages from "../pages/Messages.vue";
import {chatStore} from "../store/store.js"
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/messages', component: Messages }
]

const router = createRouter({
  routes: routes,
  history: createWebHistory()
})
router.beforeEach(async (to, from) => {
  if (
    username == ''
  ) {console.log ('nope')}
})

export default router
