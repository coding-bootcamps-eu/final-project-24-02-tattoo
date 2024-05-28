<template>
  <GlassHeader />
  <ArtistCard />
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
