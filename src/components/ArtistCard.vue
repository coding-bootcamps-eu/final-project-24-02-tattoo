<template>
  <section class="artist-cards-container">
    <div class="artist-cards">
      <div class="artist-card" v-for="card in artistCards" :key="card.id">
        <div class="portfolio">
          <div
            class="portfolio-img"
            v-for="img in card.portfolioImgs"
            :key="img.id"
            :style="{ backgroundImage: `url(${img.src})` }"
          ></div>
        </div>
        <div class="artist-info">
          <router-link to="artist">
            <div class="artist-tag">
              <ProfilePicture
                :src="card.profilePic"
                :alt="'Profile picture of ' + card.artistName"
                :isArtist="card.isArtist"
              />
              <div>
                <h3>@{{ card.artistName }}</h3>
                <div class="flex">
                  <i class="fa-solid fa-house"></i>
                  <p>{{ card.studioLocation }}</p>
                </div>
              </div>
            </div>
          </router-link>
          <div class="info-sec">
            <div class="rate">
              <p>Hourly rate: {{ card.hourlyRate }}</p>
              <p>Daily rate: {{ card.dailyRate }}</p>
            </div>
            <div>
              <div class="flex">
                <i class="fa-solid fa-location-dot"></i>
                <p class="distance">{{ card.distance }}</p>
              </div>
              <span class="response-time">{{ card.responseTime }}</span>
            </div>
          </div>
          <div class="tags">
            <span v-for="tag in card.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="button-sec">
            <FollowButton />
            <RequestButton />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfilePicture from '@/components/ProfilePicture.vue'
import FollowButton from '@/components/FollowButton.vue'
import RequestButton from '@/components/RequestButton.vue'

export default {
  props: {
    artistCards: {
      type: Array,
      required: true
    }
  },
  components: {
    ProfilePicture,
    FollowButton,
    RequestButton
  }
}
</script>

<style scoped>
.artist-cards-container {
  overflow: hidden;
  position: relative;
  margin: 0.5rem 0 8rem;
}

.artist-cards {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
}

.artist-cards::-webkit-scrollbar {
  display: none; /* Safari/Chrome/Opera */
}

.artist-card {
  background-color: var(--grey);
  border-radius: 0.5rem;
  min-width: 85%;
  margin: auto;
  scroll-snap-align: center;
  flex-shrink: 0;
}

.portfolio {
  display: flex;
  gap: 0.6rem;
  padding: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  max-width: calc(200px + 100px); /* Show first image and half of the second */
  scrollbar-width: none; /* Firefox */
}

.portfolio::-webkit-scrollbar {
  display: none; /* Safari/Chrome/Opera */
}

.portfolio-img {
  background-color: #d1bca8;
  width: 12rem;
  height: 15rem;
  border-radius: 0.3rem;
  flex-shrink: 0;
  scroll-snap-align: center;
  background-size: cover;
  background-position: center;
}

.artist-tag {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-sec {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
}

.rate {
  border-right: solid 0.05rem var(--white);
  padding-right: 1rem;
}

.flex {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.fa-solid {
  font-size: 0.7rem;
}

.artist-info {
  padding: 0 1rem 1rem;
}

.artist-info h2 {
  margin: 0;
}

.artist-info p {
  margin: 5px 0;
  font-size: 0.8rem;
  font-weight: 200;
  margin: 0;
}

span {
  font-size: 0.8rem;
}

.tags {
  margin-top: 1.5rem;
}

.tags span {
  background-color: #fffff033;
  border-radius: 3rem;
  padding: 0.3rem 0.7rem;
  margin-right: 5px;
  font-size: 0.65rem;
}

.button-sec {
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  margin: 1.7rem 0 0rem;
}

.follow,
.following,
.request-button {
  min-width: 49%;
}

@media (min-width: 992px) {
  .follow:hover,
  .request-button:hover {
    background-color: var(--black);
    border: none;
  }
}
</style>
