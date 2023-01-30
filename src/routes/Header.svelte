<script>
	import { page } from "$app/stores";
	import { fly } from "svelte/transition";
	import angle_left from "$lib/angle-left.svg";
	import angle_right from "$lib/angle-right.svg";
	import { base } from "$app/paths";
    import { onMount } from "svelte";
	const transTime = 250;
	let visible = true;
	let windowWidth;
	let paths = {};
	const modules = import.meta.glob("/md/*.md");
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	for (let modulePath in modules) {
		modulePath = modulePath.replace("/md", "")
		console.log(modulePath)
		const name = modulePath.match(/(?<=\d.).*?(?=.md)/);
		if (name) paths[modulePath] = name.toString();
	}
	onMount(()=>{
		if (windowWidth<=690){
			visible = false;
		}
	})
</script>

<svelte:window bind:innerWidth={windowWidth}/>
<section>
	{#if visible}
		<div
			transition:fly={{ x: -250, duration: transTime }}
			class="max-h-screen h-full flex p-5 pr-0 shadow-lg shadow-[var(--color-theme-2)] w-[20rem]"
		>
			<div class="max-h-screen h-full">
				<div class="pb-4">
					<p class="font-bold"><a href={`${base}/`}>Linux x64-86 ASMBLY</a></p>
				</div>
				<div>
					<nav class="flex flex-col">
						<ul style="list-style: none;">
							{#each Object.entries(paths) as [key, vallue]}
								<li
									class="pb-2 list-none"
									aria-current={$page.url.pathname === `${base}/x${encodeURI(key)}`
										? "page"
										: undefined}
								>
									<a href={`${base}/x${key}`}>{vallue}</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			</div>
			<button
				type="button"
				on:click={(e) => {
					visible = visible == true ? false : true;
				}}
				class="w-6 pr-2"
				><img src={angle_left} alt="" />
			</button>
		</div>
	{:else}
		{#await sleep(transTime) then}
			<button
				in:fly={{ x: -250 }}
				type="button"
				class="absolute p-2.5 h-screen z-10"
				on:click={() => {
					visible = visible == true ? false : true;
				}}
				><img
					src={angle_right}
					alt=""
					class="w-[10px]"
				/></button
			>
		{/await}
	{/if}
</section>

<style>
	li {
		position: relative;
		height: 100%;
	}

	li[aria-current="page"]::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: calc(50% - var(--size));
		left: 100%;
		border: var(--size) solid transparent;
		border-right: var(--size) solid var(--color-theme-3);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: var(--color-text);
		font-weight: 500;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-3);
	}
</style>
