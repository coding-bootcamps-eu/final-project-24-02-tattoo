<template>
  <div>
    <button @click="navigate" class="next-button">
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
    navigate() {
      this.$router.push(this.path)
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
  border: 0.035rem solid var(--white);
  background-color: var(--black);
}
</style>
