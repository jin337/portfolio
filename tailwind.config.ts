import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '450px',
      },
    },
    fontFamily: {
      Grotesque: ['Grotesque', 'sans-serif'],
      Grotesque_b: ['Grotesque_b', 'sans-serif'],
      fantasy: ['fantasy', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config