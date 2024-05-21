/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {},
		colors: {
			primary: {
				'50': '#fefbe8',
				'100': '#fff8c2',
				'200': '#ffec89',
				'300': '#ffde59',
				'400': '#fdc512',
				'500': '#ecab06',
				'600': '#cc8302',
				'700': '#a35c05',
				'800': '#86480d',
				'900': '#723b11',
				'950': '#431e05',
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
