<template>
  <div class="qrCode">
    <h2 :style="headerStyle">{{ headerContent }}</h2>
    <img
      :src="qrUrl"
      :style="qrStyle"
      alt="qr code"
    />
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/utilities'
import { computed, ref } from 'vue';

const props = defineProps<{
  currentProduct: string
}>()

const headerStyle = computed(() => `background-color: var(--ft-${props.currentProduct})`)
const headerContent = ref('DRINK NAME HERE')

const qrUrl = computed(() => getImageUrl(`${props.currentProduct}/qr.png`))
const qrStyle = computed(() => `border-color: var(--ft-${props.currentProduct})`)
</script>

<style lang="scss">
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
  }

  img {
    max-height: 16rem;
    max-width: 16rem;
    border: 1rem solid white;
  }
}
</style>