<script>
	import Header from "./Header.svelte";
	import "../app.css";
	import "./styles.css";
</script>

<div class="flex flex-row max-h-full max-w-full h-screen">
	<Header />
	<div class="flex flex-col w-screen">
		<main class="relative flex-1 max-h-full max-w-full h-screen p-10 overflow-y-scroll">
			<slot />
		</main>
		<footer class="flex flex-col items-center">
			<p>
				don't forget to visit <a
					class="font-bold"
					target="_blank" rel="noreferrer"
					href="https://github.com/kawaii-ghost/linux-x64-asm">kawaii-ghost/linux-x64-asm</a
				>
			</p>
		</footer>
	</div>
</div>
