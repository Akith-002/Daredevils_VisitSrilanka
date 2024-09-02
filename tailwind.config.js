const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#01385F",
          2: "#3A77BD",
        },
        green: {
          1: "#1B501B",
          2: "#6CBE3A",
        },
        sand: {
          DEFAULT: "#F0E3D5",
        },
      },
    },
  },
  plugins: [],
});
