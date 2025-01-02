import type { Config } from "tailwindcss";
import { colors } from "./src/theme/colors";
import { keyframes, animations } from "./src/theme/animations";
import { typography } from "./src/theme/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors,
      ...typography,
      keyframes,
      animation: animations,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;