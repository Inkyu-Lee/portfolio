/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          '2xl': '1536px',
          '3xl': '1920px', // 추가적인 너비 설정
          '4xl': '2560px', // 추가적인 너비 설정
        },
      },
      maxWidth: {
        '3xl': '1920px', // 추가적인 최대 너비 설정
        '4xl': '2560px', // 추가적인 최대 너비 설정
      },
    },
  },
  varinats: {},
  plugins: [],
}
