/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/js/**/*.{html,js,jsx,ts,tsx}',  // inclu les fichiers dans assets/js
    './assets/styles/**/*.scss', // inclu les fichiers scss
    './templates/**/*.html.twig', // inclu les fichiers Twig si tu les utilises dans Symfony
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
