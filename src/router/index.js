import { createRouter, createWebHistory } from 'vue-router'
import Tune from '../views/Tune.vue'
import Symbols from '../views/Symbols.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tune',
      component: Tune
    },
    {
      path: '/symbols',
      name: 'symbols',
      component: Symbols
    }
  ]
})

export default router
