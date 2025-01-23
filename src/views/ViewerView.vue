<script setup lang="ts">
</script>

<template>
	<div class="wrapper">
		<br v-for="_ in 10">
		<h1>{{ $t("coming-soon") }}</h1>
		<h2>{{ $t("coming-soon-description") }}</h2>
		<br v-for="_ in 10">
	</div>
</template>

<style>
</style>
