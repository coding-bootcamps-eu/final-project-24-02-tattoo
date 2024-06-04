<template>
  <div class="faq-page">
    <div class="categories-container">
      <h2>Categories</h2>
      <div class="categories">
        <button class="category" @click="navigateTo('BasicKnowledge')">Basic Knowledge</button>
        <button class="category">Health and Safety</button>
        <button class="category">Tattoo Aftercare</button>
        <button class="category">Booking and Appointments</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(componentName) {
      console.log('Navigating to:', componentName) // Debugging log
      this.$emit('change-component', componentName)
    }
  }
}
</script>

<style scoped>
.categories-container {
  margin: 2.5rem auto;
}

.categories {
  display: grid;
  align-self: center;
  margin-top: 1.5rem;
}
.category {
  background: #ffffff52;
  color: var(--white);
  padding: 1.4rem;
  margin: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
.category:hover {
  background: #ffab025f;
  scale: 1.02;
}
</style>
