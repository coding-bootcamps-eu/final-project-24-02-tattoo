<template>
  <RouterView />
  <IphoneHeader />
  <NavBar />
</template>

<script>
import IphoneHeader from './components/IphoneHeader.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
    IphoneHeader
  }
}
</script>

<style scoped></style>
