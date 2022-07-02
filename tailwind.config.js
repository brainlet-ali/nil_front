module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Avenir',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        brand: {
          DEFAULT: '#FF2E20',
          50: '#FFDAD8',
          100: '#FFC7C3',
          200: '#FFA19A',
          300: '#FF7A72',
          400: '#FF5449',
          500: '#FF2E20',
          600: '#E70E00',
          700: '#AF0B00',
          800: '#770700',
          900: '#3F0400',
          code_light: '#F6F6F6',
          code_dark: '#1C1B1B',
        },
      },
    },
  },
  plugins: [],
}
