/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Proxima Nova', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				'lg/15': '0 10px 15px -3px rgb(0 0 0 / 0.15), 0 4px 6px -4px rgb(0 0 0 / 0.15);'
			}
		},
	},
	plugins: [],
}
