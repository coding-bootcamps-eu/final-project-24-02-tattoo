<template>
  <header :style="headerStyle" class="header-component">
    <ReturnButton />
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </header>
</template>

<script>
import ReturnButton from './ReturnButton.vue'

export default {
  name: 'HeaderComponent',
  components: {
    ReturnButton
  },
  props: {
    bgImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`
      }
    }
  }
}
</script>

<style scoped>
.back {
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0 5.5rem;
}

.header-component {
  position: relative;
  background-size: 150%;
  background-position: center;
  color: var(white);
  padding: 0.5rem 2rem 5.5rem 1rem;
  border-radius: 0 0 1rem 1rem;
  text-align: center;
  z-index: 0; /* Ensure it's behind the text */
}

.header-component::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(42, 40, 40, 0.65);
  z-index: -1;
  border-radius: 0 0 1rem 1rem;
}

.header-component .content {
  position: relative; /* Relative positioning */
  z-index: 1; /* Ensure the text is above the filter */
}

.header-component h1,
.header-component p {
  margin: 0; /* Remove default margins */
  color: inherit; /* Inherit text color */
}
</style>
