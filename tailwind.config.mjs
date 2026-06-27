/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077B6',
          dark: '#005F92',
          light: '#E6F3FA',
        },
        secondary: {
          DEFAULT: '#00B4D8',
          dark: '#0090AE',
        },
        accent: {
          DEFAULT: '#0096C7',
        },
        dark: {
          DEFAULT: '#023047',
          light: '#0A4A6D',
          muted: '#4F738E',
        },
        light: {
          DEFAULT: '#F8FCFF',
          darker: '#EBF4FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(2, 48, 71, 0.05), 0 2px 8px -1px rgba(2, 48, 71, 0.03)',
        'soft-lg': '0 10px 30px -5px rgba(2, 48, 71, 0.08), 0 4px 12px -2px rgba(2, 48, 71, 0.04)',
        'soft-xl': '0 20px 40px -10px rgba(2, 48, 71, 0.12), 0 8px 16px -4px rgba(2, 48, 71, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
