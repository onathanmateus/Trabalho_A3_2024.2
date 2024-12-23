// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        'diagonal-split': 'linear-gradient(135deg, #96ff96 50%, #ffffff 50%)',
        'horizontal-split': 'linear-gradient(180deg, #96ff96 50%, #ffffff 50%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
