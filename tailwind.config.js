/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {colors: {
			primary: '#7C3AED'
		}},
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		fontFamily: {
			'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
		},
		
	},
	plugins: [],
	darkMode: 'class',
}
