<template>
    <div class="productBody">
        product body here
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.productBody {
    background-color: var(--ft-ptw-light);
    position: relative;
	display: flex;
	justify-content: space-around;
	height: calc(100vh - var(--header-height));
	height: calc(100dvh - var(--header-height));
	width: 100%
}
</style>