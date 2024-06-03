<template>
  <div>
    <button @click="handleClick" class="next-button">
      {{ label }}
    </button>
  </div>
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
div {
  display: flex;
  justify-content: end;
}
.next-button {
  margin-top: 2rem;
}
.next-button:hover {
  background-color: var(--black);
}
</style>
