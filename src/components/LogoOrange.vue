<template>
  <div><img src="/logo/tat.u-shadow.svg" alt="orange tat.u logo" /></div>
</template>

<script>
export default {
  name: 'LogoOrange'
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  padding-top: 3rem;
}

img {
  max-height: 3.5rem;
  filter: drop-shadow (inset -10px 15px 21px -18px rgba(0, 0, 0, 0.75));
}
</style>
