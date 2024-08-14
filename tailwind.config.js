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
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
					'3xl': '8rem',
					'4xl': '10rem'
				}
			},
			fill: {
				muted: '#61647D'
			},
			fontFamily: {
				'clash-display': ['Clash Display', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			screens: {
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1400px',
				// => @media (min-width: 1400px) { ... }

				'3xl': '1650px',
				// => @media (min-width: 1650px) { ... }

				'4xl': '1920px',
				// => @media (min-width: 1920px) { ... }

				'5xl': '2560px'
				// => @media (min-width: 2560px) { ... }
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
