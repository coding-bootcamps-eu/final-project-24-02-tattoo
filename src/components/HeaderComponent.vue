<template>
  <header :style="headerStyle" class="header-component">
    <div class="back">x</div>
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
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
  background-size: 150%; /* Adjust as needed for zoom */
  background-position: center; /* Adjust as needed for positioning */
  color: #fff; /* Text color */
  padding: 0.5rem 2rem 5.5rem; /* Padding */
  border-radius: 0 0 1rem 1rem; /* Rounded corners at the bottom */
  /* filter: brightness(40%) contrast(90%); Filter effect */
  text-align: center; /* Center align text */
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
