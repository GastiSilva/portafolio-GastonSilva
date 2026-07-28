export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          50: '#f0fdf4',
          100: '#dcfce7',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          900: '#14532d',
        },
        saber: {
          light: '#38bdf8',
          dark: '#facc15',
        },
        ink: {
          950: '#0a0f0d',
          900: '#0f1713',
          800: '#16211b',
        },
      },
      fontFamily: {
        display: ['"Rajdhani"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
