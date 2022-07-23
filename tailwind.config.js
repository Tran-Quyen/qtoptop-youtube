module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        1600: '1600px',
        650: '650px',
        550: '550px',
        450: '450px',
        400: '400px',
        260: '260px',
        210: '210px',
      },
      height: {
        900: '900px',
        600: '600px',
        458: '458px',
        280: '280px',
        '88vh': '88vh',
      },
      top: {
        '50%': '50%',
      },
      backgroundColor: {
        primary: '#F1F1F2',
        blur: '030303',
      },
      colors: {
        primary: 'rgb(22,24,35)',
      },
      backgroundImage: {
        'blurred-img': 'url()',
      },
    },
  },
  plugins: [],
};

