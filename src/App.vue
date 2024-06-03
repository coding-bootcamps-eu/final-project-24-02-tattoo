<template>
  <div class="app">
    <router-link to="/infoview"> </router-link>
    <RouterView />
    <SliderComponent />
    <NavBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SliderComponent from './components/SliderComponent.vue'

export default {
  components: {
    NavBar,
    SliderComponent
  }
}
</script>

<style scoped>
.app {
  height: 200vh;
}
</style>
