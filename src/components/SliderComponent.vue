<template>
  <HeadlineSub title="Most Popular Tattoo Style" :isFirst="true" />
  <div class="app_slider-container">
    <div class="slider">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :style="itemStyles(index, item.image)"
      >
        <h2>{{ item.title }}</h2>
      </div>
      <button @click="nextSlide" id="next">&#8250;</button>
      <button @click="prevSlide" id="prev">&#8249;</button>
    </div>
  </div>
</template>

<script>
import HeadlineSub from '@/components/HeadlineSub.vue'

export default {
  components: {
    HeadlineSub
  },
  data() {
    return {
      items: [
        { title: 'Traditional', image: '/public/img/tattoo_traditional.png' },
        { title: 'Blackwork', image: '/public/img/tattoo_blackwork.png' },
        { title: 'Stick and Poke', image: '/public/img/tattoo_stick-and-poke.png' },
        { title: 'Ignorant', image: '/public/img/tattoo_ignorant.png' }
      ],
      active: 1
    }
  },
  methods: {
    itemStyles(index, image) {
      let state = 0
      const commonStyles = {
        backgroundImage: `url(${image})`
      }
      if (index === this.active) {
        return {
          ...commonStyles,
          transform: 'none',
          zIndex: 0,
          filter: 'none',
          opacity: 1
        }
      } else if (index > this.active) {
        state = index - this.active
        return {
          ...commonStyles,
          transform: `translateX(${120 * state}px) scale(${
            1 - 0.2 * state
          }) perspective(16px) rotateY(-1deg)`,
          zIndex: -state,
          filter: 'blur(5px)',
          opacity: state > 2 ? 0 : 0.6
        }
      } else {
        state = this.active - index
        return {
          ...commonStyles,
          transform: `translateX(${-120 * state}px) scale(${
            1 - 0.2 * state
          }) perspective(16px) rotateY(1deg)`,
          zIndex: -state,
          filter: 'blur(5px)',
          opacity: state > 2 ? 0 : 0.6
        }
      }
    },
    nextSlide() {
      this.active = this.active + 1 < this.items.length ? this.active + 1 : this.active
    },
    prevSlide() {
      this.active = this.active - 1 >= 0 ? this.active - 1 : this.active
    }
  }
}
</script>

<style scoped>
.app_slider-container {
  margin: 1rem 1rem 8rem;
}

.slider {
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 20px;
  overflow: hidden;
}

.item {
  position: absolute;
  width: 200px;
  height: inherit;
  border-radius: 10px;
  transition: 0.5s;
  left: calc(50% - 100px);
  top: 0;
  background-size: cover;
  background-position: center;
}

h2 {
  color: var(--white);
  font-size: 1rem;
  text-align: center;
  position: relative;
  top: 80%;
}

#next,
#prev {
  position: absolute;
  top: 37%;
  color: var(--accent-color);
  background-color: transparent;
  border: none;
  font-size: xxx-large;
}

h2,
#next,
#prev {
  opacity: 0.8;
}

#next {
  left: unset;
  right: 0;
}
</style>
