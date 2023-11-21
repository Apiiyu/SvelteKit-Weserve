<script>
	// Assets
	import iconGlobe from '$lib/assets/icons/icon-globe.svg';
	import imagePreviewProduct from '$lib/assets/images/hero_illustration.png';
</script>

<section id="hero" class="container relative top-0 left-0 right-0 z-0">
	<section id="trigger-text" class="flex flex-col justify-center items-center">
		<header class="flex flex-col justify-center items-center gap-8">
			<figure
				class="bg-secondary flex justify-center items-center gap-2 px-4 py-3 w-fit rounded-[100px]"
			>
				<img src={iconGlobe} alt="icon-globe" />

				<figcaption class="text-base text-white font-poppins font-semibold">
					Acquire global ecosystem $500 million
				</figcaption>
			</figure>

			<figure class="flex flex-col gap-3 justify-center items-center">
				<h1 class="font-clash-display font-semibold text-7xl text-white">#1 Best Provider</h1>

				<figcaption class="font-poppins font-medium text-base text-muted">
					We provide a variety of servers to grow your users without comprimising data.
				</figcaption>
			</figure>

			<section id="btn-cta" class="flex justify-center items-center">
				<button
					class="bg-btn-primary font-poppins font-bold text-lg text-white px-10 py-4 rounded-[100px] opacity-90 hover:opacity-100 transition-all ease-in-out duration-300"
				>
					Try Free Trial
				</button>

				<button
					class="group flex justify-center items-center gap-2 font-poppins font-semibold text-base text-white hover:text-purple px-10 py-4 rounded-[100px] transition-all ease-in-out duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						viewBox="0 0 25 25"
						class="fill-none cursor-pointer"
					>
						<path
							d="M20.5 12.7V14.4C20.5 17.55 18.7 18.9 16 18.9H7C4.3 18.9 2.5 17.55 2.5 14.4V9C2.5 5.85 4.3 4.5 7 4.5H9.7C9.57 4.88 9.5 5.3 9.5 5.75V9.65002C9.5 10.62 9.82 11.44 10.39 12.01C10.96 12.58 11.78 12.9 12.75 12.9V14.29C12.75 14.8 13.33 15.11 13.76 14.83L16.65 12.9H19.25C19.7 12.9 20.12 12.83 20.5 12.7Z"
							class="stroke-white group-hover:stroke-purple transition-all ease-in-out duration-300"
							stroke-width="2"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22.5 5.75V9.65002C22.5 11.14 21.74 12.26 20.5 12.7C20.12 12.83 19.7 12.9 19.25 12.9H16.65L13.76 14.83C13.33 15.11 12.75 14.8 12.75 14.29V12.9C11.78 12.9 10.96 12.58 10.39 12.01C9.82 11.44 9.5 10.62 9.5 9.65002V5.75C9.5 5.3 9.57 4.88 9.7 4.5C10.14 3.26 11.26 2.5 12.75 2.5H19.25C21.2 2.5 22.5 3.8 22.5 5.75Z"
							class="stroke-white group-hover:stroke-purple transition-all ease-in-out duration-300"
							stroke-width="2"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M7.8999 22.5H15.0999"
							class="stroke-white group-hover:stroke-purple transition-all ease-in-out duration-300"
							stroke-width="2"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M11.5 18.9V22.5"
							class="stroke-white group-hover:stroke-purple transition-all ease-in-out duration-300"
							stroke-width="2"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M18.9955 7.75H19.0045"
							class="stroke-white group-hover:stroke-purple transition-all ease-in-out duration-300"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M16.1957 7.75H16.2047"
							class="stroke-white group-hover:stroke-purple transition-all ease-in-out duration-300"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M13.3954 7.75H13.4044"
							class="stroke-white group-hover:stroke-purple transition-all ease-in-out duration-300"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					Schedule a Demo
				</button>
			</section>
		</header>
	</section>

	<section id="preview-product" class="grid grid-rows-1 grid-cols-12 mt-16">
		<div class="col-span-full">
			<picture class="w-full h-full">
				<img src={imagePreviewProduct} alt="img-preview-product" class="w-full h-full" />
			</picture>
		</div>
	</section>
</section>
