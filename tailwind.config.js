/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      '15/24': '62.5%',
      keyframes: {
        pulsation: {
          '100%': { boxShadow: '0 0 10px #FC7373' },
        },
        zoom: {
          '100%': {
            scale: '1.3',
          },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(300px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(300px) rotate(-360deg)' },
        },
      },
      animation: {
        pulsation: 'pulsation 0.3s infinite',
        zoom: 'zoom 0.5s infinite',
        orbit: 'orbit 4s linear infinite',
      },
    },
    fontFamily: {
      ninoMtavruli: 'BPG Nino Mtavruli, sans-serif',
      arial: 'BPG Arial, sans-serif',
    },
  },
  plugins: [],
};
