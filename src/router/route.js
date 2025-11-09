import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Stats from '../pages/Stats.vue'
import Squad from '../pages/Squad.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  { path: '/stats', name: 'Stats', component: Stats },
  { path: '/squad', name: 'Squad', component: Squad },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
