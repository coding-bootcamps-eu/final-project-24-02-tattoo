<template>
  <div class="profile-health-check">
    <div class="profile-header">
      <div class="profile-image">
        <span class="profile-icon"></span>
      </div>
      <div class="profile-info">
        <h2>@name</h2>
        <p>she/her</p>
      </div>
    </div>
    <button class="appointment-btn">appointments</button>
    <nav class="profile-nav">
      <a href="#" :class="{ active: section === 'about' }" @click="section = 'about'">About</a>
      <a href="#" :class="{ active: section === 'health-check' }" @click="section = 'health-check'"
        >Health Check</a
      >
      <a
        href="#"
        :class="{ active: section === 'existing-tattoos' }"
        @click="section = 'existing-tattoos'"
        >Existing Tattoos</a
      >
    </nav>
    <div v-if="section === 'about'" class="about-section">
      <div class="about-info">
        <h3>Full Name</h3>
        <p>Location</p>
        <p>Age</p>
      </div>
      <button class="about-btn">Existing Tattoos</button>
      <button class="about-btn">Favourite Styles</button>
    </div>
    <div v-if="section === 'health-check'" class="health-check-section">
      <button class="health-check-btn">Allergies</button>
      <button class="health-check-btn">Medical Conditions</button>
      <button class="health-check-btn">Skin Sensitivities</button>
      <button class="health-check-btn">Good-to-know</button>
    </div>
    <div v-if="section === 'existing-tattoos'" class="existing-tattoos-section"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      section: 'about' // default section
    }
  }
}
</script>

<style scoped>
.profile-health-check {
  background-color: #111;
  color: #fff;
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 100px;
  height: 100px;
  border: 2px solid #f0a500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.profile-icon {
  width: 50px;
  height: 50px;
  border: 2px solid #f0a500;
  border-radius: 50%;
}

.profile-info h2 {
  margin: 0;
  font-size: 24px;
}

.profile-info p {
  margin: 0;
  color: #ccc;
}

.appointment-btn {
  background-color: #f0a500;
  border: none;
  color: #111;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.profile-nav {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.profile-nav a {
  color: #ccc;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
}

.profile-nav a.active {
  color: #f0a500;
  border-bottom: 2px solid #f0a500;
}

.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-info {
  background-color: #222;
  border: 1px solid #f0a500;
  padding: 20px;
  margin: 10px;
  width: 80%;
}

.about-info h3 {
  margin: 0;
  font-size: 24px;
}

.about-info p {
  margin: 5px 0;
}

.about-btn {
  background-color: #f0a500;
  border: none;
  color: #111;
  padding: 15px;
  font-size: 18px;
  margin: 10px;
  cursor: pointer;
  width: 80%;
}

.health-check-section,
.existing-tattoos-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.health-check-btn {
  background-color: #f0a500;
  border: none;
  color: #111;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
}

.existing-tattoos-section .tattoos-image {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>
