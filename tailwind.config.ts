import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        zero: "0px",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blackOpa: "rgb(0 0 0 / 0.8)",
        blackSoftNext: "rgb(0 0 0 / 0.1)",
        blackHardNext: "rgb(0 0 0 / 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      userDrag: {
        none: "none",
      },
      userSelect: {
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".no-drag": {
          userDrag: "none",
          WebkitUserDrag: "none",
          MozUserDrag: "none",
          msUserDrag: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
