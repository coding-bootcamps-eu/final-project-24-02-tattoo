<template>
  <section class="calendar-sec">
    <Calendar />
    <NextButton path="/request" @next-clicked="handleNextClick" />
  </section>
</template>

<script>
import Calendar from '@/components/CalendarRequest.vue'
import NextButton from '@/components/NextButton.vue'

export default {
  components: {
    Calendar,
    NextButton
  }
}
</script>

<style scoped>
.calendar-sec {
  width: 90%;
  margin: auto;
}
</style>
