// Constants
import {
	INITIAL_BENEFITS_DATA,
	INITIAL_FAQS_DATA,
	INITIAL_FEATURES_DATA,
	INITIAL_GROWING_DATA,
	INITIAL_SHOWCASE_DATA,
	INITIAL_STORIES_DATA
} from '$lib/constants';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		benefits: INITIAL_BENEFITS_DATA,
		faqs: INITIAL_FAQS_DATA,
		features: INITIAL_FEATURES_DATA,
		growings: INITIAL_GROWING_DATA,
		showcases: INITIAL_SHOWCASE_DATA,
		stories: INITIAL_STORIES_DATA
	};
}
