/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app.js'],
  theme: {
    extend: {
      colors: {
        ink: '#172d35',
        muted: '#718087',
        paper: '#f7f8f5',
        coral: '#f27b59',
        mint: '#dcefe5',
        line: '#e8ede8'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 40px rgba(27, 49, 42, .05)'
      }
    }
  },
  plugins: []
};
