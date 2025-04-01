import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				rocker: ['"New Rocker"', 'cursive'],
				serif: ['"DM Serif Display"', 'serif'],
				jersey: ['"Jersey 15"', 'cursive'],
				roboto: ['"Roboto"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

export default config;
