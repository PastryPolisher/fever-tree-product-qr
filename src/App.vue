<template>
  <template v-if="showContent">
    <ProductPage />
  </template>
</template>

<script setup lang="ts">
import ProductPage from '@/components/ProductPage.vue'
import { onBeforeMount, provide, ref } from 'vue'

const showContent = ref(false)
// TODO: get this from url
const currentProduct = ref('ptw')
provide('currentProduct', currentProduct)

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

  // set product colour
  const root = document.documentElement;
  root.style.setProperty('--product-color', `var(--ft-${currentProduct.value})`)
  root.style.setProperty('--product-color-light', `var(--ft-${currentProduct.value}-light)`)
})

</script>
