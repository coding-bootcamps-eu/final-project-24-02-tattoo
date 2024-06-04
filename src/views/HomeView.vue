<template>

  <div>
    <header>
      <GlassHeader :isVisible="isHeaderVisible" />
    </header>
    <main>
      <ArtistCard />
      <NewsCarousel />
<SliderComponent />
    </main>
  </div>
</template>

<script>
import ArtistCard from '@/components/ArtistCard.vue'
import GlassHeader from '@/components/GlassHeader.vue'

import NewsCarousel from '@/components/NewsCarousel.vue'

import SliderComponent from '@/components/SliderComponent.vue'



export default {
  name: 'HomeView',
  components: {
    ArtistCard,
    GlassHeader,
  SliderComponent,
    NewsCarousel
  },
  data() {
    return {
      isHeaderVisible: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isHeaderVisible = window.scrollY > 0
    }

  

  }
}
</script>

<style scoped>
main {
  height: 150vh;
  max-width: 90%;
  margin: auto;
}
</style>
