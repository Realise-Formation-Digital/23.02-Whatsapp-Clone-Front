import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
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

// const pinia = createPinia()
// const app = createApp(App)
// app.use(pinia)

// ✅ works because the pinia instance is now active
// const userStore = createPinia()

// const store = chatStore()

// router.beforeEach((to, from, next) => {
//   // we wanted to use the store here
//   if (userStore.isLoggedIn) next()
//   else next('/login')
// })

// router.beforeEach((to) => {
//   // ✅ This will work because the router starts its navigation after
//   // the router is installed and pinia will be installed too
//   const store = chatStore()

//   if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
// })


export default router
