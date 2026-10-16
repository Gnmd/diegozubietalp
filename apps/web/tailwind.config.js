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
        // Azul-marinho do logo: textos e botões
        ink: {
          DEFAULT: '#0c2138',
          900: '#0c2138',
          950: '#071526',
        },
        // Paleta original do site (azul petróleo → ciano), usada nos detalhes
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
        // Tons pastéis
        sand: {
          50: '#fbf8f4',
          100: '#f5efe7',
          200: '#ece2d5',
          300: '#dccdb9',
        },
        sky: {
          50: '#f2f8fb',
          100: '#e3eff5',
          200: '#cfe3ee',
          300: '#b5d4e5',
        },
      },
      fontFamily: {
        sans: ['"Figtree Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
      },
    },
  },
  plugins: [],
};
