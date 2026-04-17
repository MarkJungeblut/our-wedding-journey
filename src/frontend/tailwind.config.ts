import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#061b0e',
        'on-primary': '#ffffff',
        secondary: '#51634f',
        tertiary: '#211500',
        'tertiary-fixed': '#e9c176',
        surface: '#fbf9f4',
        'surface-low': '#f5f3ee',
        'surface-high': '#e4e2dd',
        'surface-lowest': '#ffffff',
      },
      fontFamily: {
        serif: ['Noto Serif', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.75rem',
        lg: '1rem',
      },
    },
  },
  plugins: [],
}

export default config
