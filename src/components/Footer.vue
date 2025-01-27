<script setup lang="ts"></script>

<template>
	<div class="wrapper">
		<footer>
			<div>
				<a
					target="_blank"
					href="https://github.com/albers3/opencae"
					class="link passive"
					>GitHub</a
				>
				<br />
				<br />
				<div>{{ $t("footer-credits") }}</div>
			</div>
			<div>
				<div class="footer-headline">{{ $t("footer-column-1") }}</div>
				<div>
					<a class="link passive">{{ $t("coming-soon") }}</a>
				</div>
			</div>
			<div>
				<div class="footer-headline">{{ $t("footer-column-2") }}</div>
				<div>
					<a class="link passive">{{ $t("coming-soon") }}</a>
				</div>
			</div>
			<div>
				<div class="footer-headline">{{ $t("footer-column-3") }}</div>
				<div>
					<a class="link passive">{{ $t("coming-soon") }}</a>
				</div>
			</div>
			<div>
				<div class="footer-headline">{{ $t("footer-column-4") }}</div>
				<div>
					<a
						target="_blank"
						href="https://github.com/albers3/opencae"
						class="link passive"
						>{{ $t("footer-library-documentation") }}</a
					>
				</div>
				<div>
					<a
						target="_blank"
						href="https://github.com/albers3/opencae"
						class="link passive"
						>{{ $t("footer-library-source") }}</a
					>
				</div>
				<div>
					<a
						target="_blank"
						href="https://github.com/albers3/opencae/issues"
						class="link passive"
						>{{ $t("footer-library-issues") }}</a
					>
				</div>
				<div>
					<a
						target="_blank"
						href="https://github.com/albers3/opencae-viewer"
						class="link passive"
						>{{ $t("footer-viewer-documentation") }}</a
					>
				</div>
				<div>
					<a
						target="_blank"
						href="https://github.com/albers3/opencae-viewer"
						class="link passive"
						>{{ $t("footer-viewer-source") }}</a
					>
				</div>
				<div>
					<a
						target="_blank"
						href="https://github.com/albers3/opencae-viewer/issues"
						class="link passive"
						>{{ $t("footer-viewer-issues") }}</a
					>
				</div>
			</div>
		</footer>
	</div>
</template>

<style scoped>
footer {
	display: grid;
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
	grid-template-columns: repeat(12, minmax(10px, 1fr));

	margin-top: 5rem;
	padding-bottom: 5rem;

	> div:nth-child(1) {
		grid-column: 1/5;
	}

	> div:nth-child(2),
	> div:nth-child(3),
	> div:nth-child(4),
	> div:nth-child(5) {
		grid-column: span 2;

		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}

	div.footer-headline {
		font-size: 0.75rem;
		color: var(--color-text);

		margin-bottom: 1rem;
	}
}
</style>
