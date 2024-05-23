<template>
  <div class="container">
    <nav class="navigation">
      <ul>
        <li
          v-for="(item, index) in navItems"
          :key="index"
          :class="{ list: true, active: activeIndex === index }"
          @click="setActive(index)"
        >
          <a href="#">
            <span class="icon"><img :src="item.icon" alt="" /></span>
            <span class="text">{{ item.text }}</span>
          </a>
        </li>
        <div
          class="indicator"
          :style="{ transform: 'translateX(' + activeIndex * 70 + 'px)' }"
        ></div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0, // Initially set the first item as active
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--white);
  position: fixed;
  bottom: 0;

}

ul {
  all: unset;
}

img {
  width: 20px;
}

.navigation {
  width: 400px;
  height: 70px;
  background-color: var(--black);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
}

ul {
  display: flex;
  width: 350px;
}

li {
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

a {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500; /* maybe remove later */
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
  transform: translateY(-36px);
}

.text {
  position: absolute;
  color: var(--white);
  font-weight: 400; /* Maybe remove later*/
  letter-spacing: 0.05rem; /* Maybe remove later*/
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
  background-color: var(--black);
  border-radius: 50%;
  border: 5px solid var(--white); /* change color to custom property once it works. Right now it does not take the cp color */
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
  box-shadow: 1px -10px 0 0 var(--white);
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
  box-shadow: -1px -10px 0 0 var(--white);
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
