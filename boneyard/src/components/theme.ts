// https://styled-system.com/theme-specification

// multiples of 5
const space = Array.from({ length: 40 }, (_, idx) => idx * 5);

const theme = {
  fonts: {
    openSans: '"Open Sans", sans-serif',
    inter: 'Inter, sans-serif',
    poppins: 'Poppins',
  },
  fontSizes: [12, 14, 18, 20, 24, 32, 40, 80],
  space,
  colors: {
    gray100: '#333',
    gray200: '#666',
    gray300: '#999',
    gray400: '#ccc',
    white100: '#fff',
    black100: '#000',
    green100: '#2f2',
  },
};

export default theme;
