<template>
  <div>
    <div v-if="submitted" class="confirmation-page">
      <div class="confirmation-message">
        <button class="close-button" @click="redirectToCollector">X</button>
        <h2>Your request has been sent!</h2>
        <p>
          Thank you for your request. Please allow your tattoo artist some time to get back to you.
        </p>
        <p>In the meantime, read one of our articles <a href="#">here</a>!</p>
      </div>
    </div>
    <div v-else class="tattoo-form">
      <div>
        <div class="upload-reference">
          <p>
            Upload up to 3 references here to give your tattoo artist a better idea of what you
            want.
          </p>
          <form enctype="multipart/form-data" action="{Pfade Angabe zur Aktion}" method="POST">
            <input
              type="file"
              multiple
              name="Datein[]"
              id="files"
              @change="handleFileUpload"
              ref="fileInput"
            />
            <label for="files">{{ fileLabel }}</label>
          </form>
        </div>
        <div class="idea-section">
          <label for="idea">Describe Your Idea</label>
          <textarea id="idea" v-model="idea"></textarea>
        </div>
        <div class="budget-section">
          <label for="budget">Budget</label>
          <div class="range-input">
            <input type="range" id="budget" min="100" max="5000" step="50" v-model="budget" />
            <span>{{ formattedBudget }}</span>
          </div>
        </div>
        <div class="body-part-section">
          <label for="bodyPart">Body Part</label>
          <div class="custom-dropdown">
            <input
              type="text"
              id="bodyPart"
              v-model="bodyPart"
              @focus="showDropdown = true"
              @input="filterOptions"
            />
            <ul v-show="showDropdown" class="dropdown-list">
              <li v-for="option in filteredOptions" :key="option" @click="selectOption(option)">
                {{ option }}
              </li>
            </ul>
          </div>
        </div>
        <NextButton label="send." @click="handleSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import NextButton from '@/components/NextButton.vue'

export default {
  components: {
    NextButton
  },
  data() {
    return {
      selectedTab: 'motif',
      idea: '',
      budget: 100,
      bodyPart: '',
      references: [],
      fileLabel: '+',
      showDropdown: false,
      bodyParts: [
        'Arm',
        'Leg',
        'Back',
        'Chest',
        'Shoulder',
        'Neck',
        'Wrist',
        'Ankle',
        'Foot',
        'Hand'
      ],
      filteredOptions: [],
      submitted: false
    }
  },
  computed: {
    formattedBudget() {
      return `${this.budget}€`
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
    },
    handleFileUpload(event) {
      const files = event.target.files
      this.references = [...files]

      if (files && files.length > 1) {
        this.fileLabel = `${files.length} Dateien Ausgewählt`
      } else if (files.length === 1) {
        this.fileLabel = `${files[0].name} Datei Ausgewählt`
      } else {
        this.fileLabel = 'Referenzen hochladen'
      }
    },
    handleSubmit() {
      // Handle form submission
      console.log({
        idea: this.idea,
        budget: this.budget,
        bodyPart: this.bodyPart,
        references: this.references
      })
      this.submitted = true
    },
    filterOptions() {
      const searchTerm = this.bodyPart.toLowerCase()
      this.filteredOptions = this.bodyParts.filter((option) =>
        option.toLowerCase().includes(searchTerm)
      )
    },
    selectOption(option) {
      this.bodyPart = option
      this.showDropdown = false
    },
    redirectToCollector() {
      this.$router.push('/collector')
    }
  },
  mounted() {
    this.filteredOptions = this.bodyParts
  },
  watch: {
    bodyPart() {
      this.showDropdown = true
    }
  }
}
</script>

<style scoped>
.tattoo-form {
  max-width: 600px;
  margin: 0 auto 8rem;
  padding: 20px;
}

.confirmation-page {
  text-align: center;
  max-width: 90%;
  margin: 4rem auto;
  position: relative;
}

.confirmation-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffff033;
  padding: 2rem;
  border-radius: 0.5rem;
}

.confirmation-message a {
  color: var(--accent-color);
}

.close-button {
  position: absolute;
  top: 1px;
  right: -13px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--accent-color);
}

.upload-reference {
  display: grid;
  gap: 2rem;
  background-color: var(--grey);
  padding: 1rem 2rem 2rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  text-align: center;
}

.idea-section,
.budget-section,
.body-part-section {
  margin-bottom: 20px;
}

textarea,
input {
  background-color: var(--grey);
  color: var(--white);
  border-radius: 0.35rem;
  padding: 1rem;
  border: none;
}

input {
  height: 2.5rem;
}

.idea-section {
  display: grid;
  gap: 1rem;
}

.budget-section {
  display: grid;
  gap: 1rem;
}

.range-input {
  display: flex;
  align-items: center;
  gap: 1rem;
}

textarea {
  height: 7rem;
  width: 100%;
}

.submit-button {
  padding: 10px;
  border: none;
  /* background-color:; */
  color: #000;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

input[type='radio'] {
  margin-right: 10px;
}

input[type='file'] {
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: -1px;
  left: 0;
  width: 0.1px;
  height: 0.1px;
}

input[type='file']:focus + label[for='files'] {
  border: 1px solid var(--accent-color);
}

label[for='files'] {
  background: var(--accent-color);
  padding: 1rem 1.3rem;
  color: var(--white);
  font-family: sans-serif;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

label[for='files']:hover {
  background: var(--black);
}

.custom-dropdown {
  position: relative;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--grey);
  border: 1px solid var(--accent-color);
  border-radius: 0.35rem;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
}

.dropdown-list li {
  padding: 10px;
  cursor: pointer;
  list-style: none;
}

.dropdown-list li:hover {
  background-color: var(--white);
}
</style>
