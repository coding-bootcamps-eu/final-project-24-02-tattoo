<template>
  <div class="profile">
    <div class="artist-card" v-for="card in artistCards" :key="card.id">
      <div class="portfolio">
        <div class="portfolio-img" v-for="img in card.portfolioImgs" :key="img.id"></div>
      </div>

      <div class="artist-info">
        <div class="artist-tag">
          <ProfilePic :src="card.profilePic" alt="profile picture of + {{ card.artistName }}" />
          <div>
            <div class="artist">
              <h3>@{{ card.artistName }}</h3>
              <p class="pronouns">he/him</p>
            </div>
            <div class="flex">
              <i class="fa-solid fa-house"></i>
              <p>{{ card.studioLocation }}</p>
            </div>
            <div class="tags">
              <span v-for="tag in card.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="button-sec">
          <FollowButton />
          <RequestButton />
        </div>
        <div class="artist-cta">
          <div class="info-sec">
            <div class="rate">
              <div class="flex">
                <i class="fa-regular fa-clock"></i>
                <p>Hourly rate: {{ card.hourlyRate }}</p>
              </div>
              <div class="flex">
                <i class="fa-regular fa-calendar"></i>
                <p>Daily rate: {{ card.dailyRate }}</p>
              </div>
              <div class="flex">
                <i class="fa-regular fa-comment-dots"></i>
                <span class="response-time">{{ card.responseTime }}</span>
              </div>
            </div>
          </div>
        </div>
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
      <button @click="selectTab('flash')" :class="{ active: selectedTab === 'flash' }">
        Flash
      </button>
      <div class="line"></div>
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
import RequestButton from '@/components/RequestButton.vue'
import ProfilePic from '@/components/ProfilePicture.vue'

export default {
  components: {
    FollowButton,
    RequestButton,
    ProfilePic
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
      ],
      artistCards: [
        {
          id: 1,
          artistName: 'muankey',
          studioLocation: 'Tattoo Studio – Düsseldorf',
          hourlyRate: '100€',
          dailyRate: '600€',
          distance: '5km away',
          responseTime: 'Response within an hour',
          tags: ['Blackwork', 'Traditional'],
          portfolioImgs: [{ id: 1 }, { id: 2 }, { id: 3 }],
          profilePic: '/img/4.JPG'
        }
      ]
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
.artist-card {
  display: grid;
  padding: 3rem 0 0;
}
.profile {
  max-width: 90%;
  margin: auto;
}

.profile-picture {
  height: 5rem;
  width: 5rem;
}

.artist {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.artist-cta {
  background-color: var(--grey);
  padding: 1rem 1rem;
  border-radius: 1rem;
}

.tags {
  margin-top: 0.5rem;
}

.tags span {
  background-color: #fffff033;
  border-radius: 3rem;
  padding: 0.3rem 0.7rem;
  margin-right: 5px;
  font-size: 0.65rem;
}

.artist-tag {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-sec {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
}

.rate,
p,
button {
  font-size: 0.8rem;
}

p {
  padding: 0;
}

.flex {
  display: flex;
  align-items: center;
  gap: 0.4rem;
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

.button-sec {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 1.7rem 0 2rem;
}
.follow,
.following,
.request-button {
  min-width: 45%;
}

.following {
  background-color: var(--accent-color);
}
.profile-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 3rem;
  margin-bottom: 10px;
}
.profile-tabs button {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
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
  flex: 1 1 calc(50% - 0.5rem);
}
.portfolio-item img {
  width: 100%;
  height: auto;
  display: block;
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