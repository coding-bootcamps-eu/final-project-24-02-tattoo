<template>
  <header>
    <GlassHeader />
  </header>
  <main>
    <ArtistCard />
    <headline-sub title="Browse by Style"/>
    <SliderComponent />
  </main>
</template>

<script>
import ArtistCard from '@/components/ArtistCard.vue'
import GlassHeader from '@/components/GlassHeader.vue'
import SliderComponent from '@/components/SliderComponent.vue'
import HeadlineSub from '@/components/HeadlineSub.vue'

export default {
  name: 'HomeView',
  components: {
    ArtistCard,
    GlassHeader,
    SliderComponent,
    HeadlineSub
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
