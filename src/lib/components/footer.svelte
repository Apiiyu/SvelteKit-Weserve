<script lang="ts">
	// Assets
	import appLogo from '$lib/assets/images/app-logo.svg';

	// Constants
	import { SOCIAL_MEDIA } from '$lib/constants';

	// Interfaces
	import type { IPropsFooter } from '$lib/interfaces';

	/**
	 * @description Define props and specify the interfaces
	 */
	export let data: IPropsFooter[];
</script>

<footer
	class="container grid grid-rows-1 grid-cols-12 gap-8 relative top-0 left-0 right-0 bottom-0 z-0 bg-secondary -mt-64 pt-[330px] pb-12"
>
	<aside id="left-content" class="col-span-4 flex flex-col gap-8">
		<img src={appLogo} alt="app-logo" width="160" height="38" class="max-w-[160px]" />

		<p class="font-poppins font-medium text-base text-muted leading-8 max-w-xs">
			We host your empire business today using the latest technologies.
		</p>

		<section id="social-media" class="flex items-center gap-3">
			{#each SOCIAL_MEDIA as socialMedia}
				<a
					href={socialMedia.link}
					class="w-12 h-12 bg-gray hover:bg-btn-primary flex flex-col justify-center items-center rounded-full transition-all ease-in-out duration-300"
				>
					<img src={socialMedia.icon} alt={socialMedia.name} width="24" height="24" />
				</a>
			{/each}
		</section>
	</aside>

	<section id="right-content" class="col-span-8">
		<section id="content" class="grid grid-rows-1 grid-cols-12 gap-8">
			{#each data as item}
				<figure id="item" class="col-span-4 flex flex-col gap-8">
					<h1 class="font-poppins font-bold text-lg text-white">
						{item.title}
					</h1>

					<figcaption class="flex flex-col gap-4">
						{#each item.menus as menu}
							<a
								href={menu.linkTo}
								class="font-poppins font-medium text-base text-medium text-muted hover:text-white transition-all ease-in-out duration-300"
							>
								{menu.title}
							</a>
						{/each}
					</figcaption>
				</figure>
			{/each}
		</section>
	</section>
</footer>
