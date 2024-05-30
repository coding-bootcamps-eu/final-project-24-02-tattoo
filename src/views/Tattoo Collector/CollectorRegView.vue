<template>
  <div id="app">
    <HeaderComponent
      bgImage="/public/img/12.JPG"
      title="Tattoo Collector"
      subtitle="This part is optional. You may wish to skip this step."
    />

    <div class="registration-container">
      <HeadlineSub title="Where Are You From?" :isFirst="true" />
      <LocationInput />
      <HeadlineSub title="Your Favourite Art Style(s)" subtitle="Select up to 5 styles." />
      <TagSelection />
      <HeadlineSub
        title="Health Condition(s)"
        subtitle="To help the tattooist prepare for the session, tell them what they need to know about your health."
      />
      <ToggleForm :items="healthItems" />
      <HeadlineSub title="Let them know!" subtitle="Share my health information…" />
      <ToggleForm :items="shareItems" />
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
      healthItems: [
        { id: 1, label: 'Hemophilia', hasTextInput: false },
        { id: 2, label: 'Diabetes', hasTextInput: false },
        { id: 3, label: 'Sensitive skin (e.g. neurodermatitis...)', hasTextInput: true },
        {
          id: 4,
          label: 'Relevant allergies (e.g. certain inks, tattoo patches...)',
          hasTextInput: true
        },
        {
          id: 5,
          label: 'Relevant medication (e.g. Blood-thinning medication...)',
          hasTextInput: true
        },
        { id: 6, label: 'Others', hasTextInput: true }
      ],
      shareItems: [
        { id: 7, label: 'on my profile.', hasTextInput: false },
        { id: 8, label: 'once requesting tattoo artist.', hasTextInput: false }
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
  padding: 1rem 2rem 10rem;
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
