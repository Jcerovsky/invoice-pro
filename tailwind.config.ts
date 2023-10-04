import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        desktop: "950px",
      },
      colors: {
        themeColor: "rgb(30,33,57)",
        themeColorBg: "rgb(20,22,37)",
        heavyPurple: "rgba(124, 93, 250, 1)",
        mediumPurple: "rgba(126, 136, 195, 1)",
        lightPurple: "rgba(223, 227, 250, 1)",
        buttonPurple: "rgba(124, 93, 250, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
export default config;
