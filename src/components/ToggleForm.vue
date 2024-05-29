<template>
  <div>
    <form @submit.prevent="submitForm">
      <div v-for="item in formItems" :key="item.id">
        <div class="toggle-item">
          <label class="switch">
            <input type="checkbox" v-model="item.enabled" />
            <span class="slider round"></span>
          </label>
          <span>{{ item.label }}</span>
        </div>
        <textarea
          v-if="item.enabled && item.hasTextInput"
          v-model="item.details"
          placeholder="Please let us know more..."
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      formItems: this.items.map((item) => ({
        ...item,
        enabled: false,
        details: ''
      }))
    }
  },
  methods: {
    submitForm() {
      // Here you would typically send the data to an API
      // For example, using axios:
      this.axios
        .post('/api/user/profile', this.formItems)
        .then((response) => {
          console.log('Data saved successfully', response)
        })
        .catch((error) => {
          console.error('There was an error saving the data!', error)
        })
    }
  }
}
</script>

<style scoped>
.toggle-item {
  margin-bottom: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: start;
}

textarea {
  display: block;
  margin: 1rem 0 2.5rem;
  padding: 1rem 0 0 1rem;
  width: 100%;
  height: 6rem;
  border: none;
  border-radius: 0.5rem;
  color: var(--white);
  font-family: 'Inter';
  background-color: var(--grey);
}

/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.3rem;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: var(--grey);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.slider:before {
  position: absolute;
  content: '';
  height: 1rem;
  width: 1rem;
  left: 0.3rem;
  bottom: 0.15rem;
  background-color: var(--white);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

input:checked + .slider {
  background-color: var(--grey);
}

input:checked + .slider:before {
  transform: translateX(0.9rem);
  background-color: var(--accent-color);
}

/* Rounded sliders */
.slider.round {
  border-radius: 5rem;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
