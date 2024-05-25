<template>
  <button :class="buttonClass" @click="toggleFollow">
    <i v-if="isFollowing" class="fa-solid fa-check"></i> {{ buttonText }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isFollowing: false
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
    toggleFollow() {
      this.isFollowing = !this.isFollowing
    }
  }
}
</script>

<style scoped>
.follow {
  background-color: transparent;
  border: 0.05rem solid var(--white);
  transition: 0.5s;
}

.following {
  background-color: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: 0.5s;
}
</style>
