<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

function changeLanguage(event: any) {
	const lang = event.target.value;
	locale.value = lang;
	localStorage.setItem("selectedLanguage", lang);
}

function created() {
	const savedLanguage = localStorage.getItem("selectedLanguage");
	if (savedLanguage) {
		locale.value = savedLanguage;
	}
}
created();
</script>

<template>
	<div class="wrapper header">
		<header>
			<a href="/"><img src="../assets/logo.svg" height="32" /></a>
			<select v-model="$i18n.locale" @change="changeLanguage($event)">
				<option
					v-for="locale in $i18n.availableLocales"
					:key="`locale-${locale}`"
					:value="locale"
				>
					{{ locale }}
				</option>
			</select>
		</header>
	</div>
</template>

<style scoped>
div.header {
	position: sticky;
	top: 0;
}
header {
	margin-top: 2.5rem;
	width: 100%;
	position: absolute;

	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 1rem;
}

select {
	margin-bottom: 0.5rem;

	cursor: pointer;
	background-color: transparent;
	border: none;

	font-size: 1.125rem;
}
</style>
