const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#01385F",
          2: "#3A77BD",
          3: "#02386E",
          4: "#000B18",
        },
        green: {
          1: "#1B501B",
          2: "#6CBE3A",
        },
        customGreen: "#1B501B",
        sand: {
          DEFAULT: "#F0E3D5",
        },
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(250.23% 63.52% at 63.52% 44.26%, #FFF 0%, #F4F4F4 29.2%, #CECECE 74.4%, #8D8D8D 100%)",
      },
      lineHeight: {
        13: "3.25rem",
      },
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'], // Add fallback to monospace
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
});
