<template>
  <div class="tattoo-form">
    <div class="tabs">
      <button @click="selectTab('calendar')" :class="{ active: selectedTab === 'calendar' }">
        Kalender
      </button>
      <button @click="selectTab('motif')" :class="{ active: selectedTab === 'motif' }">
        Motiv
      </button>
    </div>
    <div v-if="selectedTab === 'calendar'">
      <!-- Calendar content goes here -->
    </div>
    <div v-if="selectedTab === 'motif'" class="motif-section">
      <div class="upload-reference">
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
        <p>
          Lade hier bis zu 3 Referenzen hoch, damit dein Tattoo Artist eine bessere Vorstellung von
          deiner Idee bekommt.
        </p>
      </div>
      <div class="idea-section">
        <label for="idea">Beschreibe deine Idee</label>
        <textarea id="idea" v-model="idea"></textarea>
      </div>
      <div class="budget-section">
        <label for="budget">Budget</label>
        <input id="budget" type="text" v-model="budget" />
      </div>
      <div class="body-part-section">
        <label>Körperstelle</label>
        <div>
          <input type="radio" id="rechts" value="rechts" v-model="bodyPart" />
          <label for="rechts">Rechts</label>
        </div>
        <div>
          <input type="radio" id="links" value="links" v-model="bodyPart" />
          <label for="links">Links</label>
        </div>
      </div>
      <button class="submit-button" @click="handleSubmit">Senden</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'motif',
      idea: '',
      budget: '',
      bodyPart: '',
      references: [],
      fileLabel: 'Referenzen hochladen'
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
    }
  }
}
</script>

<style scoped>
.tattoo-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #333;
  color: #fff;
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tabs button {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.tabs button.active {
  border-bottom: 2px solid #fff;
}

.motif-section {
  display: flex;
  flex-direction: column;
}

.upload-reference {
  background-color: #444;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
}

.custom-file-upload {
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  color: #fff;
  background-color: #555;
  border: 1px solid #666;
  border-radius: 4px;
}

.idea-section,
.budget-section,
.body-part-section {
  margin-bottom: 20px;
}

textarea,
input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
}

.submit-button {
  padding: 10px;
  border: none;
  background-color: #ffcc00;
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
  border: 1px solid #85e5ff;
}

label[for='files'] {
  background: #ff7b47;
  padding: 10px;
  color: #fff;
  font-family: sans-serif;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

label[for='files']:hover {
  background: #ff9e59;
}
</style>
