<template>
  <div class="profile-sec">
    <div class="profile-header">
      <div class="collector-card" v-for="card in collectorCards" :key="card.id">
        <div class="portfolio">
          <div class="portfolio-img" v-for="img in card.portfolioImgs" :key="img.id"></div>
        </div>

        <div class="collector-info">
          <div class="collector-tag">
            <ProfilePic
              :src="card.profilePic"
              :alt="'Profile picture of ' + card.collectorName"
              :isArtist="!card.isArtist"
              style="scale: 1.6"
            />
            <div>
              <div class="collector">
                <h3>@{{ card.collectorName }}</h3>
                <p class="pronouns">she/her</p>
              </div>
              <div class="flex">
                <i class="fa-solid fa-house"></i>
                <p>{{ card.studioLocation }}</p>
              </div>
            </div>
          </div>
          <div class="button-sec">
            <button class="appointment-btn">appointments</button>
          </div>
        </div>
      </div>
    </div>

    <nav class="profile-nav">
      <a href="#" :class="{ active: section === 'health-check' }" @click="section = 'health-check'"
        >Health Check</a
      >

      <a
        href="#"
        :class="{ active: section === 'existing-tattoos' }"
        @click="section = 'existing-tattoos'"
        >Existing Tattoos</a
      >
      <a href="#" :class="{ active: section === 'fav' }" @click="section = 'fav'"
        ><i class="fa-regular fa-heart"></i
      ></a>
    </nav>
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
import ProfilePic from '@/components/ProfilePicture.vue'

export default {
  components: {
    ProfilePic
  },
  data() {
    return {
      section: 'health-check', // default section
      collectorCards: [
        {
          id: 1,
          collectorName: 'sandydavies',
          studioLocation: 'Düsseldorf',
          profilePic: '/img/sandy.jpg',
          isArtist: true // Specify if the user is an artist or not
        }
      ]
    }
  }
}
</script>

<style scoped>
.button-sec {
  display: flex;
  justify-content: center;
}

.collector-card {
  display: grid;
  padding: 5rem 0 0;
}
.profile {
  max-width: 90%;
  margin: auto;
}

.profile-picture {
  height: 5rem;
  width: 5rem;
}

.collector-tag {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.collector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.collector-cta {
  background-color: var(--grey);
  padding: 1rem 1rem;
  border-radius: 1rem;
}
.profile-sec {
  display: grid;
  align-items: center;
  max-width: 85%;
  padding-bottom: 8rem;
  margin: auto;
}

.flex {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.appointment-btn {
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
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

.fav-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fav-info {
  background-color: #222;
  border: 1px solid #f0a500;
  padding: 20px;
  margin: 10px;
  width: 80%;
}

.fav-info h3 {
  margin: 0;
  font-size: 24px;
}

.fav-info p {
  margin: 5px 0;
}

.fav-btn {
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

.health-check-section,
.existing-tattoos-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.health-check-btn {
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

.existing-tattoos-section .tattoos-image {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>
