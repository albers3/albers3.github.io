<script setup lang="ts">
</script>

<template>
<div class="banner">
	<div class="wrapper">
		<h5>{{ $t("banner") }} <a class="link inversed" target="_blank" href="https://github.com/albers3/opencae">GitHub</a></h5>
	</div>
</div>
</template>

<style scoped>
div.banner {
        padding: 1rem 0;
        width: 100%;
        background-color: var(--color-background-dark);
        color: white;
}

a.inversed {
	display: inline-block;
	color: lightgray;
	text-decoration-color: gray;

	&:hover {
		color: white !important;
		text-decoration-color: white;
	}
}
</style>
