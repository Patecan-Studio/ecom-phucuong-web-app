/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fa211c", // Replace with your desired primary color
        primary_1: "#ec2029", // Replace with your desired primary color
        primary_2: "#d91f26",
        secondary: "#931a1d", // Replace with your desired primary color
      },
    },
    fontFamily: {
      custom: ["SFUFuturaRegular", "sans"],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
