/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        sidebar: "url('/images/bg-sidebar.png')",
        text_bg: 'linear-gradient(transparent 68%, #fbfe7f 10%)',
        movie_img_home: "url('/images/movie-img-home.png')",
      },
      width: {
        75: '13.7rem',
      },
      fontFamily: {
        mt_black: ['MT-black', 'cursive'],
        mt_smol: ['MT-smol', 'cursive'],
        mt_smol_italic: ['MT-smol-italic', 'cursive'],
      },
    },
  },
  plugins: [],
};
