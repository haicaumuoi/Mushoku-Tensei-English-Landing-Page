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
        text_bg: 'linear-gradient(transparent 68%, #fbfe7f 30%)',
        movie_img_home: "url('/images/movie-img-home.png')",
        corners:
          'linear-gradient(to right, black 4px, transparent 4px) 0 0,linear-gradient(to right, black 4px, transparent 4px) 0 100%,linear-gradient(to left, black 4px, transparent 4px) 100% 0,linear-gradient(to left, black 4px, transparent 100%,linear-gradient(to bottom, black 4px, transparent 4px) 0 0,linear-gradient(to bottom, black 4px, transparent 4px) 100% 0,linear-gradient(to top, black 4px, transparent 4px) 0 100%,linear-gradient(to top, black 4px, transparent 4px) 100% 100%;',
        roundBackground:
          "url('data:image/svg+xml;base64,PHN2ZyBpZD0iZ3JvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzIuMDUgNDM0LjU3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjhlNTt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzI5Ljc5LDQyMy42NWMtNjIuODgsMTkuODYtMTI5LjA4LDAtMTgyLTM5LjcxLTMuMzEtNi42Mi05LjkzLTkuOTMtMTYuNTUtMTYuNTUtMTYuNTUtMTYuNTUtMjMuMTctMzkuNzItMTkuODYtNjIuODksNjIuODgsNTkuNTgsMTU4Ljg3LDkyLjY4LDIzOC4zLDM5LjcyQzQzOSwyODQuNjQsNDUyLjI2LDE2OC44LDQwNS45Miw3OS40NCwzODkuMzcsNDYuMzQsMzU5LjU4LDIzLjE3LDMzMy4xLDBjMTMuMjQsMTYuNTUsMjkuNzksMjYuNDgsNDMsNDYuMzQsMTkuODYsMjkuNzksMzMuMSw2Mi44OCwzMy4xLDk5LjI5LDAsMzMuMS05LjkzLDYyLjg5LTMzLjEsODkuMzctNi42Miw5LjkyLTE2LjU1LDE2LjU0LTI5Ljc5LDEzLjIzLDMuMzEtNTIuOTUsMC0xMDkuMjItMzMuMDktMTU1LjU2QzI5My4zOSw2Ni4yLDI2Ni45MSw1Ni4yNywyNDAuNDMsNDNjLTI5Ljc5LTkuOTMtNTYuMjctOS45My04Ni4wNS02LjYybC0yOS43OSw5LjkzQzE4LjY3LDg5LjM2LTIxLDIxOC40NSwxMi4wNSwzMjEuMDUtMjEsMjI4LjM4LDE1LjM2LDExNS44NCwxMDQuNzMsNjkuNTFjNi42Mi0zLjMxLDE2LjU1LTYuNjIsMjMuMTctOS45MywzMy4wOS0xMy4yNCw2Ni4xOS05LjkzLDk5LjI5LDAsMzkuNzIsMTYuNTUsODIuNzUsNjYuMTksNTYuMjcsMTA5LjIyLTE5Ljg2LTQzLTY5LjUxLTYyLjg5LTExMi41NC01Ni4yNy0yOS43OCwzLjMxLTUyLjk1LDE5Ljg2LTcyLjgxLDQzLTQ2LjM0LDU2LjI3LTQzLDEzMi4zOSwwLDE5Miw1Myw3Mi44MSwxNDguOTQsMTA1LjkxLDIzMS42OCw3Ni4xMloiLz48L3N2Zz4=')",
        modalBg: "url('/images/modalBackground.jpg')",
        closeModal:
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjguMiAxNjQuODciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0ibGV0dGVyIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjgsODAuOTRhNzcuMjQsNzcuMjQsMCwwLDAtNDkuMi02NmMtMzAuMTMtMTEuMTktNjQtLjE1LTgyLjQ1LDIzLjgyQTYwLjkxLDYwLjkxLDAsMCwwLDI1LjQ0LDU1LjEzYy04LjE0LDIwLjM1LTUuMDYsNDUsOC41MSw2Mi4yOWE2Ni42Myw2Ni42MywwLDAsMCw1Ljc5LDcuNDhDMTMsMTEyLjg3LDUuMzMsNzYsMTQuNjQsNTAuMzNjMTAuOC0yNi40LDM0LjgtNDQuNCw2Mi40LTQ5LjJDNjcuNDQtMi40Nyw1OSwzLjUzLDUxLDVhOTkuMTQsOTkuMTQsMCwwLDAtMTQuNjEsNy40OUMxMy40NCwyOC43My0yLjE2LDU1LjEzLjI0LDgzLjkzYTc3LjI0LDc3LjI0LDAsMCwwLDQ5LjIsNjZjMzAuMTMsMTEuMTksNjQsLjE1LDgyLjQ2LTIzLjgyYTYwLjQ5LDYwLjQ5LDAsMCwwLDEwLjg2LTE2LjM3YzguMTQtMjAuMzUsNS4wNi00NS04LjUtNjIuMjhhNjcuMSw2Ny4xLDAsMCwwLTUuOC03LjQ5YzI2Ljc4LDEyLDM0LjQyLDQ5LDI1LjEsNzQuNTctMTAuOCwyNi40LTM0LjgsNDQuNC02Mi40LDQ5LjIsOS42LDMuNiwxOC0yLjQsMjYtMy44N2E5OC4xNyw5OC4xNywwLDAsMCwxNC42MS03LjQ5QzE1NC43NiwxMzYuMTQsMTcwLjM2LDEwOS43NCwxNjgsODAuOTRaIi8+PHBvbHlnb24gcG9pbnRzPSIxMTEuNjEgNTguMDIgMTA3LjY3IDU0LjA4IDg0LjEgNzcuNjUgNjAuNTMgNTQuMDggNTYuNTkgNTguMDIgODAuMTYgODEuNTkgNTYuNTkgMTA1LjE2IDYwLjUzIDEwOS4xIDg0LjEgODUuNTMgMTA3LjY3IDEwOS4xIDExMS42MSAxMDUuMTYgODguMDQgODEuNTkgMTExLjYxIDU4LjAyIi8+PC9nPjwvc3ZnPg==") ',
        movieIcon:
          'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC4zIDIwLjQyIj48ZyBpZD0ibGV0dGVyLTIiIGRhdGEtbmFtZT0ibGV0dGVyIj48cGF0aCBkPSJNMTUuNSwxOS45MUE5LjU1LDkuNTUsMCwwLDEsNi45NCwxOGMtLjE1LS4zMS0uNDYtLjQ3LS43Ny0uNzhhMy40MywzLjQzLDAsMCwxLS45NC0zYzMsMi44LDcuNDcsNC4zNSwxMS4yLDEuODYsNC4yLTIuOCw0LjgyLTguMjQsMi42NC0xMi40NEExMywxMywwLDAsMCwxNS42NSwwYTI3LjA3LDI3LjA3LDAsMCwxLDIsMi4xOCw4LjMyLDguMzIsMCwwLDEsMS41Niw0LjY2QTYuMTIsNi4xMiwwLDAsMSwxNy42NywxMWExLjI0LDEuMjQsMCwwLDEtMS40LjYyYy4xNi0yLjQ4LDAtNS4xMy0xLjU1LTcuMzFBOC40NCw4LjQ0LDAsMCwwLDExLjMsMmE5LjE2LDkuMTYsMCwwLDAtNC4wNS0uMzFsLTEuNC40N0MuODgsNC4yLTEsMTAuMjYuNTcsMTUuMDktMSwxMC43My43Miw1LjQ0LDQuOTIsMy4yNyw1LjIzLDMuMTEsNS43LDMsNiwyLjhhNi44Nyw2Ljg3LDAsMCwxLDQuNjcsMGMxLjg2Ljc4LDMuODgsMy4xMSwyLjY0LDUuMTNBNSw1LDAsMCwwLDgsNS4yOWE1LjIxLDUuMjEsMCwwLDAtMy40MiwyLDcuMjQsNy4yNCwwLDAsMCwwLDlBOS42Nyw5LjY3LDAsMCwwLDE1LjUsMTkuOTFaIi8+PC9nPjwvc3ZnPg==);',
        smallScreen: "url('/images/phone.png')",
      },
      backgroundSize: {
        bg_character: '60%',
      },
      top: {
        characterLine: '26.5rem',
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

      textIndent: {
        nametag: '-100000px',
      },
    },
  },
  plugins: [],
};
