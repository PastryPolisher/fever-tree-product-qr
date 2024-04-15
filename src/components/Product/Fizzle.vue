<template>
  <div class="fizzle">
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1536"
      preserveAspectRatio="xMidYMax slice">
      <g v-for="(set, index) in shapes"
        :key="'set-' + index"
        v-bind="set.attributes">
        <g :class="set.shapeWrapperClass">
          <component v-for="(shape, sIndex) in set.shapesValues"
            :is="set.shapeIs"
            :key="`${set.shapeIs}-${sIndex}`"
            v-bind="{...set.shapesAttributes, ...shape}" 
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const shapes = ref([{
  // ellipses
  attributes: {
    fill: '#fff',
    'fill-opacity': '.75',
    transform: 'translate(55 42)'
  },
  shapeWrapperClass: 'bottom-layer',
  shapeIs: 'ellipse',
  shapesAttributes: {
    rx: '6',
    ry: '5.5'
  },
  shapesValues: [{
    cx: '6',
    cy: '1009.5'
  }, {
    cx: '138',
    cy: '1110.5'
  }, {
    cx: '398',
    cy: '1055.5'
  }, {
    cx: '719',
    cy: '1284.5'
  }, {
    cx: '760',
    cy: '1155.5'
  }, {
    cx: '635',
    cy: '1459.5'
  }, {
    cx: '478',
    cy: '1335.5'
  }, {
    cx: '322',
    cy: '1414.5'
  }, {
    cx: '247',
    cy: '1234.5'
  }, {
    cx: '154',
    cy: '1425.5'
  }, {
    cx: '731',
    cy: '773.5'
  }, {
    cx: '599',
    cy: '874.5'
  }, {
    cx: '339',
    cy: '819.5'
  }, {
    cx: '239',
    cy: '1004.5'
  }, {
    cx: '113',
    cy: '863.5'
  }, {
    cx: '102',
    cy: '1223.5'
  }, {
    cx: '395',
    cy: '1155.5'
  }, {
    cx: '826',
    cy: '943.5'
  }, {
    cx: '626',
    cy: '1054.5'
  }, {
    cx: '887',
    cy: '1366.5'
  }, {
    cx: '6',
    cy: '241.5'
  }, {
    cx: '138',
    cy: '342.5'
  }, {
    cx: '398',
    cy: '287.5'
  }, {
    cx: '719',
    cy: '516.5'
  }, {
    cx: '760',
    cy: '387.5'
  }, {
    cx: '635',
    cy: '691.5'
  }, {
    cx: '478',
    cy: '567.5'
  }, {
    cx: '322',
    cy: '646.5'
  }, {
    cx: '247',
    cy: '466.5'
  }, {
    cx: '154',
    cy: '657.5'
  }, {
    cx: '731',
    cy: '5.5'
  }, {
    cx: '599',
    cy: '106.5'
  }, {
    cx: '339',
    cy: '51.5'
  }, {
    cx: '239',
    cy: '236.5'
  }, {
    cx: '113',
    cy: '95.5'
  }, {
    cx: '102',
    cy: '455.5'
  }, {
    cx: '395',
    cy: '387.5'
  }, {
    cx: '826',
    cy: '175.5'
  }, {
    cx: '626',
    cy: '286.5'
  }, {
    cx: '887',
    cy: '598.5'
  }]
}, {
  // circles
  attributes: {
    fill: '#fff',
    'fill-opacity': '.3',
    transform: 'translate(65 63)'
  },
  shapeWrapperClass: 'top-layer',
  shapeIs: 'circle',
  shapesAttributes: {
    r: '8'
  },
  shapesValues: [{
    cx: '8',
    cy: '776',
    transform: ''
  }, {
    cx: '189',
    cy: '925',
    transform: ''
  }, {
    cx: '548',
    cy: '844',
    transform: ''
  }, {
    cx: '685',
    cy: '1115',
    transform: ''
  }, {
    cx: '858',
    cy: '909',
    transform: ''
  }, {
    cx: '874',
    cy: '1438',
    transform: 'rotate(180 874 1438)'
  }, {
    cx: '657',
    cy: '1256',
    transform: 'rotate(180 657 1256)'
  }, {
    cx: '443',
    cy: '1372',
    transform: 'rotate(180 443 1372)'
  }, {
    cx: '339',
    cy: '1107',
    transform: 'rotate(180 339 1107)'
  }, {
    cx: '24',
    cy: '1305',
    transform: 'rotate(180 24 1305)'
  }, {
    cx: '8',
    cy: '8',
    transform: ''
  }, {
    cx: '189',
    cy: '157',
    transform: ''
  }, {
    cx: '548',
    cy: '76',
    transform: ''
  }, {
    cx: '685',
    cy: '347',
    transform: ''
  }, {
    cx: '858',
    cy: '141',
    transform: ''
  }, {
    cx: '874',
    cy: '670',
    transform: 'rotate(180 874 670)'
  }, {
    cx: '657',
    cy: '488',
    transform: 'rotate(180 657 488)'
  }, {
    cx: '443',
    cy: '604',
    transform: 'rotate(180 443 604)'
  }, {
    cx: '339',
    cy: '339',
    transform: 'rotate(180 339 339)'
  }, {
    cx: '24',
    cy: '537',
    transform: 'rotate(180 24 537)'
  }]
}])

</script>

<style lang="scss" scoped>
.fizzle {
  position: absolute;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  bottom: 0;
  left: 0;

  svg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    bottom: 0;
    overflow: hidden;

    circle,
    ellipse {
	    stroke: var(--ft-grey);
    }

    .top-layer {
      will-change: transform;
      transform: translateY(768px);
      animation: fizz 1.5s infinite linear;
    }

    .bottom-layer {
      will-change: transform;
      transform: translateY(768px);
      animation: fizz 4s infinite linear;
    }
  }
}

@keyframes fizz {
	to {
		transform: translateY(0);
	}
}
</style>
