import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import TaskView from '../views/TaskView.vue'

// Simulación de auth
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'
}

const routes = [
  { path: '/', redirect: '/login' },

  { path: '/login', component: LoginView },

  { 
    path: '/dashboard', 
    component: DashboardView,
    meta: { requiresAuth: true }
  },

  { 
    path: '/tasks', 
    component: TaskView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 GUARD GLOBAL
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})

export default router