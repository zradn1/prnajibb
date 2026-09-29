import type { Config } from 'tailwindcss'

// Mirrors the locked tokens in app/globals.css (:root).
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F6F3',
        surface: '#EAF1EF',
        ink: '#102F34',
        'ink-deep': '#0A2326',
        charcoal: '#202827',
        muted: '#6C7471',
        accent: '#137F7A',
        'accent-light': '#62CFC4',
        line: '#D8E2DF',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      letterSpacing: { editorial: '0.16em' },
    },
  },
  corePlugins: { container: false },
  plugins: [],
}
export default config
