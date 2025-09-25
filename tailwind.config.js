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
        // Brand Colors
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          500: '#1a1a1a',
          900: '#000000',
        },
        accent: {
          gold: '#d4af37',
          coral: '#ff6b6b',
          'coral-dark': '#ff5252',
        },
        neutral: {
          beige: '#f5f3f0',
          'warm-gray': '#8b7355',
        }
      },
      fontFamily: {
        'playfair': ['var(--font-montserrat)', 'sans-serif'],
        'inter': ['var(--font-montserrat)', 'sans-serif'],
        'dancing': ['var(--font-montserrat)', 'sans-serif'],
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