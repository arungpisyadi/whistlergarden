/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Whistler Garden Brand Colors
        primary: {
          gold: '#514027',
          'gold-light': '#a37238',
          'gold-dark': '#493010',
          'gold-50': '#faf9f7',
          'gold-100': '#f5f1ec',
          'gold-200': '#ebe2d6',
          'gold-300': '#d9c9b5',
          'gold-400': '#c4a888',
          'gold-500': '#9b7f5f',
          'gold-600': '#7a634a',
          'gold-700': '#514027',
          'gold-800': '#493010',
          'gold-900': '#3a2509',
        },
        neutral: {
          white: '#ffffff',
          cream: '#fefcf9',
          'cream-50': '#fefcf9',
          'cream-100': '#fdf9f2',
          'cream-200': '#fbf2e5',
          beige: '#f5f3f0',
          'beige-50': '#f8f6f4',
          'beige-100': '#f5f3f0',
          'beige-200': '#ede8e2',
          'beige-300': '#e0d7cd',
          'warm-gray': '#8b7355',
          'warm-gray-light': '#a68862',
          'warm-gray-dark': '#6b5638',
        },
        amber: {
          900: '#493010', // Custom amber-900 color to match primary.gold-dark
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'sans': ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        'serif': ['Montserrat', 'Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        }],
        'section-title': ['2.25rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'full-width': '100vw',
        'container': '1200px',
      },
      width: {
        'full-screen': '100vw',
      },
      aspectRatio: {
        'hero': '16 / 9',
        'feature': '4 / 3',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}