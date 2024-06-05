<template>
  <div class="calendar">
    <div class="header">
      <h2>{{ monthYear }}</h2>
    </div>
    <div class="weekdays">
      <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
    </div>
    <div class="days">
      <div v-for="day in days" :key="day.date" :class="getDayClass(day)" @click="selectDay(day)">
        {{ day.date.getDate() }}
      </div>
    </div>
    <div class="legend">
      <div class="legend-item"><span class="booked"></span> Booked</div>
      <div class="legend-item"><span class="available"></span> Available</div>
      <div class="legend-item"><span class="selected"></span> Selected</div>
    </div>
  </div>
  <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
</template>

<script>
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'

export default {
  data() {
    return {
      currentMonth: new Date(),
      bookedDates: ['2024-06-03', '2024-06-13', '2024-06-16', '2024-06-20', '2024-06-29'],
      availableDates: ['2024-06-08', '2024-06-21'],
      selectedDate: null,
      errorMessage: '',
      weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      days: []
    }
  },
  computed: {
    monthYear() {
      return format(this.currentMonth, 'MMMM yyyy')
    }
  },
  watch: {
    currentMonth: 'generateDays'
  },
  mounted() {
    this.generateDays()
  },
  methods: {
    generateDays() {
      const start = startOfMonth(this.currentMonth)
      const end = endOfMonth(this.currentMonth)
      this.days = eachDayOfInterval({ start, end }).map((date) => ({
        date,
        booked: this.bookedDates.includes(format(date, 'yyyy-MM-dd')),
        available: this.availableDates.includes(format(date, 'yyyy-MM-dd')),
        selected: false
      }))
    },
    getDayClass(day) {
      if (day.selected) return 'day selected'
      if (day.booked) return 'day booked'
      if (day.available) return 'day available'
      return 'day'
    },
    selectDay(day) {
      if (day.booked) {
        this.errorMessage = 'Please choose another day. This one is already booked!'
      } else if (day.available) {
        this.errorMessage = ''
        this.selectedDate = day.date
        this.days.forEach((d) => (d.selected = false)) // Reset selected state for all days
        day.selected = true
      }
    }
  }
}
</script>

<style>
.calendar {
  padding: 1rem 1rem;
  margin: 2.5rem auto 0;
  text-align: center;
  background-color: #fffff033;
  border-radius: 0.5rem;
}
.header {
  margin-bottom: 1rem;
}
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 5px;
  width: 100%;
}
.weekday {
  font-weight: bold;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.4rem;
}
.day {
  cursor: pointer;
  padding: 0.3rem 0.4rem;
}
.day.booked {
  background-color: var(--alert);
  color: var(--white);
  border-radius: 0.2rem;
}
.day.available {
  background-color: var(--accent-color);
  border-radius: 0.2rem;
}

.day.selected {
  background-color: var(--green);
  border-radius: 0.2rem;
}
.legend {
  display: flex;
  justify-content: right;
  padding-top: 1rem;
  margin: 2rem 0 0;
  border-top: 0.03rem solid #ffffff78;
  font-size: 0.8rem;
}
.legend-item {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
.legend-item span {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.5rem;
}
.legend-item .booked {
  background-color: var(--alert);
  border-radius: 50%;
}
.legend-item .available {
  background-color: var(--accent-color);
  border-radius: 50%;
}
.legend-item .selected {
  background-color: var(--green);
  border-radius: 50%;
}

.error-message {
  max-width: 90%;
  color: var(--white);
  margin: 2rem auto;
}
</style>
