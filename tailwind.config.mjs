
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
		// Переопределяем `sm` на 500px
		sm: '300px',
		// Оставшиеся брейкпоинты можно копировать из "tailwindcss/defaultTheme"
		// или использовать свои
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
		  sm: { css: { /* ... */ } },
		  lg: { css: { /* ... */ } },
		  xl: { css: { /* ... */ } },
		  '2xl': { css: { /* ... */ } },
		},
	  },
	},
	plugins: [require('@tailwindcss/typography')],
  };
