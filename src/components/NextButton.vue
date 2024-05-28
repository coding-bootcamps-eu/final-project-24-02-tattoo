<template>
  <button @click="handleClick" class="next-button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'NextButton',
  props: {
    label: {
      type: String,
      default: 'ok.'
    },
    path: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('next-clicked', this.path)
    }
  }
}
</script>

<style scoped>
.next-button:hover {
  background-color: var(--black);
}
</style>
