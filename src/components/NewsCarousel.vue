<template>
  <HeadlineSub title="tat.u News" :isFirst="true" />

  <section class="news-cards-container">
    <swiper-component :options="swiperOptions">
      <swiper-slide
        class="news-card"
        v-for="card in newsCards"
        :key="card.id"
        :style="`background-image: url(${card.background}) `"
      >
        <div class="headline">
          <p>{{ card.typeNews }}</p>
          <h2>{{ card.headline }}</h2>
        </div>
        <div class="card-footer">
          <h3>{{ card.readingTime }}</h3>
        </div>
      </swiper-slide>
      <template #pagination>
        <div class="swiper-pagination"></div>
      </template>
      <template #button-prev>
        <div class="swiper-button-prev"></div>
      </template>
      <template #button-next>
        <div class="swiper-button-next"></div>
      </template>
    </swiper-component>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import HeadlineSub from '@/components/HeadlineSub.vue'

export default defineComponent({
  name: 'NewsCarousel',
  components: {
    SwiperComponent,
    SwiperSlide,
    HeadlineSub
  },
  data() {
    return {
      newsCards: [
        {
          id: 1,
          typeNews: 'News',
          headline: 'The Tattoo Artist competition enters the next round!',
          readingTime: '3 min read time',
          background: '/img/10.JPG'
        },
        {
          id: 2,
          typeNews: 'Communication',
          headline: 'Find out how to take the perfect pictures for your social media!',
          readingTime: '5 min read time',
          background: '/img/6.JPG'
        },
        {
          id: 3,
          typeNews: 'Communication',
          headline: 'The perfect art books for tattoo lovers!',
          readingTime: '9 min read time',
          background: '/img/16.JPG'
        }
      ]
    }
  }
})
</script>

<style scoped>
.news-cards-container {
  overflow: hidden;
  position: relative;
  margin: 0rem 0 8rem;
}

.swiper-slide {
  position: relative;
  display: flex;
  height: 28rem;
  border-radius: 0.5rem;
  background-size: cover;
  background-position: center;
  margin: 0;
}

.swiper-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: inherit; /* Use the inherited background image */
  filter: saturate(50%) contrast(100%) blur(5px); /* Add desired filter */
  z-index: 0; /* Ensure the pseudo-element is behind the text */
  border-radius: inherit; /* Ensure the pseudo-element has the same border-radius */
}

.news-card > * {
  position: relative;
  z-index: 1; /* Ensure the text is above the pseudo-element */
}

.card-footer {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

.headline {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
}

.headline p {
  color: var(--accent-color);
}
</style>
