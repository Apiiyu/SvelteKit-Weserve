<script>
	// Assets
	import appLogo from '$lib/assets/images/app-logo.svg';
	import iconBag from '$lib/assets/icons/icon-bag.svg';

	// Constants
	import { NAVBAR_MENUS } from '$lib/constants';
</script>

<nav id="nav" class="container mb-[100px] mx-auto max-w-none">
	<section
		id="content"
		class="bg-secondary flex justify-between items-center px-8 py-5 rounded-[100px]"
	>
		<section id="left-content" class="flex items-center gap-12">
			<img src={appLogo} alt="app-logo" width="176" height="42" />

			<ul id="list-item" class="flex items-center gap-7 list-none">
				{#each NAVBAR_MENUS as menu}
					<li
						class="font-poppins text-base text-white hover:text-secondary transition-all ease-in-out duration-300 cursor-pointer"
					>
						<a href={menu.path}>
							{menu.title}
						</a>
					</li>
				{/each}
			</ul>
		</section>

		<section id="right-content" class="flex items-center gap-3">
			<button
				class="btn-secondary border border-solid border-secondary hover:border-none hover:border-transparent p-3 rounded-full bg-transparent hover:bg-btn-primary transition-all ease-in-out duration-300"
			>
				<img src={iconBag} alt="icon-bag" width="24" height="24" />
			</button>

			<button
				class="bg-btn-secondary hover:bg-btn-primary px-8 py-3 rounded-[100px] font-poppins text-base text-white transition-all ease-in-out duration-300"
			>
				Sign In
			</button>
		</section>
	</section>
</nav>
