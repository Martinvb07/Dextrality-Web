/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6DCCC1',
          dark: '#4BA89E',
          light: '#8FE4DB',
        },
        gold: {
          DEFAULT: '#D4A843',
          light: '#E8C76B',
          dark: '#B8892F',
        },
        brown: {
          DEFAULT: '#8B5A2B',
          dark: '#5D3A1A',
          light: '#A67B4D',
        },
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        minecraft: ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'slow-zoom': 'slowZoom 30s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'logo-float': 'logoFloat 2s ease-in-out infinite',
        'banner-glow': 'bannerGlow 4s ease-in-out infinite alternate',
        'blink': 'blink 1s step-end infinite',
        'loading-progress': 'loadingProgress 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s linear infinite',
        'pulse-dot': 'pulse 2s infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        logoFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bannerGlow: {
          '0%': { opacity: '0.7', transform: 'scale(1.15)' },
          '100%': { opacity: '1', transform: 'scale(1.25)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        loadingProgress: {
          '0%': { width: '0%' },
          '50%': { width: '70%' },
          '100%': { width: '100%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}

