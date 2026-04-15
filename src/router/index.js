import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectSkinsView from '../views/ProjectSkinsView.vue'
import ProjectRenderView from '../views/ProjectRenderView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { order: 0 }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { order: 1 }
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView,
      meta: { order: 2 }
    },
    {
      path: '/project/skins',
      name: 'project-skins',
      component: ProjectSkinsView,
      meta: { order: 2, hideDefaultLayout: true }
    },
    {
      path: '/project/rendering',
      name: 'project-rendering',
      component: ProjectRenderView,
      meta: { order: 2, hideDefaultLayout: true }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { order: 3 }
    },
  ]
})

export default router
