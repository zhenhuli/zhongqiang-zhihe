import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import DocLayout from './layouts/DocLayout.vue'

import '@zhongqiang/vue-ui/dist/style.css'
import './styles/index.css'

const routes = [
  {
    path: '/',
    redirect: '/guide/installation'
  },
  {
    path: '/guide',
    redirect: '/guide/installation'
  },
  {
    path: '/',
    component: DocLayout,
    children: [
      {
        path: 'guide/installation',
        component: () => import('./views/guide/Installation.vue')
      },
      {
        path: 'guide/quickstart',
        component: () => import('./views/guide/QuickStart.vue')
      },
      {
        path: 'components/icon',
        component: () => import('./views/components/IconDoc.vue')
      },
      {
        path: 'components/button',
        component: () => import('./views/components/ButtonDoc.vue')
      },
      {
        path: 'components/link',
        component: () => import('./views/components/LinkDoc.vue')
      },
      {
        path: 'components/layout',
        component: () => import('./views/components/LayoutDoc.vue')
      },
      {
        path: 'components/grid',
        component: () => import('./views/components/GridDoc.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
