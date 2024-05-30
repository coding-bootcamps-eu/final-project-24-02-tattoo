<template>
  <div id="app">
    <HeaderComponent bgImage="/public/img/12.JPG" title="Tattoo Artist" />

    <div class="registration-container">
      <HeadlineSub title="Where Are You From?" :isFirst="true" />
      <div class="input">
        <label for="name">Name of the tattoo studio</label>
        <input type="text" id="name" name="name" required minlength="4" maxlength="25" size="10" />
      </div>
      <LocationInput />
      <HeadlineSub title="Choose Your Art Style(s)" subtitle="Select up to 5 styles." />
      <TagSelection />
      <HeadlineSub
        title="Your Rates"
        subtitle="Let your future tattoo clients know what you charge, so they know what to expect."
      />
      <ToggleForm :items="rateTypes" />
      <NextButton path="/data-protection" @next-clicked="handleNextClick" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TagSelection from '@/components/TagSelection.vue'
import HeadlineSub from '@/components/HeadlineSub.vue'
import ToggleForm from '@/components/ToggleForm.vue'
import NextButton from '@/components/NextButton.vue'
import LocationInput from '@/components/LocationInput.vue'

export default {
  components: {
    HeaderComponent,
    TagSelection,
    HeadlineSub,
    ToggleForm,
    NextButton,
    LocationInput
  },
  data() {
    return {
      rateTypes: [
        { id: 1, label: 'Hourly rate', hasTextInput: true },
        { id: 2, label: 'Daily rate', hasTextInput: true },
        { id: 3, label: 'Price depends on artwork', hasTextInput: false }
      ]
    }
  },
  methods: {
    handleNextClick(path) {
      // Navigate to the specified path
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.registration-container {
  width: 100%;
  max-width: 600px; /* Limit the max width for larger screens */
  margin: 0 auto; /* Center the container */
  padding: 1rem 1rem 8rem 1rem;
}

textarea {
  height: 3rem;
}

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
  padding: 0.5rem 1rem;
  border: none;
  margin-bottom: 1.5rem;
}

/* Responsive styles */
@media (min-width: 600px) {
  .registration-container {
    padding: 2rem;
  }
}

@media (min-width: 768px) {
  .registration-container {
    padding: 2rem 4rem;
  }

  input {
    height: 3rem;
    padding: 0.5rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .registration-container {
    padding: 2rem 6rem;
  }
}
</style>
