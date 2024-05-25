import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '@/views/InfoView.vue'
import AnmeldenRegistrierenView from '@/views/AnmeldenRegistrierenView.vue'
import AnmeldenView from '@/views/AnmeldenView.vue'
import ArtistView from '@/views/ArtistView.vue'
import CollectorView from '@/views/CollectorView.vue'
import RegistrierenView from '@/views/RegistrierenView.vue'
import FAQs from '@/views/FAQView.vue'
import BasicKnowledge from '@/components/BasicKnowledge.vue'
import ChatPageView from '@/views/ChatPageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/intro',
      name: 'infoview',
      component: InfoView
    },

    {
      path: '/welcome',
      name: 'anmeldenregistrieren',
      component: AnmeldenRegistrierenView
    },

    {
      path: '/login',
      name: 'anmeldenview',
      component: AnmeldenView
    },

    {
      path: '/sign-up',
      name: 'registierenview',
      component: RegistrierenView
    },

    {
      path: '/artist',
      name: 'artistview',
      component: ArtistView
    },

    {
      path: '/collector',
      name: 'collectorview',
      component: CollectorView
    },

    {
      path: '/registierenview',
      name: 'registierenview',
      component: RegistrierenView
    },
    
    {
      path: '/chat',
      name: 'chatpageview',
      component: ChatPageView
    },

    {
      path: '/faq',
      name: 'FAQView',
      component: FAQs
    },

    {
      path: '/basic-knowledge',
      name: 'BasicKnowledge',
      component: BasicKnowledge
    }
  ]
})

export default router
