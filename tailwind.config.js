const cityPosition = ["0px", "10px", "20px", "30px", "40px", "50px", "60px", "70px", "80px", "90px", "100px", "200px", "300px", "400px", "500px", "600px", "700px", "800px","900px", "1000px", "1100px", "1200px", "1300px", "1400px", "1500px" ];
const citySize = ["100px", "200px", "300px", "400px", "500px", "600px", "700px", "800px", "900px", "100px" ]
const safelist = [
  ...cityPosition.map((position) => `top-[${position}]`),
  ...cityPosition.map((position) => `left-[${position}]`),
  ...citySize.map((size) => `width-[${size}]`),
  ...citySize.map((size) => `height-[${size}]`),
  ...citySize.map((size) => `ml-[${size}]`),
  ...citySize.map((size) => `mt-[${size}]`),
];

// console.log("safelist", safelist);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  safelist,
  // rest of your tailwind config
  theme: {
    backgroundImage:{
      cityBg:"url('/src/assets/cityBg.jpg')",
      // blackTransparent: 'rgba(0, 0, 0, 0.7)',
    },
    backgroundColor:{blackTransparent: 'rgba(0, 0, 0, 0.7)',},
    extend: {},
  },
  plugins: [],
};
