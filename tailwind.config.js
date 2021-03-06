const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: ['Garamond', 'serif'],
    },
    extend: {
      maxWidth: {
        '7/10': '70%',
        '8/10': '80%',
        '2/10': '20%',
      },
      height: (theme) => ({
        'screen/3/4': '75vh',
      }),
      colors: {
        blue: {
          500: '#1a73e8',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
