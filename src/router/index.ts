import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DocumentEditView from '@/views/DocumentEditView.vue'
import Dashboard from '@/views/Dashboard.vue'
import TemplateCreateView from '@/views/TemplateCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/doc',
      name: 'document',
      component: DocumentEditView,
      redirect: '/doc/dashboard',
      children: [
        {
          path: '/doc/dashboard',
          component: Dashboard
        },
        {
          path: '/doc/editor',
          component: TemplateCreateView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
