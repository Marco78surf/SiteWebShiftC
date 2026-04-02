import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sc-bg':     '#0b1a0f',
        'sc-bg2':    '#111e15',
        'sc-bg3':    '#0f2218',
        'sc-green':  '#6edea0',
        'sc-text':   '#f0ede6',
      },
      fontFamily: {
        sans:  ['DM Sans', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
