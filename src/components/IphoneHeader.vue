<template>
  <section :class="{ 'home-page': !isHomePage }">
    <div class="connection">
      <i class="fas fa-signal"></i>
      <p>{{ networkName }}</p>
      <i class="fas fa-wifi"></i>
    </div>
    <p class="time">{{ currentTime }}</p>
    <div class="battery">
      <i class="fas fa-arrow-rotate-right"></i>
      <p>{{ batteryLevel }}%</p>
      <i class="fas fa-battery-half"></i>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      networkName: 'MEDIONmobile',
      currentTime: '',
      batteryLevel: 54,
      isHomePage: true // Set this based on your logic
    }
  },
  mounted() {
    this.updateTime()
    setInterval(this.updateTime, 1000) // Update time every second
  },
  methods: {
    updateTime() {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      this.currentTime = `${hours}:${minutes}`
    }
  }
}
</script>

<style scoped>
section {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0rem 0.6rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
  background-color: black; /* Default background color */
}

/* Style for the home page */
section.home-page {
  background-color: transparent; /* Transparent background for the home page */
}

div,
.time,
.battery {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

p {
  font-size: 0.7rem;
  margin: 0;
}

.time {
  margin-left: 16%;
  text-align: center; /* Center the time */
  flex: 1; /* Take up remaining space */
}

.fa-signal,
.fa-wifi,
.fa-arrow-rotate-right {
  font-size: 0.7rem;
}

.fa-battery-half {
  font-size: 0.7rem;
}
</style>
