<template>
  <div>
    <!-- Form -->
    <form>
      <div v-for="(field, index) in fields" :key="index" class="input-wrap">
        <label :for="'field-' + index">{{ field.label }}</label>
        <component
          :is="field.type === 'select' ? 'select' : 'input'"
          :type="field.type !== 'select' ? field.type : undefined"
          :id="'field-' + index"
          v-model="field.value"
          v-bind="field.attrs"
        >
          <option v-for="option in field.options" :key="option" :value="option">
            {{ option }}
          </option>
        </component>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FormComp',
  setup() {
    const fields = ref([
      { label: 'Account Name', type: 'text', value: '', attrs: {} },
      {
        label: 'Pronouns',
        type: 'select',
        value: '',
        options: ['She/Her', 'He/Him', 'They/Them', 'Non-binary', 'Other'],
        attrs: {}
      },
      { label: 'First Name', type: 'text', value: '', attrs: {} },
      { label: 'Last Name', type: 'text', value: '', attrs: {} },
      { label: 'Birthday', type: 'date', value: '', attrs: {} },
      { label: 'E-Mail', type: 'email', value: '', attrs: {} }
    ])

    return {
      fields
    }
  }
}
</script>

<style scoped>
.input-wrap {
  margin: 1rem;
}

input,
select {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: var(--grey);
  color: var(--white);
  box-sizing: border-box;
  box-shadow: inset -7px 13px 32px -18px rgba(0, 0, 0, 0.335);
}

input,
select,
.input-wrap {
  font-family: var(--font-family);
}

router-link {
  display: flex;
  justify-content: center;
}

.tattoo-artist-btn {
  width: 200px;
  height: 150px;
  background-image: url('/public/img/10.JPG');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  align-items: center;
  border: 2px solid red;
}

.img-filter {
  width: 200px;
  height: 150px;
  background-color: black;
  opacity: 0.4;
}

.icon-wrap {
  border: 2px solid red;
  position: relative;
  bottom: 100px;
  left: 53px;
  display: inline-block;
  align-items: center;
}

.icon {
  width: 30px;
  height: 30px;
  position: relative;
  left: 30px;
}
</style>
