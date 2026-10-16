/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './links/index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem' },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        // Azul-marinho do logo
        ink: {
          DEFAULT: '#0c2138',
          900: '#0c2138',
          950: '#071526',
        },
        // Paleta original do site (azul petróleo → ciano)
        darkblue: {
          50: '#e0f2f7',
          100: '#b3e0ed',
          200: '#80cbe2',
          300: '#4db6d8',
          400: '#26a2cc',
          500: '#008ebf',
          600: '#007cb3',
          700: '#006a99',
          800: '#005880',
          900: '#004666',
          950: '#002d40',
        },
        mist: '#f2f7f9',
      },
      fontFamily: {
        sans: ['"Figtree Variable"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque Variable"', '"Figtree Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.04)', opacity: '0.9' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        breathe: 'breathe 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
