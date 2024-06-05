<template>
  <button @click="handleClick" class="request-button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'RequestButton',
  props: {
    label: {
      type: String,
      default: 'request'
    },
    path: {
      type: String,
      default: '/appointment'
    }
  },
  methods: {
    handleClick() {
      this.$emit('request-clicked', this.path)
      // If you want to navigate to the path:
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.request-button:hover {
  background-color: var(--black);
}
</style>
