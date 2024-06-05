<template>
  <button @click="goBack" class="return-button">
    <i class="fa-solid fa-circle-chevron-left"></i>
  </button>
</template>

<script>
export default {
  name: 'ReturnButton',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.return-button {
  display: flex;
  justify-content: left;
  background-color: transparent;
  color: #ffffff83;
  font-size: 1.8rem;
  padding: 0;
  margin: 2rem 0;
  cursor: pointer;
}

.return-button:hover {
  background-color: #0056b3;
}
</style>
