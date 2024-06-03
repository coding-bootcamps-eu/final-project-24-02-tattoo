<template>
  <LogoOrange />
  <div class="data-protection-container">
    <div class="info-sec">
      <h2>Data Protection</h2>
      <p>
        We use third party service providers for certain features to provide you with the best
        possible service and to improve our application based on analysis. Details on the use of
        personal data can be found in our privacy policy and in our cookie policy. You can change
        your selection at any time in the More section. Technically necessary cookies must be set to
        ensure the operation of the application.
      </p>
    </div>
    <ToggleForm :items="dataTypes" class="toggle-section" />
    <div class="privacy-checkbox">
      <input type="checkbox" id="privacy-policy" name="privacy-policy" required />
      <label for="privacy-policy">I agree to the terms of <u>privacy policy</u>.</label>
    </div>
    <NextButton path="/" @next-clicked="handleNextClick" />
  </div>
</template>

<script>
import LogoOrange from '@/components/LogoOrange.vue'
import ToggleForm from '@/components/ToggleForm.vue'
import NextButton from '@/components/NextButton.vue'

export default {
  components: {
    LogoOrange,
    ToggleForm,
    NextButton
  },
  data() {
    return {
      dataTypes: [
        { id: 1, label: 'Analytics cookies', hasTextInput: false },
        { id: 2, label: 'Map services for location search', hasTextInput: false },
        { id: 3, label: 'Customised search suggestions', hasTextInput: false }
      ],
      agreePolicy: false
    }
  },
  methods: {
    handleNextClick(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.data-protection-container {
  width: 90%;
  margin: 2rem auto 8rem;
}

.info-sec {
  background-color: var(--grey);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(26, 26, 26, 0.8);
  text-align: start;
}

h2 {
  margin-bottom: 0.5rem;
}

.toggle-section {
  margin: 3rem 0;
}

.privacy-checkbox {
  display: flex;
  gap: 0.5rem;
}
</style>
