<template>
  <div>
    <header>
      <GlassHeader :isVisible="isHeaderVisible" />
    </header>
    <main>
      <ArtistCard :artistCards="artistCards" />
      <SliderComponent />
      <NewsCarousel />
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
      isHeaderVisible: false,
      isHomePage: false, // Initialize as false
      artistCards: [
        {
          id: 1,
          artistName: 'muankey',
          studioLocation: 'Tattoo Studio – Düsseldorf',
          hourlyRate: '100€',
          dailyRate: '600€',
          distance: '5km away',
          responseTime: 'Response within an hour',
          tags: ['Blackwork', 'Traditional'],
          portfolioImgs: [
            { id: 1, src: '/img/muan1.jpg' },
            { id: 2, src: '/img/muan2.jpg' },
            { id: 3, src: '/img/muan3.jpg' }
          ],
          profilePic: '/img/4.JPG',
          isArtist: true
        },
        {
          id: 2,
          artistName: 'mimi.tatts',
          studioLocation: 'Tattoo Studio – Düsseldorf',
          hourlyRate: '150€',
          dailyRate: 'negotiable',
          distance: '7.2km away',
          responseTime: 'Response within a day',
          tags: ['Handpoke', 'Fineline'],
          portfolioImgs: [
            { id: 1, src: '/img/mimi1.PNG' },
            { id: 2, src: '/img/mimi2.jpg' },
            { id: 3, src: '/img/mimi3.jpg' }
          ],
          profilePic: '/img/mimi-pp.jpg',
          isArtist: true
        }
        // Add more artist cards as needed
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.setIsHomePage() // Call the method to set isHomePage initially
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isHeaderVisible = window.scrollY > 0
    },
    setIsHomePage() {
      // Determine if current route is home
      this.isHomePage = this.$route.name === 'Home' // Adjust based on your route definition
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
