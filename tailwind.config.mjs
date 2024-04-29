import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = {
  200: '#d5d9c8;',
  600: '#889e37',
  900: '#2f3619',
  950: '#222615' }
;


const gray = {
  100: '#ffffff',
  200: '#eaf0e8',
  300: '#bdc4bb',
  400: '#82907f',
  500: '#4f5c4d',
  700: '#303c2d',
  800: '#0a1608',
  900: '#050a03'
};


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};
