/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				grislogo: '#575854',
				bganuncio: '#373131',
				brownLogo: '#8b8786',
				instaY: '#feda75',
				instaO: '#fa7e1e',
				instaP: '#d62976',
				instaPu: '#962fbf',
				instaB: '#4f5bd5',
			},
			fontFamily: {
				formulario: ['Bitter', 'serif'],
				anuncio: ['Open Sans', 'sans-serif'],
			},
		},
		screens: {
			xs: '320px',
			// => @media (min-width: 320px) { ... }
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
