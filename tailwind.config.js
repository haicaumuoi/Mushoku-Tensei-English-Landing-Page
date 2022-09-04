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
        corners:
          'linear-gradient(to right, black 4px, transparent 4px) 0 0,linear-gradient(to right, black 4px, transparent 4px) 0 100%,linear-gradient(to left, black 4px, transparent 4px) 100% 0,linear-gradient(to left, black 4px, transparent 100%,linear-gradient(to bottom, black 4px, transparent 4px) 0 0,linear-gradient(to bottom, black 4px, transparent 4px) 100% 0,linear-gradient(to top, black 4px, transparent 4px) 0 100%,linear-gradient(to top, black 4px, transparent 4px) 100% 100%;',
      },
      width: {
        75: '13.7rem',
        17.5: '19%',
      },
      height: {
        img_story: '32rem',
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
