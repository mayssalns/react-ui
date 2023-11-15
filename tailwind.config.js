/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2349FF',
        secondary: '#000000',
        tuscany: '#EEC300',
        flamingo: '#FE8D8F',
        tomato: '#E94F40',
        perssimon: '#F26851',
        lavander: '#A59FFD',
        turquoise: '#3CCFC5',
        ice: '#63BEFF',
        pearl: '#E6E2DB',
        periwinkle: '#D5DCE7',
        basic: '#F7F7F7',
        smoke: '#F5F5F5',
        error: '#ff0000',
        black: {
          850: '#1C1C1C',
          900: '#0A0A0A',
          950: '#000000',
        },
        gray: {
          800: '#D0D0D0',
          850: '#707070',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1540px',
      },
      width: {
        1204: '75.25rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        ripple: 'ripple 1s linear infinite',
        toggle: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        collapse: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'transition-opacity': {
          opacity: 1,
          transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
        ripple: {
          '0%': {
            width: '0px',
            height: '0px',
            opacity: '0.5',
          },
          '100%': {
            width: '500px',
            height: '500px',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')({ className: 'wysiwyg' })],
}
