<template>
  <template v-if="showContent">
    <ProductPage />
  </template>
</template>

<script setup lang="ts">
import ProductPage from './components/ProductPage.vue'
import { onBeforeMount, ref } from 'vue'

const showContent = ref(false)

onBeforeMount(() => {
  // Dear visitor: there are better things to do than looking at source code
  // trivial password check
  if (location.hostname === 'localhost') {
    showContent.value = true
  } else {
    const password = window.prompt('Password')
    if (password === 'tonic') {
      showContent.value = true
    } else {
      window.location.href = 'https://www.google.com'
    }
  }
})

</script>

<style scoped lang="scss">

</style>
