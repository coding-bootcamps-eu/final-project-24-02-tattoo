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
      return this.isFollowing ? 'following' : 'follow'
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
  font-weight: 800;
}

.following {
  background-color: var(--black);
  color: var(--white);
  border: 0.05rem solid var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
}
</style>
