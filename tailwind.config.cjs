/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  },

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },

    extend: {
      colors: {
        // Primary
        darkBlueIntroEmail: 'hsl(217, 28%, 15%)',
        darkBlueMainBG: 'hsl(218, 28%, 13%)',
        darkBlueFooterBg: 'hsl(216, 53%, 9%)',
        darkBlueTestimonialsBG: 'hsl(219, 30%, 18%)',

        // Accent
        cyanInsideCTA: 'hsl(176, 68%, 64%)',
        blueInsideCTA: 'hsl(198, 60%, 50%)',
        lightRedError: 'hsl(0, 100%, 63%)',

        // Neutral
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
