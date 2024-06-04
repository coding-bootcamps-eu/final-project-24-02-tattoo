import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import './assets/main.css'

// Import Swiper core styles
import 'swiper/swiper-bundle.css'

// Install Swiper modules

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('SwiperComponent', SwiperComponent) // Change from 'Swiper' to 'SwiperComponent'
app.component('SwiperSlide', SwiperSlide)

app.mount('#app')
