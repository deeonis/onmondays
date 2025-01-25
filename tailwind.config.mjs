
const disabledCss = {
	'code::before': false,
	'code::after': false,
	'blockquote p:first-of-type::before': false,
	'blockquote p:last-of-type::after': false,
	pre: false,
	code: false,
	'pre code': false
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  screens: {
		xs: '430px', // Новый брейкпоинт для меню
		sm: '640px', // Оставляем дефолтный sm для остальных элементов
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px',
	  },
	  extend: {
		typography: {
		  DEFAULT: {
			css: {
			  'code::before': false,
			  'code::after': false,
			  'blockquote p:first-of-type::before': false,
			  'blockquote p:last-of-type::after': false,
			  pre: false,
			  code: false,
			  'pre code': false,
			},
		  },
		},
	  },
	},
	plugins: [require('@tailwindcss/typography')],
  };