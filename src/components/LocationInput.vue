<template>
  <div>
    <div class="input">
      <label for="location-choice">Location</label>
      <input
        type="text"
        id="location-choice"
        name="location-choice"
        v-model="inputValue"
        @focus="showSuggestions = true"
        @input="filterSuggestions"
        @blur="hideSuggestions"
      />
      <ul v-if="showSuggestions" class="suggestions">
        <li
          v-for="(suggestion, index) in filteredSuggestions"
          :key="index"
          @mousedown.prevent="selectSuggestion(suggestion)"
          class="suggestion-item"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      showSuggestions: false,
      suggestions: [
        'Aachen',
        'Bochum',
        'Bielefeld',
        'Bonn',
        'Dortmund',
        'Duisburg',
        'Düren',
        'Düsseldorf',
        'Essen',
        'Gelsenkirchen',
        'Hagen',
        'Köln',
        'Neuss',
        'Oberhausen',
        'Ratingen',
        'Solingen',
        'Wuppertal'
      ],
      filteredSuggestions: []
    }
  },
  methods: {
    filterSuggestions() {
      if (!this.inputValue) {
        this.filteredSuggestions = this.suggestions
        return
      }
      const text = this.inputValue.toLowerCase()
      this.filteredSuggestions = this.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(text)
      )
      this.showSuggestions = true
    },
    selectSuggestion(suggestion) {
      this.inputValue = suggestion
      this.showSuggestions = false
    },
    hideSuggestions() {
      setTimeout(() => {
        this.showSuggestions = false
      }, 100)
    }
  },
  mounted() {
    this.filteredSuggestions = this.suggestions
  }
}
</script>

<style scoped>
.input {
  display: grid;
  gap: 0.5rem;
  position: relative;
}

input {
  background-color: var(--grey);
  color: var(--white);
  border-radius: 0.35rem;
  height: 2.5rem;
  padding: 1rem;
  border: none;
}

.suggestions {
  border: none;
  background-color: var(--grey);
  max-height: 150px;
  overflow-y: auto;

  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  border-radius: 0.35rem;
  scrollbar-color: #da9918;
  scrollbar-width: thin;
}

.suggestion-item {
  padding: 10px;
  cursor: pointer;
}

.suggestion-item:hover {
  background-color: #f0f0f0;
}
</style>
