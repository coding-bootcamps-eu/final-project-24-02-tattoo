<template>
  <div class="faq-page">
    <HeaderComponent bgImage="/public/img/9.JPG" title="Frequently Asked Questions (FAQ)" />
    <transition name="slide-fade">
      <div v-if="showCategories">
        <FAQCategories @change-component="changeComponent" />
      </div>
    </transition>
    <transition name="slide-fade">
      <component v-if="!showCategories" :is="currentComponent" />
    </transition>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FAQCategories from '@/components/FAQCategories.vue'
import BasicKnowledge from '@/components/BasicKnowledge.vue'

export default {
  name: 'FAQView',
  components: {
    HeaderComponent,
    FAQCategories,
    BasicKnowledge
  },
  data() {
    return {
      showCategories: true,
      currentComponent: null
    }
  },
  methods: {
    changeComponent(componentName) {
      console.log('Changing component to:', componentName) // Debugging log
      this.currentComponent = componentName
      this.showCategories = false
    }
  }
}
</script>

<style scoped>
.faq-page {
  background-color: var(--black);
  padding-bottom: 3rem;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
}
</style>
