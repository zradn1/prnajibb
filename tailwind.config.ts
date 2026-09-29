import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F1EA',
        paper: '#FBF9F5',
        charcoal: '#202321',
        navy: '#122A3A',
        champagne: '#B79B70',
        line: '#D8D0C5',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'Arial', 'sans-serif'],
      },
      letterSpacing: { editorial: '0.16em' },
      boxShadow: { editorial: '0 25px 80px rgba(18,42,58,.12)' },
    },
  },
  plugins: [],
}
export default config
