// Constants
import { INITIAL_FOOTER_DATA } from '$lib/constants';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		footer: INITIAL_FOOTER_DATA
	};
}
