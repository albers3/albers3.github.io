<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Banner from "@/components/Banner.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
	<Banner></Banner>
	<Header></Header>
	<RouterView />
	<Footer></Footer>
</template>
