<template>
  <router-link to="/infoview"> </router-link>
  <RouterView />
  <NavBar/>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
