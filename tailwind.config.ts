import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Radwave: ['Radwave', 'sans-serif'],
        Roxie: ['Roxie', 'sans-serif'],
        stardom: ["Stardom-Regular",'sans-serif']
      },
      keyframes: {
        reveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%) skew(-12deg) rotate(2deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        },
      },
      animation: {
        reveal: 'reveal 1.6s cubic-bezier(.77,0,.175,1) forwards',
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
