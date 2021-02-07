<template>
  <div>
    <h1>
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'NamePage'
}
</script>

<style scoped>
h1 {
  color: #340000;
  font-weight: 600;
  font-size: 28px;
}

@media screen and (max-width: 567px) {
  h1 {
    font-size: 24px;
  }
}
</style>
