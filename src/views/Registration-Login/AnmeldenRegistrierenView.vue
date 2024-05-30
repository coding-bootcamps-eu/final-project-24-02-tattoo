<template>
  <section class="section">
    <LogoOrange />
    <button class="login-button">Login</button>
    <div class="login-section">
      <p>Login with</p>
      <div class="social-container">
        <button class="social-button google">G</button>
        <button class="social-button facebook">f</button>
      </div>
    </div>

    <div class="register-section">
      <button class="register-button">Sign Up</button>
    </div>
    <div class="info-section">
      <div>
        <h2>GOT INK?</h2>
        <p>If you don't have an account yet, sign up now to enjoy all the perks:</p>
        <ul>
          <li>
            <img src="/icons/icon_star-black.svg" style="width: 0.6rem; margin-right: 0.4rem" />Easy
            search for the right tattoo artist
          </li>
          <li>
            <img
              src="/icons/icon_star-black.svg"
              style="width: 0.6rem; margin-right: 0.4rem"
            />Straightforward appointment organisation
          </li>
          <li>
            <img src="/icons/icon_star-black.svg" style="width: 0.6rem; margin-right: 0.4rem" />Tips
            and tricks for tatted people
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import LogoOrange from '@/components/LogoOrange.vue'
export default {
  name: 'AnmeldenRegistrierenView',
  components: {
    LogoOrange
  }
}
</script>

<style scoped>
.section {
  background-color: #1a1a1a;
  min-height: 100vh;
}

h2 {
  margin-bottom: 0.8rem;
}

.info-section {
  position: fixed;
  bottom: 0;
  background-color: #da9918;
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  max-width: 85%;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.info-section h2 {
  text-align: center;
  color: #1a1a1a;
}

.login-section {
  margin: 1rem 2rem 3rem 2rem;
}

.login-section p {
  margin-bottom: 1rem;
}

.info-section p {
  font-weight: 700;
  color: var(--black);
  margin-bottom: 1rem;
}

.register-section {
  display: flex;
  justify-content: end;
  margin-top: 2rem;
}

.social-container {
  display: flex;
  gap: 1rem;
}

.login-button,
.register-button {
  width: 55%;
  padding: 1rem;
  margin-bottom: 10px;
  background-color: #da9918;
  border: none;
  font-size: 1.3rem;
  color: #1a1a1a;
  cursor: pointer;
  box-shadow: inset 9px -19px 15px -13px rgba(0, 0, 0, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.5rem;
}

.login-button {
  align-content: end;
  border-radius: 0rem 1rem 1rem 0rem;
  margin-top: 3.5rem;
}

.register-button {
  align-content: end;
  border-radius: 1rem 0rem 0rem 1rem;
  background-color: #333333;
  color: #da9918;
}

.social-button {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 0.12rem solid var(--accent-yellow);
  border-radius: 0.3rem;
  font-size: 1.2rem;
  cursor: pointer;
}

.google {
  color: #db4437;
}

.facebook {
  color: #4267b2;
}

.info-section ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

.info-section ul li {
  color: #1a1a1a;
  margin-bottom: 0.2rem;
}
</style>
