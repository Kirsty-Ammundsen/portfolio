import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "cursive": ["Diphylleia", "serif"],
    },
    extend: {
      colors: {
        "primary": "#b9bab9",
        "darkGray": "#4f504f",
        "lightGray": "#d6d7d6",
        "offWhite": "#f2f2f2",
      },
      screens: {
        "xs": "370px",
      },
      fontSize: {
        "2.5xl": "2.6rem",
      },
    },
  },
} satisfies Config;
