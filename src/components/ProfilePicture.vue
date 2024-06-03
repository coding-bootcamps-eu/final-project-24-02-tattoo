<template>
  <img :src="src" :alt="alt" class="profile-picture" />
</template>

<script>
export default {
  name: 'ProfilePicture',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Profile Picture'
    }
  }
}
</script>

<style scoped>
.profile-picture {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  height: 3.5rem;
  width: 3.5rem;
  object-fit: cover;
  border: 0.1rem solid var(--accent-color);
}
</style>
