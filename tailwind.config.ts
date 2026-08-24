import type { Config } from 'tailwindcss'
import { geistSans, geistMono } from 'geist/font/sans'
import { inter } from '@studio-freight/inter'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: [geistSans.variable, 'sans-serif'],
        body: [inter.variable, 'sans-serif'],
        mono: [geistMono.variable, 'monospace'],
      },
      colors: {
        background: '#0A0A0A',
        surface: '#0D0D0D',
        surfaceLight: '#1A1A1A',
        border: '#262626',
        gold: {
          50: '#FDF9F0',
          100: '#FAF3E0',
          200: '#F5E5C1',
          300: '#EFD19A',
          400: '#E8B86B',
          500: '#E0A045',
          600: '#D68A28',
          700: '#B56F1F',
          800: '#915A1E',
          900: '#764A1C',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
