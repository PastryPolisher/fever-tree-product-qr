<template>
  <img v-for="(image, index) in preloadImages"
    :key="'preload-' + index"
    :src="image"
    :style="preloadImagesStyle"
  />

  <header class="qrHeader">
    <a href="https://fever-tree.com/en_CA">
      <img src="https://fevertree.s3.eu-west-2.amazonaws.com/product-qr/assets/logo-black.png"
        alt="Fever Tree">
    </a>
  </header>

  <ProductBody />
</template>

<script setup lang="ts">
import ProductBody from './components/ProductBody.vue'
import { ref } from 'vue'

const preloadImages = ref([
  'https://fevertree.s3.eu-west-2.amazonaws.com/product-qr/assets/ptw/bottle.png',
  'https://fevertree.s3.eu-west-2.amazonaws.com/product-qr/assets/ptw/garnish-1.png',
  'https://fevertree.s3.eu-west-2.amazonaws.com/product-qr/assets/ptw/garnish-2.png',
  'https://fevertree.s3.eu-west-2.amazonaws.com/product-qr/assets/ptw/garnish-cluster.png',
])

const preloadImagesStyle = ref('visibility: hidden; position: absolute; height: 1px; width: 1px; z-index: -1;')

// TODO: set page title depending on drink selected
</script>

<style scoped lang="scss">

.qrHeader {
  height: var(--header-height);
  text-align: center;
  padding: 0.5rem;
  position: relative;
  z-index: 20;

  img {
    height: 2.8rem;
  }
}
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
