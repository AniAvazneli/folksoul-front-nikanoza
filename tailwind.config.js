/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      '15/24': '62.5%',
    },
    fontFamily: {
      ninoMtavruli: 'BPG Nino Mtavruli, sans-serif',
      arial: 'BPG Arial, sans-serif',
    },
  },
  plugins: [],
};
