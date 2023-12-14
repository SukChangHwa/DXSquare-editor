import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DocumentEditView from '@/views/DocumentEditView.vue'
import Dashboard from '@/views/Dashboard.vue'
import TemplateCreateView from '@/views/TemplateCreateView.vue'
import DocumentTestPreview from '@/views/DocumentTestPreview.vue'

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
          name: 'documentEditor',
          component: Dashboard,
          props: true
        },
        {
          path: '/doc/editor/:docId?',
          name: 'templateEditor',
          component: TemplateCreateView,
          props: true
        }
      ]
    },
    {
      path: '/preview',
      name: 'preview',
      component: DocumentTestPreview,
      props: true
    }
  ]
})

export default router
