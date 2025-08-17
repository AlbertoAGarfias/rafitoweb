module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
   theme: {
    extend: {
      colors: {
        rafito: '#F3722C',
        rafitoBlue: '#577590',
        rafitoPink: '#F9D5E5',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(32px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}