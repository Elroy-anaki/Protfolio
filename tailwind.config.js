// tailwind.config.js

module.exports = {
  content: [
    // './src/**/*.html', // כל קבצי ה-HTML בתיקיית src
    // './src/**/*.js',   // כל קבצי ה-JS בתיקיית src
    // './src/**/*.jsx',  // אם יש לך קבצי React (JSX)
    // './*.html',        // קבצי HTML בתיקייה הראשית
    // './*.js',          // קבצי JS בתיקייה הראשית
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-small': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2000px)' },
        }
      },
      animation: {
        'bounce-small': 'bounce-small 3s infinite',
      },
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      screens: {
        'sm': '576px', // שינוי של ה-'sm' ל-576 פיקסלים
      },
    },
  },
  // הגדרות נוספות
};

