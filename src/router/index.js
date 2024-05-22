import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '@/views/InfoView.vue'
import AnmeldenRegistrierenView from '@/views/AnmeldenRegistrierenView.vue'
import AnmeldenView from '@/views/AnmeldenView.vue'
import ArtistView from '@/views/ArtistView.vue'
import CollectorView from '@/views/CollectorView.vue'
import RegistrierenView from '@/views/RegistrierenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/infoview',
      name: 'infoview',
      component: InfoView
    },
    {
      path: '/anmeldenregistrieren',
      name: 'anmeldenregistrieren',
      component: AnmeldenRegistrierenView
    },
    {
      path: '/anmeldenview',
      name: 'anmeldenview',
      component: AnmeldenView
    },
    {
      path: '/artistview',
      name: 'artistview',
      component: ArtistView
    },
    {
      path: '/collectorview',
      name: 'collectorview',
      component: CollectorView
    },
    {
      path: '/registierenview',
      name: 'registierenview',
      component: RegistrierenView
    }
  ]
})

export default router
