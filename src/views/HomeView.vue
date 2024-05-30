<template>
  <header>
    <GlassHeader />
  </header>
  <main>
    <ArtistCard />
  </main>
</template>

<script>
import ArtistCard from '@/components/ArtistCard.vue'
import GlassHeader from '@/components/GlassHeader.vue'

export default {
  name: 'HomeView',
  components: {
    ArtistCard,
    GlassHeader
  }
}
</script>

<style scoped>
main {
  max-width: 90%;
  margin: auto;
}
</style>
