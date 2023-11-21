// Assets
import userAvatarOne from '$lib/assets/images/user-1.webp';
import userAvatarTwo from '$lib/assets/images/user-2.webp';
import userAvatarThree from '$lib/assets/images/user-3.webp';

export const INITIAL_STORIES_DATA = [
	{
		rate: 5,
		description:
			'<p class="font-poppins font-semibold text-muted text-lg leading-8">We hit our first <span class="font-poppins font-semibold text-white text-lg">billion dollar valuation</span> because of WeServe services was great enough.</p>',
		username: 'Apiiyu',
		position: 'Creator of WeServe',
		avatar: userAvatarOne
	},
	{
		rate: 4,
		description:
			'<p class="font-poppins font-semibold text-muted text-lg leading-8"> <span class="font-poppins font-semibold text-white text-lg">Reaching global customers</span> never been easy before, thanks to WeServe for greate innovatives.</p>',
		username: 'Assyline',
		position: 'CEO of Invision',
		avatar: userAvatarTwo
	},
	{
		rate: 5,
		description:
			'<p class="font-poppins font-semibold text-muted text-lg leading-8">Scaling from scratch was easier because <span class="font-poppins font-semibold text-white text-lg">all automations</span> that WeServe provides for us.</p>',
		username: 'Jessica Veranda',
		position: 'CEO of Golden Gate',
		avatar: userAvatarThree
	}
];
