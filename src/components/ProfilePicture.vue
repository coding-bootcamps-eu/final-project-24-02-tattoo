<template>
  <div class="profile-container">
    <img :src="src" :alt="alt" class="profile-picture" />
    <img
      v-if="isArtist"
      src="/icons/icon_tattoo-gun-white.svg"
      class="user-icon"
      alt="Artist Icon"
    />
    <img v-else src="/icons/icon_star-white.svg" class="user-icon" alt="Collector Icon" />
  </div>
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
    },
    isArtist: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.profile-container {
  position: relative;
  display: inline-block;
}

.profile-picture {
  border-radius: 50%;
  overflow: hidden;
  height: 3.5rem;
  width: 3.5rem;
  object-fit: cover;
  border: 0.1rem solid var(--accent-color);

  /* Creating a cutout effect */
  -webkit-mask-image: radial-gradient(
    circle 0.8rem at 93% 70%,
    transparent 0,
    transparent 95%,
    black 100%
  );
  mask-image: radial-gradient(
    circle 0.8rem at 93% 70%,
    transparent 0,
    transparent 100%,
    black 100%
  );
}

.user-icon {
  background-color: var(--accent-color);
  height: 1.2rem;
  width: 1.2rem;
  padding: 0.25rem;
  border-radius: 50%;
  position: absolute;
  top: 63%;
  left: 93%;
  transform: translate(-50%, -50%); /* Centers the icon */

  /* Ensure the icon is above the profile picture */
  z-index: 1;
}
</style>
