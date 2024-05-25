<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        :class="{ list: true, active: activeIndex === index }"
        @click="setActive(index)"
      >
        <router-link class="router-link" to="">
          <span class="icon"><img :src="item.icon" alt="icon" class="icon-img" /></span>
          <span class="text">{{ item.text }}</span>
        </router-link>
        <router-view />
      </li>
      <div class="indicator" :style="{ transform: 'translateX(' + activeIndex * 70 + 'px)' }"></div>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 2, // Initially set the third item as active
      navItems: [
        { icon: '/public/icons/icon_skull-white.svg', text: 'Home' },
        { icon: '/public/icons/icon_calendar.svg', text: 'Calendar' },
        { icon: '/public/icons/icon_search.svg', text: 'Search' },
        { icon: '/public/icons/icon_message.svg', text: 'Messages' },
        { icon: '/public/icons/icon_profile.svg', text: 'Profile' }
      ]
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style scoped>
.icon-img {
  width: 20px;
}

.navigation {
  width: 375px;
  height: 70px;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
}

.nav-list,
.navigation {
  position: fixed;
  bottom: 0;
  left: 250px;
}

.nav-list {
  display: flex;
}

li {
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

.router-link {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
}

.icon {
  display: block;
  position: relative;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: var(--white);
}

.navigation ul li.active a .icon {
  transform: translateY(-38px);
}

.text {
  position: absolute;
  font-size: 1rem;
  color: var(--white);
  opacity: 0;
  transform: translateY(10px);
}

.navigation ul li.active a .text {
  opacity: 1;
  transform: translateY(10px);
  color: var(--white);
}

.indicator {
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background-color: black;
  border-radius: 50%;
  border: 5px solid var(--black);
  transition: 0.5s;
}

.indicator::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -21px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-top-right-radius: 20px;
  box-shadow: 1px -10px 0 0 var(--black);
}

.indicator::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -21px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-top-left-radius: 20px;
  box-shadow: -1px -10px 0 0 var(--black);
}

/* Make indicator jump to the next navigation item */
.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(70px * 0));
}

.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1));
}

.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}

.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3));
}

.navigation ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(70px * 4));
}
</style>
