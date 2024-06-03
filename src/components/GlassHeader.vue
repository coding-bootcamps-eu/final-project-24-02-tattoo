<template>
  <div :class="['location', { visible: isVisible, hidden: !isVisible }]">
    <span></span>
    <h3>Artists near Düsseldorf</h3>
    <router-link to="/faq" class="help-button">
      <button>Help</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.location {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 75px;
  padding: 2.5rem 0;
  z-index: 5;
  position: fixed;
  top: 0;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition:
    transform 0.8s ease-in-out,
    opacity 0.8s ease-in-out;
}

button {
  all: unset;
  text-align: center;
  width: 45px;
  height: 25px;
  border-radius: 5px;
  background-color: var(--white);
  color: var(--black);
  font-size: 0.8rem;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.visible {
  transform: translateY(0);
  opacity: 1;
}

.hidden {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
