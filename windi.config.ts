import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  //darkMode: 'media',
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [
    require('windicss/plugin/typography')({
      // Turns text color to light, when dark mode enabled. Default = false
      dark: true,
    }),
  ],
});
