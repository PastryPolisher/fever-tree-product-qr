<template>
  <div class="qrCode">
    <h2>{{ headerContent }}</h2>
    <img
      :src="qrUrl"
      alt="qr code"
    />
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/utilities'
import { computed, inject, type Ref } from 'vue';
import products from '@/data/products.json'

const currentProduct = inject('currentProduct') as Ref<string>

const qrUrl = computed(() => getImageUrl(`${currentProduct.value}/qr.png`))
const headerContent = computed(() => {
  const productDetails = products.filter((product) => product.code === currentProduct.value)?.[0]
  return productDetails?.name || ''
})
</script>

<style scroped lang="scss">
.qrCode {
  display: flex;
	max-width: 14rem;
	flex-direction: column;
	// justify-content: center;

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    color: #fff;
    padding: 1rem;
    background-color: var(--product-color);
  }

  img {
    max-height: 16rem;
    max-width: 16rem;
    border: 1rem solid var(--product-color);
  }
}
</style>