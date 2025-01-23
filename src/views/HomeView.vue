<script setup lang="ts">

</script>

<template>
	<div class="wrapper">
		<main>
			<section class="cover">
				<h1 class="header">{{ $t("welcome") }}</h1>
			</section>
			<section class="preview">
				<img
					src="../assets/flow.png"
					alt="preview">
			</section>
			<section class="description">
				<h3>{{ $t("description") }}</h3>
			</section>
			<section class="introduction">
				<div class="section-headline">
					<h2>{{ $t("introduction-headline") }}</h2>
				</div>
				<div class="section-content">
					<p>{{ $t("introduction-description-1") }}</p>
					<p>{{ $t("introduction-description-2") }}</p>
				</div>
			</section>
			<section class="toolchain">
				<div class="section-headline">
					<h2>{{ $t("toolchain-headline") }}</h2>
				</div>
				<div class="section-description">
					<h3>{{ $t("toolchain-description") }}</h3>
				</div>
			</section>
			<section class="toolchain">
				<div class="section-headline">
					<p>{{ $t("library-super-headline") }}</p>
					<h2>{{ $t("library-headline") }}</h2>
				</div>
				<div class="section-article-header">
					<h3>{{ $t("library-description-headline") }}</h3>
				</div>
				<div class="section-article-body">
					<p>{{ $t("library-description") }}</p>
					<div><a class="link" href="/library">{{ $t("find-out-more") }}</a></div>
				</div>
			</section>
			<section class="toolchain">
				<div class="section-headline">
					<p>{{ $t("viewer-super-headline") }}</p>
					<h2>{{ $t("viewer-headline") }}</h2>
				</div>
				<div class="section-article-header">
					<h3>{{ $t("viewer-description-headline") }}</h3>
				</div>
				<div class="section-article-body">
					<p>{{ $t("viewer-description") }}</p>
					<div><a class="link" href="/viewer">{{$t("find-out-more") }}</a></div>
				</div>
			</section>
			<section class="goal">
				<div class="section-headline">
					<h2>{{ $t("goal-headline") }}</h2>
				</div>
				<div class="section-4-columns">
					<div class="column">
						<p class="small">— 1</p>
						<h4>{{ $t("goal-headline-1") }}</h4>
						<p>{{ $t("goal-description-1") }}</p>
					</div>
					<div class="column">
						<p class="small">— 2</p>
						<h4>{{ $t("goal-headline-2") }}</h4>
						<p>{{ $t("goal-description-2") }}</p>
					</div>
					<div class="column">
						<p class="small">— 3</p>
						<h4>{{ $t("goal-headline-3") }}</h4>
						<p>{{ $t("goal-description-3") }}</p>
					</div>
					<div class="column">
						<p class="small">— 4</p>
						<h4>{{ $t("goal-headline-4") }}</h4>
						<p>{{ $t("goal-description-4") }}</p>
					</div>
				</div>
			</section>
			<section class="principle">
				<div class="section-headline">
					<h2>{{ $t("principle-headline-1") }}</h2>
				</div>
				<div class="section-article-body">
					<p>{{ $t("principle-description-1") }}</p>
					<div><a class="link" href="/coming-soon">{{ $t("find-out-more") }}</a></div>
				</div>
			</section>
			<section class="principle">
				<div class="section-headline">
					<h2>{{ $t("principle-headline-2") }}</h2>
				</div>
				<div class="section-article-body">
					<p>{{ $t("principle-description-2") }}</p>
					<div><a class="link" href="/coming-soon">{{ $t("find-out-more") }}</a></div>
				</div>
			</section>
			<section class="principle">
				<div class="section-headline">
					<h2>{{ $t("principle-headline-3") }}</h2>
				</div>
				<div class="section-article-body">
					<p>{{ $t("principle-description-3") }}</p>
					<div><a class="link" href="/coming-soon">{{ $t("find-out-more") }}</a></div>
				</div>
			</section>
		</main>
	</div>
</template>

<style scoped>
section.cover {
	h1 {
		grid-column: 1/11;
	}
}

section.preview {
	margin-bottom: 0;
	padding-top: 0;

	background-color: var(--color-primary);
	width: 100%;
	aspect-ratio: calc(5/3);

	display: flex;
	justify-items: center;
	align-content: center;

	overflow: hidden;

	img {
		width: 100%;
	}
}

section.description {
	h3 {
		grid-column: 7/13;
	}
}

section.introduction {
	border-top: 1px solid gray;
	margin-bottom: 5rem;
}

section.toolchain {
	border-top: 1px solid gray;
	margin-bottom: 5rem;
}

section.goal {
	border-top: 1px solid gray;
	margin-bottom: 5rem;
}

section.principle {
	border-top: 1px solid gray;
	margin-bottom: 5rem;
}
</style>
