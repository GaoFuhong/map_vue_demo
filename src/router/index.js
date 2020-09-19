import { createRouter, createWebHistory } from 'vue-router'
import MainIndex from '../views/main-index.vue'

const routes = [
  {
    path: '/',
    name: 'MainIndex',
    component: MainIndex,
    children: [
      { path: '', redirect: 'inmap' },
      {
        path: 'inmap',
        name: 'InMap',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/inmap-page/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
