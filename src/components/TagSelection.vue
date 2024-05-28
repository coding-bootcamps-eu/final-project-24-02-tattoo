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
  gap: 10px;
}

.tag {
  background-color: var(--grey);
  border: none;
  color: var(--white);
  width: 100px;
  height: 55px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.8rem;
  padding: 0;
}

.tag.selected {
  background-color: var(--accent-color);
}
</style>
