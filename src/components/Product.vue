<template>
  <div class="product">
    <TalkingPoints />

    <div class="body">
      <img class="bottle" :src="bottleUrl" />
      <Recipes />
    </div>

    <div class="qr-cta">
      <a v-for="(button, index) in ctaButtons"
        class="button"
        :href="button.url"
        :key="'cta-' + index">
        {{ button.text }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Recipes from '@/components/Product/Recipes.vue'
import TalkingPoints from '@/components/Product/TalkingPoints.vue';
import products from '@/data/products.json'
import { getImageUrl } from '@/utilities'
import { computed, inject, type Ref } from 'vue';

const currentProduct = inject('currentProduct') as Ref<string>

const bottleUrl = computed(() => getImageUrl(`${currentProduct.value}/bottle.png`))
const ctaButtons = computed(() => {
  const product = products.filter((pd) => pd.code === currentProduct.value)?.[0]
  if (product == null) { return [] }

  return [{
    text: 'Learn More',
    url: product.url
  }, {
    text: 'Where to Buy',
    // TODO: get correct region
    url: 'https://fever-tree.com/en_CA/where-to-buy'
  }]

})
</script>

<style lang="scss">
.product {
  display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-around;
	align-content: center;
	padding: 1rem;
	height: calc(100vh - var(--header-height));
	height: calc(100dvh - var(--header-height));
	max-width: 31rem;
	max-height: 1000px;
	padding: 0 2rem;

  .qr-cta {
    align-self: center;
    animation: .8s forwards 4s slideInUp ease-in;
    opacity: 0;

    a.button {
      margin: .5rem .7rem;
      font-family: agenda, sans-serif;
      display: inline-block;
      background-color: var(--product-color);
    }
  }

  .body {
    position: relative;
    display: flex;
    padding: 1rem 0;
    width: 100%;

    .bottle {
      height: 47vh;
      height: 47dvh;
      transform: translate(55%);
      animation: 4s forwards bottleScaleIn linear;
      transform-origin: right center;
      max-height: 31rem;
    }
  }

  .menu {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 3.125rem;
    height: 3.125rem;
    opacity: 0;
  }
}

@keyframes bottleScaleIn {
	0% {
		transform: scale(0) translate(55%);
	}

	40% {
		transform: scale(1.5) translate(55%);
	}

	80% {
		transform: scale(1.5) translate(55%);
	}

	to {
		transform: scale(1) translate(-10%);
	}
}

@keyframes slideInUp {
	0% {
		transform: translateY(100%);
		opacity: 0
	}

	to {
		transform: translateY(0);
		opacity: 1
	}
}
</style>
