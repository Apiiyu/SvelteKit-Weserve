/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				'btn-primary': '#640EF1',
				'btn-secondary': '#2D2F4E',
				primary: '#05051E',
				secondary: '#15162F',
				ternary: '#080C2E',
				gray: '#2D2F4E',
				purple: '#640EF1',
				yellow: '#FFD15A'
			},
			borderColor: {
				primary: '#640EF1',
				secondary: '#2D2F4E'
			},
			container: {
				padding: {
					xl: '75px'
				}
			},
			fill: {
				muted: '#61647D'
			},
			fontFamily: {
				'clash-display': ['Clash Display', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			textColor: {
				primary: '#080C2E',
				secondary: '#E0CDFF',
				muted: '#B5B8CA',
				purple: '#640EF1'
			},
			stroke: {
				purple: '#640EF1'
			}
		}
	},
	plugins: []
};
