<template>
  <div v-if="recipes && recipes.length" :class="['recipe', currentProduct]">
    <Carousel>
      <Slide v-for="(recipe, index) in recipes" :key="`${currentProduct}-recipe-${index}`">
        <!-- TODO: rest of the recipe -->
        <div class="slide">
          <h1 v-html="recipe.title" />

          <div class="recipe-body">
            <ul>
              <li v-for="(step, sIndex) in recipe.steps"
                :key="`${currentProduct}-recipe-${index}-${sIndex}`">
                {{ step }}
              </li>
            </ul>
          </div>

          <div class="cocktail" :style="cocktailImage(index)" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { computed } from 'vue';
import { type IProductRecipes } from '@/utilities/types'
import { getImageUrl } from '@/utilities';
import productRecipes from '@/data/recipes.json'

const props = defineProps<{
  currentProduct: string
}>()

const recipes = computed(() => (productRecipes as IProductRecipes)[props.currentProduct])

function cocktailImage(recipeIndex: number) {
  const imageUrl = getImageUrl(`${props.currentProduct}/recipe-${recipeIndex}.png`)
  return `background-image: url(${imageUrl})`
}
</script>

<style lang="scss">
.recipe {
	position: relative;
	display: flex;
	max-width: 55%;

  &.ga li,
  &.gb li,
  &.dco li {
    color: #fff;
    text-shadow: none !important;
  }

  .carousel {
    animation: .8s forwards 4s slideInRight ease-in;
    opacity: 0;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: space-between;
  }

  .carousel__slide {
    flex-direction: column;
  }

  .slide {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.3rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: .7rem;
      font-family: agenda, sans-serif;
      color: var(--product-color);

      span {
        font: italic 400 1.44rem/1 baskerville-display-pt, serif;
        padding-right: .3rem;
        text-transform: lowercase;
      }
    }

    .recipe-body {
      display: flex;
      align-self: center;
      text-align: left;

      li {
        list-style: none;
        position: relative;
        text-indent: -1.4rem;
        font-family: agenda, sans-serif;
        text-shadow: var(--ft-text-shadow);

        &:before {
          content: "";
          display: inline-block;
          position: relative;
          width: .417rem;
          height: .417rem;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 1rem;
        }
      }
    }

    .cocktail {
      background-repeat: no-repeat;
      height: 14rem;
      background-size: contain;
      background-position: center;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }

  .carousel__pagination-button:not(.carousel__pagination-button--active):after,
  .recipe-body li:before {
    background-color: var(--product-color) !important;
  }
}

.carousel__pagination-button {
	outline: none;
}

.carousel__pagination-button:after {
	height: 8px !important;
	width: 8px !important;
	border-radius: 50% !important;
	outline: none;
}

.carousel__pagination {
	margin: 0 !important;
	padding: 0 !important;
}

@keyframes slideInRight {
	0% {
		transform: translate(100%);
		opacity: 0;
	}

	to {
		transform: translate(0);
		opacity: 1;
	}
}
</style>
