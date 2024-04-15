<template>
  <div class="garnish-animations">
    <div v-for="(garnish, index) in garnishImages"
      :key="'garnish-' + index"
      :class="['garnish-container', `garnish-${index + 1}`]">
      <img :src="getImageUrl(`${currentProduct}/${garnish}`)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';
import { getImageUrl } from '@/utilities'

const currentProduct = inject('currentProduct') as Ref<string>
	
const garnishImages = ref([
  'garnish-1.png',
  'garnish-2.png',
  'garnish-cluster.png'
])
</script>

<style lang="scss" scoped>
.garnish-animations {
	width: 100%;
	height: 100%;
	position: absolute;

  .garnish-container {
    position: absolute;
    left: 40%;
    top: 50%;
    width: 7rem;
    height: 7rem;
    display: block;
    opacity: 0;

    img {
      width: 100%;
      height: 100%;
    }

    &.garnish-1 {
	    animation: 2.4s flyRight forwards .1s cubic-bezier(.76, 0, .7, .87);
    }

    &.garnish-2 {
      animation: 2.4s flyLeft forwards .1s cubic-bezier(.76, 0, .7, .87);
    }

    &.garnish-3 {
      top: 40%;
      animation: 1.8s zoom forwards .4s cubic-bezier(.76, 0, .7, .87);
    }
  }
}

@keyframes flyRight {
	0% {
		transform: translate(0) scale(0);
		opacity: .8;
	}

	99% {
		transform: translate(270%, -200%) scale(1.4);
		opacity: 1;
	}

	to {
		transform: translate(270%, -200%) scale(1.4);
		opacity: 0;
	}
}

@keyframes flyLeft {
	0% {
		transform: translate(0) scale(0);
		opacity: .8;
	}

	99% {
		transform: translate(-270%, -200%) scale(1.4);
		opacity: 1;
	}

	to {
		transform: translateX(-270%, -200%) scale(1.4);
		opacity: 0;
	}
}

@keyframes zoom {
	0% {
		transform: scale(0) rotate(0);
		opacity: .8;
	}

	99% {
		transform: scale(20) rotate(120deg);
		opacity: 1;
	}

	to {
		transform: scale(20) rotate(120deg);
		opacity: 0;
	}
}
</style>
