/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jobseeker': "url('./assets/images/jobseekerpic.png')",
      },
      fontFamily: {
        'sans': ['Open Sans', 'system-ui',],
      }
    },
  },
  plugins: [],
}