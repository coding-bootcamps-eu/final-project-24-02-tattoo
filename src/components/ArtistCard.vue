<template>
  <section class="artist-cards-container">
    <div class="artist-cards">
      <div class="artist-card" v-for="card in artistCards" :key="card.id">
        <div class="portfolio">
          <div class="portfolio-img" v-for="img in card.portfolioImgs" :key="img.id"></div>
        </div>
        <div class="artist-info">
          <div class="artist-tag">
            <div class="profile-pic"></div>
            <div>
              <h3>@{{ card.artistName }}</h3>
              <div class="flex">
                <i class="fa-solid fa-house"></i>
                <p>{{ card.studioLocation }}</p>
              </div>
            </div>
          </div>
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
            <button class="request-button">Send request</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FollowButton from '@/components/FollowButton.vue'

export default {
  components: {
    FollowButton
  },
  data() {
    return {
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
          portfolioImgs: [{ id: 1 }, { id: 2 }, { id: 3 }]
        },

        {
          id: 2,
          artistName: 'mimi.tatts',
          studioLocation: 'Tattoo Studio – Düsseldorf',
          hourlyRate: '150€',
          dailyRate: 'negotiable',
          distance: '7.2km away',
          responseTime: 'Response within a day',
          tags: ['Handpoke', 'Fineline'],
          portfolioImgs: [{ id: 1 }, { id: 2 }, { id: 3 }]
        }
        // Add more artist cards as needed
      ]
    }
  }
}
</script>

<style scoped>
.artist-cards-container {
  overflow: hidden;
  position: relative;
}

.artist-cards {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.artist-card {
  background-color: var(--grey);
  border-radius: 1rem;
  max-width: 85%;
  margin: auto;
}

.portfolio {
  display: flex;
  gap: 0.2rem;
  padding: 1rem;
  overflow: hidden;
}

.portfolio-img {
  background-color: #d1bca8;
  padding: 10rem 8rem;
  overflow: hidden;
}

.profile-pic {
  background-color: var(--accent-color);
  padding: 1.7rem;
  max-width: 1.5rem;
  max-height: 1.5rem;
  border-radius: 50%;
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
  padding: 1rem;
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
