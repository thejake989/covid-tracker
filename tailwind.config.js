module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      backgroundImage: {
        "covid.jpeg": "url('/src/assets/covid.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
