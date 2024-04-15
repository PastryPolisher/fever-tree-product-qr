<template>
  <div :class="['talking-points', currentProduct]">
    <ul>
      <li v-for="(point, index) in productPoints"
        :key="'point-' + index"
        :class="point.icon">
        
        <div class="icon">
          <PointIcon
            :icon-name="point.icon"
          />
        </div>

        <div v-html="point.text" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import talkingPoints from '@/data/talkingPoints.json'
import PointIcon from '@/components/Product/PointIcon.vue'
import { inject, ref, type Ref } from 'vue';
import { type IProductPoints } from '@/utilities/types'

const currentProduct = inject('currentProduct') as Ref<string>
  
const productPoints = ref((talkingPoints as IProductPoints)[currentProduct.value])
</script>

<style lang="scss">
.talking-points {
  animation: .8s forwards 4s slideInLeft ease-in;
  opacity: 0;
  padding-left: 1rem;
  padding-right: 1rem;

  ul {
    padding-left: 0;

    li {
      position: relative;
      font-size: 1.1rem;
      line-height: 1.2;
      font-weight: 600;
      color: var(--ft-grey);
      padding: .7rem 0;
      display: flex;
      align-items: center;
      text-shadow: var(--ft-text-shadow);

      .icon {
        height: 3rem;
        display: inline-block;
        margin-right: 1.4rem;
        width: 3.4rem;
      }

      div {
	      display: inline-block
      }

      span {
        font: italic 400 1.44rem/1 baskerville-display-pt, serif;
        padding-right: .3rem;
        text-transform: lowercase;
      }
    }
  }

  &.dco li,
  &.ga li,
  &.gb li {
    color: #fff;
    text-shadow: none;
  }
}

@keyframes slideInLeft {
	0% {
		transform: translate(-100%);
		opacity: 0
	}

	to {
		transform: translate(0);
		opacity: 1
	}
}
</style>
