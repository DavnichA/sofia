// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {name: 'Dashboard'}
      },
      {
        path: '/customers',
        name: 'customers',
        component: () => import('@/views/Customers.vue'),
        meta: {name: 'Customers'}
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('@/views/Orders.vue'),
        meta: {name: 'Orders'}
      },
      {
        path: '/content',
        name: 'content',
        component: () => import('@/views/Content.vue'),
        meta: {name: 'Content'}
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/Settings.vue'),
        meta: {name: 'Settings'}
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
