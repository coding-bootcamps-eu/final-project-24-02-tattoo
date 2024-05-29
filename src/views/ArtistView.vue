<template>
  <div class="profile">
    <div class="profile-header">
      <div class="avatar">
        <img :src="avatarUrl" alt="Avatar" />
      </div>
      <div class="username">@muankey</div>
      <div class="pronouns">er/ihm</div>
      <div class="specialty">Blackwork</div>
      <div class="button-sec">
        <FollowButton />
        <button class="request-btn" @click="requestAppointment">request.</button>
      </div>
    </div>
    <div class="profile-tabs">
      <button @click="selectTab('portfolio')" :class="{ active: selectedTab === 'portfolio' }">
        Portfolio
      </button>
      <button @click="selectTab('about')" :class="{ active: selectedTab === 'about' }">
        About
      </button>
      <button @click="selectTab('reviews')" :class="{ active: selectedTab === 'reviews' }">
        Reviews
      </button>
    </div>
    <div v-if="selectedTab === 'portfolio'" class="portfolio">
      <div v-for="(image, index) in portfolioImages" :key="index" class="portfolio-item">
        <img :src="image" alt="Tattoo Image" />
      </div>
    </div>
    <div v-if="selectedTab === 'about'" class="about">
      <!-- About content goes here -->
    </div>
    <div v-if="selectedTab === 'reviews'" class="reviews">
      <!-- Reviews content goes here -->
    </div>
  </div>
</template>

<script>
import FollowButton from '@/components/FollowButton.vue'

export default {
  components: {
    FollowButton
  },
  data() {
    return {
      isFollowing: false,
      selectedTab: 'portfolio',
      avatarImage: '100', // Placeholder for the avatar image
      portfolioImages: [
        // Placeholder images for portfolio
        'public/img/1.JPG',
        'public/img/2.JPG',
        'public/img/3.JPG',
        'public/img/7.JPG',
        'public/img/9.JPG'
      ]
    }
  },
  computed: {
    buttonText() {
      return this.isFollowing ? 'Following' : 'Follow'
    },
    buttonClass() {
      return this.isFollowing ? 'following' : 'follow'
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
    },
    toggleFollow() {
      this.isFollowing = !this.isFollowing
    },
    requestAppointment() {
      // Logic to request an appointment
      alert('Appointment request sent.')
    }
  }
}
</script>

<style scoped>
.profile {
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.avatar {
  background-color: #333;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.username,
.pronouns,
.specialty {
  margin: 5px 0;
}
.action-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.request-btn,
.follow-btn {
  background-color: transparent;
  border: 0.05rem solid var(--white);
  transition: 0.5s;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 0.5rem;
}

.following {
  background-color: var(--black);
  color: var(--white);
  border: 0.05rem solid var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: 0.5s;
}
.profile-tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
.profile-tabs button {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
}
.profile-tabs button.active {
  border-bottom: 2px solid #f0a500;
}
.portfolio {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.portfolio-item {
  flex: 1 1 calc(33.333% - 1rem); /* Drei Elemente pro Zeile, mit Lücke */
  background-color: #333;
  padding: 10px;
}
.portfolio-item img {
  width: 100%;
  height: auto;
  isplay: block;
}
.navigation {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
}
.nav-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
