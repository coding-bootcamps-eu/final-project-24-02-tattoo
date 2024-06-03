<template>
  <div>
    <header>
      <GlassHeader :isVisible="isHeaderVisible" />
    </header>
    <main>
      <ArtistCard />
      <NewsCarousel />
    </main>
  </div>
</template>

<script>
import ArtistCard from '@/components/ArtistCard.vue'
import GlassHeader from '@/components/GlassHeader.vue'
import NewsCarousel from '@/components/NewsCarousel.vue'

export default {
  name: 'HomeView',
  components: {
    ArtistCard,
    GlassHeader,
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
  max-width: 90%;
  margin: auto;
}
</style>
