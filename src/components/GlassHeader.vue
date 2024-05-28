<template>
  <header>
    <h2>Artists near Düsseldorf</h2>
    <button>help</button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 70px;
  z-index: 1;
  position: fixed;
  top: 0;

  /* From https://css.glass */
  background: rgba(218, 153, 24, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
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

h2 {
  font-size: 1rem;
}
</style>
