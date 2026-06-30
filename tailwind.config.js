/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0b1020',
          soft: '#121933',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.12)',
        },
        text: {
          DEFAULT: '#eef2ff',
          muted: '#b8c0e0',
        },
        primary: {
          DEFAULT: '#7c9cff',
          2: '#66e3c4',
        },
        danger: '#ff7b8a',
        warning: '#ffcf5a',
        success: '#63e6a7',
        line: 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '22px',
        sm: '14px',
      },
      boxShadow: {
        DEFAULT: '0 20px 60px rgba(0, 0, 0, 0.35)',
      },
      spacing: {
        'max': '1180px',
      },
    },
  },
  plugins: [],
};
