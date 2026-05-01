/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F5FBFC',
        surface: '#FFFFFF',
        border: '#D6ECEE',
        aqua: {
          50: '#EAF8F9',
          100: '#D1F0F2',
          200: '#A8E2E6',
          300: '#7DD8DE',
          400: '#5EBDC4',
          500: '#3FA89B',
          600: '#2A9098',
          700: '#1F7077',
          800: '#155054',
          900: '#0F2A2D',
        },
        ink: {
          DEFAULT: '#0F2A2D',
          muted: '#5C7479',
          soft: '#84979B',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Noto Sans TC"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'draw-line': 'drawLine 1.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
