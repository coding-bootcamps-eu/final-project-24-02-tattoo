<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li
        v-for="(item, index) in navItems"
        :key="item.text"
        :class="{ list: true, active: activeIndex === index }"
        @click="setActive(index)"
      >
        <router-link class="router-link" :to="item.route">
          <span class="icon"><img :src="item.icon" alt="icon" class="icon-img" /></span>
          <span class="text">{{ item.text }}</span>
        </router-link>
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
        { icon: '/icons/icon_skull-white.svg', text: 'Home', route: '/' },

        { icon: '/icons/icon_calendar.svg', text: 'Calendar', route: '/welcome' },
        { icon: '/icons/icon_search.svg', text: 'Search', route: '/faq' },
        { icon: '/icons/icon_message.svg', text: 'Messages', route: '/chat' },
        { icon: '/icons/icon_profile.svg', text: 'Profile', route: '/collector' }
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
  width: 100%;
  height: 70px;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  z-index: 5;
}

.nav-list,
.navigation {
  position: fixed;
  bottom: -15px;
}

.nav-list {
  display: flex;
}

li {
  list-style: none;
  position: relative;
  width: 70px;
  height: 70px;
  z-index: 2;
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
  font-size: 1.5rem;
  text-align: center;
  transition: 0.5s;
}

.navigation ul li.active a .icon {
  transform: translateY(-28px);
}

.text {
  position: absolute;
  font-size: 1rem;
  color: var(--white);
  background: var(--accent-color);
  padding: 2px 7px;
  border-radius: 12px;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.05rem;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(15px);
}

.navigation ul li.active a .text {
  opacity: 1;
  transform: translateY(5px);
}

.indicator {
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background-color: black;
  border-radius: 50%;
  transition: 0.5s;
  z-index: 1;
}

.indicator::before {
  content: '';
  position: absolute;
  top: 5px;
  left: -28px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 15px 18px black;
}

.indicator::after {
  content: '';
  position: absolute;
  top: 5px;
  right: -28px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: -15px 18px black;
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
