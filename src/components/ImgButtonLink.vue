<template>
  <section class="img-btn-component">
    <!-- Tattoo Artist Button -->
    <router-link to="registration-artist">
      <div class="btn-wrap-tattoo-artist" @click="handleSubmit">
        <div class="img-filter"></div>
        <div class="icon-wrap">
          <img class="icon" src="/public/icons/icon_tattoo-gun-white.svg" alt="Tattoo Gun Icon" />
          <br /><span>Tattoo Artist</span>
        </div>
      </div>
    </router-link>

    <!-- Collector Button -->
    <router-link to="registration-collector">
      <div class="btn-wrap-collector" @click="handleSubmit">
        <div class="img-filter"></div>
        <div class="icon-wrap">
          <img class="icon" src="/public/icons/icon_star-white.svg" alt="Tattoo Gun Icon" />
          <br /><span>Tattoo Collector</span>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      alert('Formular wurde erfolgreich abgesendet!')
    }
  }
}
</script>

<style scoped>
.img-btn-component {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  height: 30vh;
}

.btn-wrap-tattoo-artist {
  background-image: url('/public/img/3.JPG');
}

.btn-wrap-collector {
  background-image: url('/public/img/8.JPG');
}

.btn-wrap-tattoo-artist,
.btn-wrap-collector {
  width: 150px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: 250px;
  border-radius: 5px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;
  z-index: 0;
}

.img-filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(46, 46, 46);
  opacity: 0.5;
  border-radius: 5px;
}

.icon-wrap {
  position: relative;
  _z-index: 1;
  text-align: center;
  color: white;
}

.icon {
  width: 30px;
  height: 30px;
}
</style>
