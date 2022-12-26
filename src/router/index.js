import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path : '/dashboard',
    name : 'dashboard',
    component : () => import(/* webpackChunkName: "dashboard" */ '../../src/layouts/Dashboard.vue'),
    children :   [
            {
              path: '',
              name: 'home',
              component: HomeView
            },
            {
              path: 'about',
              name: 'about',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
            },
    
    ]
  },
  {
    path : '/auth',
    name : 'AuthTiction',
    component : () => import(/* webpackChunkName: "auth" */ '../../src/layouts/Auth.vue'),
    children : [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginWelcome.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
