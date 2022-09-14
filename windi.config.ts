import { defineConfig } from 'windicss/helpers';

const colors = require('windicss/colors');
const typography = require('windicss/plugin/typography');

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        DEFAULT: colors.teal[500],
        ...colors.teal,
      },
    },
  },
  shortcuts: {
    btn: {
      color: 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-teal-700',
        color: 'black',
      },
    },
    'btn-primary': 'text-white bg-teal-500 hover:bg-teal-700',
  },
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [
    typography({
      // Turns text color to light, when dark mode enabled. Default = false
      dark: true,
    }),
  ],
});
