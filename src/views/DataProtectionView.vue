<template>
  <div class="data-protection-container">
    <h1>Data Protection</h1>
    <p>Please review and agree to our data protection policy before proceeding.</p>
    <div class="form-group">
      <input type="checkbox" id="agree-policy" v-model="agreePolicy" />
      <label for="agree-policy">I agree to the data protection policy</label>
    </div>
    <button :disabled="!agreePolicy" @click="handleNext" class="next-button">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agreePolicy: false
    }
  },
  methods: {
    handleNext() {
      alert('Registration completed successfully!')
      // Proceed with the registration flow
      // This could involve navigating to another page or completing the registration process
    }
  }
}
</script>

<style scoped>
.data-protection-container {
  width: 100%;
  background-color: #2a2a2a;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}
h1 {
  color: #ffaa00;
  margin-bottom: 20px;
}
p {
  color: #ccc;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 15px;
  text-align: left;
}
label {
  display: block;
  color: #ccc;
}
input {
  margin-right: 10px;
}
.next-button {
  width: 100%;
  padding: 10px;
  background-color: #ffaa00;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  color: #1a1a1a;
  cursor: pointer;
  margin-top: 20px;
}
.next-button:disabled {
  background-color: #e69900;
  cursor: not-allowed;
}
</style>
