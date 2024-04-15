<template>
  <img v-for="(image, index) in preloadImageNames"
    class="preload-image"
    :key="'preload-' + index"
    :src="getImageUrl(`${currentProduct}/${image}`)" />

  <header class="qr-header">
    <a href="https://fever-tree.com/en_CA">
      <img :src="getImageUrl('logo-black.png') " alt="Fever Tree">
    </a>
  </header>

  <ProductBody />
</template>
  
<script setup lang="ts">
import ProductBody from './ProductBody.vue'
import { getImageUrl } from '@/utilities'
import { inject, ref, type Ref } from 'vue'

const currentProduct = inject('currentProduct') as Ref<string>

const preloadImageNames = ref([
  'bottle.png',
  'garnish-1.png',
  'garnish-2.png',
  'garnish-cluster.png'
])

// TODO: set page title depending on drink selected
</script>
  
<style scoped lang="scss">
.preload-image {
  visibility: hidden;
  position: absolute;
  height: 1px;
  width: 1px;
  z-index: -1;
}

.qr-header {
  height: var(--header-height);
  text-align: center;
  padding: 0.5rem;
  position: relative;
  z-index: 20;

  img {
    height: 2.8rem;
  }
}
</style>