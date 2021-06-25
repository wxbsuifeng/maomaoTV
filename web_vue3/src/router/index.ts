import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import ListAll from '../views/list_all/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/list_all',
    component: ListAll
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router