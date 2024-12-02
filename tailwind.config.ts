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
        'sacramentoState-10': 'rgba(0, 51, 48, 0.1)', // 10% de opacidade
        'sacramentoState-40': 'rgba(0, 51, 48, 0.4)', // 40% de opacidade
        'sacramentoState-80': 'rgba(0, 51, 48, 0.8)', // 80% de opacidade
        mintCream: '#D6FFF5',
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      lineHeight: {
        'tight-35': '35.2px', 
        'tight-32': '32.2px', 
        'tight-70': '70.4px', 
        'tight-72': '72px', 
        'tight-18': '18.8px',
        'tight-25': '25.2px',
        'tight-21': '21.15px',
        'tight-20': '20.7px',
        'tight-22': '22.4px',
        'tight-55': '55.2px',
        'tight-14': '14.3px',
        'tight-15': '15.6px',
        'tight-15.86': '15.86px',
        'tight-19': '19.6px',
        'tight-115': '115%'
      },
      letterSpacing: {
        'tight-2': '-0.02em',
        'tight-0.96': '-0.96px',
        'tight-0.44': '-0.44px',
        'tight-0.56': '-0.56px',
        'tight-1.28': '-1.28px'
    },
    container: {
      center: true,
    },
  },
},
};