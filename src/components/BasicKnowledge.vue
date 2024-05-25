<template>
  <div class="faq-content">
    <h2>Basic Knowledge</h2>
    <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
      <div class="faq-question" @click="toggleFaq(index)">
        {{ faq.question }}
        <span class="arrow" :class="{ rotated: faq.open }">▼</span>
      </div>
      <transition name="faq-toggle">
        <div v-show="faq.open" class="faq-answer">
          {{ faq.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicKnowledge',
  data() {
    return {
      faqs: [
        {
          question: 'Does getting a tattoo hurt?',
          answer:
            'The level of pain experienced during a tattoo can vary depending on the location on the body and individual pain tolerance.',
          open: false
        },
        {
          question: 'Does my tattoo fade in the sun?',
          answer:
            'Yes, exposure to the sun can cause tattoos to fade over time. It is important to protect your tattoo with sunscreen.',
          open: false
        },
        {
          question: 'Do I need to have my tattoo touched up?',
          answer:
            'Tattoos may require touch-ups over time to maintain their appearance. Consult your tattoo artist for recommendations.',
          open: false
        },
        {
          question: 'Can I take painkillers to relieve the pain during tattooing?',
          answer:
            'Consult with your tattoo artist before taking any painkillers. Some medications can affect the tattooing process.',
          open: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs = this.faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false
      }))
    }
  }
}
</script>

<style scoped>
.faq-content {
  color: #fff;
  padding-bottom: 15%;
}

.faq-content h2 {
  max-width: 80%;
  margin: 2.5rem auto;
}

.faq-item {
  border-bottom: 1px solid #444;
}

.faq-question {
  color: var(--white);
  padding: 1.2rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question:hover {
  background-color: #b58215;
  color: var(--black);
}

.faq-answer {
  padding: 2rem;
  color: #ddd;
  overflow: hidden;
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
}

.faq-toggle-enter-active,
.faq-toggle-leave-active {
  transition: all 0.3s ease-in-out;
}

.faq-toggle-enter, .faq-toggle-leave-to /* .faq-toggle-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-1rem);
}

.arrow {
  transition: transform 0.5s ease;
  font-size: 0.75rem;
}

.arrow.rotated {
  transform: rotate(180deg);
}
</style>
