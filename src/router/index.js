import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '@/views/Extras/InfoView.vue'
import AnmeldenRegistrierenView from '@/views/Registration-Login/AnmeldenRegistrierenView.vue'
import AnmeldenView from '@/views/Registration-Login/AnmeldenView.vue'
import ArtistView from '@/views/Tattoo Artist/ArtistView.vue'
import CollectorView from '@/views/Tattoo Collector/CollectorView.vue'
import RegistrierenView from '@/views/Registration-Login/RegistrierenView.vue'
import FAQs from '@/views/Extras/FAQView.vue'
import BasicKnowledge from '@/components/BasicKnowledge.vue'
import ChatPageView from '@/views/ChatPageView.vue'
import CollectorReg from '../views/Tattoo Collector/CollectorRegView.vue'
import ArtistReg from '../views/Tattoo Artist/ArtistRegView.vue'
import DataProtection from '../views/Registration-Login/DataProtectionView.vue'

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
    },
    {
      path: '/registration-collector',
      name: 'CollectorRegistration',
      component: CollectorReg
    },
    {
      path: '/registration-artist',
      name: 'ArtistRegistration',
      component: ArtistReg
    },
    {
      path: '/data-protection',
      name: 'DataProtection',
      component: DataProtection
    }
  ]
})

export default router
