<template>
  <div class="product-body">

    <!-- Non-mobile: show QR code -->
    <QrCode v-if="!isMobile" />

    <RotateDevice v-else-if="!isPortrait" />

    <template v-else>
      <Fizzle />
      <Garnish />
      <Product />
    </template>
  </div>
</template>

<script setup lang="ts">
import Fizzle from '@/components/Product/Fizzle.vue'
import Garnish from '@/components/Product/Garnish.vue'
import Product from '@/components/Product.vue'
import QrCode from '@/components/QrCode.vue'
import RotateDevice from '@/components/RotateDevice.vue'
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'

const isMobile = ref(/Android|iPhone/.test(navigator.userAgent))
const isPortrait = ref(window.matchMedia('(orientation: portrait)').matches)
// TODO: what's this for?
const justRotated = ref(false)

function setIsPortrait(event: MediaQueryListEvent) {
  isPortrait.value = event.matches;
  setTimeout(() => { justRotated.value = true }, 800);
}

onBeforeMount(() => {
  // set event listener for isPortrait
  window.matchMedia('(orientation: portrait)').addEventListener('change', setIsPortrait)
})

onBeforeUnmount(() => {
  window.matchMedia('(orientation: portrait)').removeEventListener('change', setIsPortrait)
})
</script>

<style lang="scss">
.product-body {
  position: relative;
	display: flex;
	justify-content: space-around;
	height: calc(100vh - var(--header-height));
	height: calc(100dvh - var(--header-height));
	width: 100%;
  background-color: var(--product-color-light);
}
</style>