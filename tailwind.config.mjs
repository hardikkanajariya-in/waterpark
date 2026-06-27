/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F5FA8',
          dark: '#0B477D',
          light: '#E6EFF6',
        },
        secondary: {
          DEFAULT: '#0A88C2',
          dark: '#086C9B',
        },
        accent: {
          DEFAULT: '#29B6F6',
        },
        dark: {
          DEFAULT: '#111827',
          light: '#1F2937',
          muted: '#6B7280',
        },
        light: {
          DEFAULT: '#FAFBFC',
          darker: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(17, 24, 39, 0.03), 0 2px 8px -1px rgba(17, 24, 39, 0.02)',
        'soft-lg': '0 10px 30px -5px rgba(17, 24, 39, 0.05), 0 4px 12px -2px rgba(17, 24, 39, 0.02)',
      },
      borderRadius: {
        '2xl': '0.75rem',
        '3xl': '1rem',
      }
    },
  },
  plugins: [],
}
