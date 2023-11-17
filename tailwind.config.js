/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#05051E',
				secondary: '#15162F'
			},
			container: {
				padding: {
					xl: '75px'
				}
			},
			fontFamily: {
				'clash-display': ['Clash Display', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
