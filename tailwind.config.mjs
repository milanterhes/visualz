/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Space Grotesk Variable', "sans-serif"],
				'serif': ['Space Grotesk Variable', "sans-serif"],
				'mono': ['Space Grotesk Variable', "sans-serif"],
			  },
		},
	},
	plugins: [],
	darkMode: "class"
}
