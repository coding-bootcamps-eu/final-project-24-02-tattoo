<template>
  <header>
    <div class="location">
      <span></span>
      <h3>Artists near Düsseldorf</h3>
      <button>help</button>
    </div>
  </header>
</template>

<style scoped>
.location {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 75px;
  z-index: 1;
  position: fixed;
  top: 0;

  /* From https://css.glass */
  background: rgb(186 186 186 / 28%);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
}

button {
  all: unset;
  text-align: center;
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.187);
}

button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}
</style>
