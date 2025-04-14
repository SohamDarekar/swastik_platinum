/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111827', // darker blue-gray
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#947c4d', // more sophisticated gold
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#f8fafc', // light gray background
          foreground: '#111827',
        },
        background: '#ffffff',
        foreground: '#111827',
        input: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};