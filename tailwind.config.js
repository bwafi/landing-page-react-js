/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#E5E5E5',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      content: {
        videoIcon: 'url("/public/svg/video-icon.svg")',
        img7: 'url("/public/img/image-7.jpg")',
      },
    },
  },
  plugins: [],
};
