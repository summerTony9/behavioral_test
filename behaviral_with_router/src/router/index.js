import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('../views/marketView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('../views/QuestionView.vue')
    },
    {
      path: '/question2',
      name: 'question2',
      component: () => import('../views/Question2View.vue')
    },
    {
      path: '/reward',
      name: 'reward',
      component: () => import('../views/RewardView.vue')
    }
  ]
})

export default router
