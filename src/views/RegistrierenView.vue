<template>
  <!-- Logo -->
  <header>
    <LogoOrange />
  </header>

  <!-- Form -->
  <h3>About You</h3>
  <FormComponent />

  <!-- Buttons -->
  <h3>Please choose between</h3>
  <ImgButtonLink />
</template>

<script>
import LogoOrange from '@/components/LogoOrange.vue'
import FormComponent from '@/components/FormComponent.vue'
import ImgButtonLink from '@/components/ImgButtonLink.vue'

export default {
  components: {
    LogoOrange,
    FormComponent,
    ImgButtonLink
  }
}
</script>

<style scoped>
h3 {
  margin: 1rem;
  font-family: var(--font-family);
  box-shadow: 0 1px 0 0 rgba(156, 155, 155, 0.078);
}

span {
  position: absolute;
  top: 20px;
}

header {
  position: relative;
}
</style>
