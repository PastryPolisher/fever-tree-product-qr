<template>
  <ProductPage />
</template>

<script setup lang="ts">
import ProductPage from './components/ProductPage.vue'
import { onBeforeMount, ref } from 'vue'

onBeforeMount(() => {
  // Dear visitor: there are better things to do than looking at source code
  // trivial password check
  if (location.hostname !== 'localhost') {
    const password = window.prompt('Password')
    if (password !== 'tonic') {
      window.location.href = 'https://www.google.com'
    }
  }
})

</script>

<style scoped lang="scss">

</style>
