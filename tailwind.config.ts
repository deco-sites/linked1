import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: {
    themes: [],
    logs: false,
  },
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './public/index.html', 
    "./**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#01251D',
        secondary: '#3BEDB2',
        'white-20': 'rgba(255, 255, 255, 0.2)', // 20% de opacidade
        'white-80': 'rgba(255, 255, 255, 0.8)', // 80% de opacidade
        caribbeanGreen: '#00D2A0',
        sacramentoState: '#003330',
        'sacramentoState-80': 'rgba(0, 51, 48, 0.8)', // 80% de opacidade
        'sacramentoState-10': 'rgba(0, 51, 48, 0.1)', // 10% de opacidade
        mintCream: '#D6FFF5',
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
  },
};