<template>
  <div :class="['headline-combo', { 'first-headline': isFirst }]">
    <span v-if="!isFirst" class="separator"></span>
    <h2>{{ title }}</h2>
    <span class="line"></span>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeadlineSub',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    },
    isFirst: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
.headline-combo {
  margin: 3rem 0 1.5rem;
}

h2 {
  border-top: 0.1rem solid #fffff04f;
  padding-top: 3rem;
  margin: 0;
}

.first-headline h2 {
  border-top: none;
  padding-top: 0;
}

.line {
  display: flex;
  height: 0.2rem;
  width: 4.5rem;
  background-color: var(--accent-color);
  border-radius: 6.25rem;
  margin: 0.5rem 0 1rem;
}
</style>
