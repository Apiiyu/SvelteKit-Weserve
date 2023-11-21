<script lang="ts">
	/**
	 * @description Define props and specify the interfaces
	 */
	export let icon: string;
	export let title: string;
	export let description: string;
</script>

<figure
	class="group col-span-4 relative top-0 left-0 right-0 bg-secondary hover:bg-btn-primary flex items-start gap-7 p-8 rounded-2xl cursor-pointer transition-all ease-in-out duration-300"
>
	<div
		class="w-8 h-28 absolute top-5 right-16 rotate-[30deg] bg-[#BE97FF] blur-[20px] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
	>
		&nbsp;
	</div>

	<img src={icon} alt="feature-icon" class="text-white" />

	<figcaption class="flex flex-col gap-1">
		<h2 class="font-poppins font-semibold text-xl text-white">{title}</h2>

		<p
			class="font-poppins font-medium text-base text-muted group-hover:text-secondary leading-7 max-w-[230px] transition-all ease-in-out duration-300"
		>
			{description}
		</p>
	</figcaption>
</figure>
