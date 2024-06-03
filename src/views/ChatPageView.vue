<template>
  <div class="ChatPageComponent">
    <!-- HEADER SECTION -->
    <header>
      <h3>
        <router-link to="HomeView"> &lt; jenjen </router-link>
      </h3>
    </header>

    <!-- SEARCH BAR -->
    <form class="search-bar">
      <input type="text" placeholder="Search.." v-model="searchQuery" />
      <button class="search-btn" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>

    <!-- CHAT NAV -->
    <nav>
      <ul class="ChatNav">
        <li class="ChatNav-item">Messages</li>
        <li class="ChatNav-item">Archive</li>
      </ul>
    </nav>

    <!-- MESSAGES -->
    <ul class="message-section">
      <li class="message-item" v-for="message in filteredMessages" :key="message.id">
        <img class="profile-pic" :src="message.image" alt="" />
        <div>
          <h3 class="profile-name">{{ message.username }}</h3>
          <p class="preview-message">{{ message.preview }}</p>
        </div>
        <p class="timestamp">{{ message.timestamp }}</p>
        <div class="notification"></div>
        <img class="insta-icon" src="/icons/instagram-white-icon.svg" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      messages: [
        {
          id: 1,
          image: '/img/9.JPG',
          username: '@muankey',
          preview: 'Hey vielen Dank für deine Anfra...',
          timestamp: '48m'
        },
        {
          id: 2,
          image: '/img/12.JPG',
          username: '@moerIn.ink',
          preview: 'Das freut mich. Danke für Dein Ver...',
          timestamp: '1w'
        },
        {
          id: 3,
          image: '/img/2.JPG',
          username: '@junkie.tattoos',
          preview: 'Das sieht ja mal mega aus!!!',
          timestamp: '3w'
        },
        {
          id: 4,
          image: '/img/13.JPG',
          username: '@trafal.tattoo',
          preview: 'Das ist leider nicht möglich mit s...',
          timestamp: '3w'
        }
      ]
    }
  },
  computed: {
    filteredMessages() {
      if (!this.searchQuery) {
        return this.messages
      }
      return this.messages.filter((message) =>
        message.username.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
/* SCOPED STYLING */
.ChatPageComponent {
  background-color: var(--black);
  width: 375px;
  height: 667px;
  margin: auto;
}

/* HEADER SECTION */
header {
  padding: 0.5rem;
}

/* SEARCH BAR */
.search-bar {
  display: flex;
  padding-left: 0.5rem;
}

input {
  width: 400px;
  height: 40px;
  border-radius: 0.5rem;
}

.search-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: relative;
  right: 2.6rem;
  top: 1rem;
}

.search-btn:hover {
  background-color: var(--accent-color);
}

/* NAV SECTION */
.ChatNav {
  list-style: none;
  display: flex;
  justify-content: center;
  color: var(--white);
  border-bottom: 1px solid rgba(128, 128, 128, 0.438);
}

.ChatNav-item {
  margin: 0.5rem;
  font-size: small;
}

/* MESSAGE SECTION */
input,
.ChatNav,
.message-section {
  margin: 1rem;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--accent-color);
}

.message-item {
  display: flex;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem;
}

.profile-pic {
  margin-right: 0.5rem;
}

.profile-name {
  font-size: 1rem;
  color: var(--white);
}

.preview-message {
  margin: 0.25rem;
  font-size: small;
  opacity: 0.7;
}

.timestamp {
  font-size: small;
  margin: 0.5rem;
  opacity: 0.3;
}

.insta-icon {
  width: 25px;
}

.notification {
  width: 5px;
  height: 5px;
  background-color: var(--accent-color);
  border-radius: 50%;
  margin: 0.25rem;
}
</style>
