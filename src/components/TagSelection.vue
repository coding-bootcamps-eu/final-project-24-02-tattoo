<template>
  <div class="tag-selection">
    <div class="tags-container">
      <button
        v-for="tag in tags"
        :key="tag"
        :class="['tag', { selected: selectedTags.includes(tag) }]"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        'Blackwork',
        'Micro',
        'Tribal',
        'Biomechanical',
        'Realism',
        'Ignorant',
        'Geometric',
        'New School',
        'Neo-traditional',
        'Traditional',
        'American traditional',
        'Traditional Japanese'
      ],
      selectedTags: []
    }
  },
  methods: {
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag)
      } else if (this.selectedTags.length < 5) {
        this.selectedTags.push(tag)
      }
    }
  },
  watch: {
    selectedTags(newTags) {
      // Call API to update user profile with selected tags
      // For demonstration purposes, we'll just log to the console
      console.log('Selected Tags:', newTags)
      // Replace this with actual API call
      // this.updateUserProfileTags(newTags);
    }
  }
}
</script>

<style scoped>
.tags-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 0.6rem;
}

.tag {
  background-color: var(--grey);
  border: none;
  color: var(--white);
  width: 6.2rem;
  height: 3rem;
  border-radius: 0.35rem;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.65rem;
  line-height: 1rem;
  padding: 0;
  text-align: center; /* Center text alignment */
  hyphens: auto; /* Enable hyphenation */
  word-break: break-word; /* Break words to fit */
  overflow-wrap: break-word; /* Ensure long words break */
}

.tag.selected {
  background-color: var(--accent-color);
}
</style>
