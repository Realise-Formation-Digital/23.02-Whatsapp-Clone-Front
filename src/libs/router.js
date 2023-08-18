import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Messages from "../pages/Messages.vue";
import { chatStore } from "../store/store.js"



const routes = [
  { path: '/', component: Home, beforeEnter: (to, from, next) => {
    const isUserLoggedIn = localStorage.getItem('userName')
    if (isUserLoggedIn === '' || isUserLoggedIn === undefined || isUserLoggedIn === null) {next({name:"Login"}) }
    else {next()}
  }   
 },
  { path: '/login', name:"Login", component: Login, beforeEnter: (to, from, next) => {
    const isUserLoggedIn = localStorage.getItem('userName')
    if (isUserLoggedIn === '') {next({name:"Login"}) }
    else {next()}
  }   },
  { path: '/messages', name: "Messages", component: Messages, beforeEnter: (to, from, next) => {
    const isUserLoggedIn = localStorage.getItem('userName')
    if (isUserLoggedIn === '' || isUserLoggedIn === undefined || isUserLoggedIn === null) {next({name:"Login"}) }
    else {next()}
  }   }
]

const router = createRouter({
  routes: routes,
  history: createWebHistory()
})

export default router
